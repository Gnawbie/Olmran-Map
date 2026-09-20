// Public map viewer: Leaflet (CRS.Simple) over the four realm images, layer
// switching, search-to-jump, filter chips, marker popups, a zone item
// browser, a color-layer toggle slot, and a view-only "open Mini-Area"
// popup button that reuses js/room-graph-view.js. No moderator/editing UI
// lives on this page at all — that's moderator.html.
(function () {
  "use strict";

  const REALM_DATA_BY_LAYER = {
    "land-of-kaid": typeof REALM_KAID !== "undefined" ? REALM_KAID : [],
    "olmran-evil": typeof REALM_EVIL !== "undefined" ? REALM_EVIL : [],
    "olmran-good": typeof REALM_GOOD !== "undefined" ? REALM_GOOD : [],
    "olmran-chaos": typeof REALM_CHAOS !== "undefined" ? REALM_CHAOS : []
  };
  const realmIndexCache = new Map();
  function realmIndexFor(layerId) {
    if (!realmIndexCache.has(layerId)) {
      realmIndexCache.set(layerId, RoomGraphView.buildIndex(REALM_DATA_BY_LAYER[layerId] || []));
    }
    return realmIndexCache.get(layerId);
  }

  // A realm with Test-Builder room-graph data gets a second, separately
  // selectable "<Realm> WIP" layer entry (id `<realmLayerId>-wip`) rather
  // than replacing that realm's normal flat-image layer -- the two are
  // independent views a user picks between, not a fallback/override pair.
  const WIP_SUFFIX = "-wip";
  function isWipLayerId(id) { return id.endsWith(WIP_SUFFIX); }
  function baseLayerIdFor(wipId) { return wipId.slice(0, -WIP_SUFFIX.length); }

  const layerById = new Map(MAP_LAYERS.map(l => [l.id, l]));
  let currentLayerId = MAP_LAYERS[0].id;
  let imageLayer = null;
  let colorLayer = null;
  // The main WIP canvas's live explorer + which top-level Area it's
  // currently showing -- used by the user-flag "Create Flag" feature
  // (below) to know where to arm click-to-place and what to save. Reset
  // (armed placement dropped) on every switchLayer() call, since that
  // always replaces the explorer/area being shown.
  let currentExplorer = null;
  let currentWipAreaId = null;
  // Reassigned once the user-flags feature (below) is wired up -- lets
  // switchLayer() reset that feature's "armed" button UI without needing
  // to be declared after it in the file.
  let onLayerSwitchResetFlagPlacement = () => {};
  let markerLayerGroup = L.layerGroup();
  const mapEl = document.getElementById("map");
  const roomGraphRoot = document.getElementById("room-graph-root");
  // Chips default to ON; this tracks which types the user has explicitly
  // turned OFF (rather than which are on) so switching realms doesn't hide
  // markers on a realm whose types haven't been seen/toggled yet.
  let hiddenTypes = new Set();
  let selectedZoneName = null;

  const map = L.map("map", {
    crs: L.CRS.Simple,
    minZoom: -4,
    maxZoom: 3,
    zoomSnap: 0.25,
    attributionControl: false
  });
  markerLayerGroup.addTo(map);

  function pixelToLatLng(layer, x, y) {
    return L.latLng(layer.height - y, x);
  }

  function boundsFor(layer) {
    return [[0, 0], [layer.height, layer.width]];
  }

  // Registers the color-layer overlay against the base image using a single
  // translation: `layer.colorMapAnchor` is the base image's pixel coordinate
  // that the realm-graph's `isCenter`-flagged room should land on. Shifting
  // the color image's full-size bounds by (anchor - that room's room-graph
  // coordinate) assumes the color image was rendered at the same pixel
  // scale as the base image -- no scale/rotation correction, by design (see
  // js/data/layers.js). Falls back to the base image's own bounds (no
  // shift) whenever either half of the registration is missing.
  function colorImageBoundsFor(layer, baseBounds) {
    const anchor = layer.colorMapAnchor;
    if (!anchor) return baseBounds;
    const center = realmIndexFor(layer.id).centerPoint;
    if (!center) return baseBounds;
    const dx = anchor.x - center.x;
    const dy = anchor.y - center.y;
    const sw = pixelToLatLng(layer, dx, dy + layer.height);
    const ne = pixelToLatLng(layer, dx + layer.width, dy);
    return [[sw.lat, sw.lng], [ne.lat, ne.lng]];
  }

  // WIP room-graph layers render a realm's exported root Area directly in
  // #room-graph-root, using the same renderer as the public "View Area Map"
  // popup and the moderator's raw browser -- there's no separate "Realm
  // View" layout system needed, because Test Builder exports a realm as one
  // big top-level Area already. Regular layers keep the original Leaflet +
  // flat-image behavior untouched.
  // `opts.areaId` shows a specific Area instead of defaulting to the
  // realm's first one (used by the flag-navigation sidebar to jump to a
  // particular area within a multi-area realm); `opts.focus` (`{x, y,
  // scale}`, room-graph-space) re-centers the freshly-shown explorer on a
  // point within it -- typically that area's flag -- instead of leaving it
  // at its whole-realm fit().
  function switchLayer(layerId, opts) {
    opts = opts || {};
    const toggle = document.getElementById("color-layer-toggle");
    onLayerSwitchResetFlagPlacement(layerId);

    if (isWipLayerId(layerId)) {
      const baseId = baseLayerIdFor(layerId);
      const rootAreas = REALM_DATA_BY_LAYER[baseId] || [];
      if (rootAreas.length === 0) return;
      currentLayerId = layerId;
      mapEl.hidden = true;
      roomGraphRoot.hidden = false;
      toggle.hidden = true;
      const idx = realmIndexFor(baseId);
      const targetArea = (opts.areaId && idx.areasById.get(opts.areaId)) || rootAreas[0];
      const explorer = RoomGraphView.createExplorer(roomGraphRoot, idx);
      explorer.show(targetArea, targetArea.name);
      if (opts.focus) explorer.centerOn(opts.focus.x, opts.focus.y, opts.focus.scale);
      currentExplorer = explorer;
      currentWipAreaId = targetArea.id;
    } else {
      currentExplorer = null;
      currentWipAreaId = null;
      const layer = layerById.get(layerId);
      if (!layer) return;
      currentLayerId = layerId;
      roomGraphRoot.hidden = true;
      mapEl.hidden = false;
      const bounds = boundsFor(layer);
      if (imageLayer) map.removeLayer(imageLayer);
      imageLayer = L.imageOverlay(layer.image, bounds).addTo(map);
      if (colorLayer) { map.removeLayer(colorLayer); colorLayer = null; }
      if (layer.colorImage) {
        colorLayer = L.imageOverlay(layer.colorImage, colorImageBoundsFor(layer, bounds), { opacity: 0.6 });
        toggle.hidden = false;
        toggle.classList.remove("active");
        if (toggle.dataset.on === "1") { colorLayer.addTo(map); toggle.classList.add("active"); }
      } else {
        toggle.hidden = true;
      }
      map.invalidateSize();
      map.fitBounds(bounds);
    }

    document.getElementById("layer-select").value = layerId;
    renderFilterChips();
    renderMarkers();
  }

  document.getElementById("color-layer-toggle").addEventListener("click", function () {
    if (!colorLayer) return;
    const on = this.dataset.on === "1";
    if (on) { map.removeLayer(colorLayer); this.dataset.on = "0"; this.classList.remove("active"); }
    else { colorLayer.addTo(map); this.dataset.on = "1"; this.classList.add("active"); }
  });

  // ---- layer select ----
  const layerSelect = document.getElementById("layer-select");
  MAP_LAYERS.forEach(l => {
    const opt = document.createElement("option");
    opt.value = l.id; opt.textContent = l.name;
    layerSelect.appendChild(opt);
  });
  // One "<Realm> WIP" option per realm that has Test-Builder room-graph
  // data -- added automatically as realms get built out, nothing to update
  // here when the next one (Evil/Good/Chaos) gets its own export.
  MAP_LAYERS.forEach(l => {
    const rootAreas = REALM_DATA_BY_LAYER[l.id] || [];
    if (rootAreas.length === 0) return;
    const realmName = rootAreas[0].realm || rootAreas[0].name || l.name;
    const opt = document.createElement("option");
    opt.value = l.id + WIP_SUFFIX; opt.textContent = realmName + " WIP";
    layerSelect.appendChild(opt);
  });
  layerSelect.addEventListener("change", () => switchLayer(layerSelect.value));

  // ---- markers ----
  function markerTypesForCurrentLayer() {
    const types = new Set();
    MARKERS.filter(m => m.layer === currentLayerId).forEach(m => types.add(m.type || "misc"));
    return Array.from(types).sort();
  }

  function renderFilterChips() {
    const wrap = document.getElementById("filter-chips");
    wrap.innerHTML = "";
    const types = markerTypesForCurrentLayer();
    types.forEach(type => {
      const chip = document.createElement("div");
      chip.className = "chip" + (hiddenTypes.has(type) ? "" : " active");
      chip.textContent = type;
      chip.addEventListener("click", () => {
        if (hiddenTypes.has(type)) hiddenTypes.delete(type); else hiddenTypes.add(type);
        chip.classList.toggle("active");
        renderMarkers();
      });
      wrap.appendChild(chip);
    });
  }

  function openMiniAreaModal(layerId, areaId, roomId) {
    const idx = realmIndexFor(layerId);
    const area = idx.areasById.get(areaId);
    if (!area) { console.warn("Mini-Area link points at an unknown area:", areaId); return; }
    const room = (area.rooms || []).find(r => r.id === roomId);
    const maId = room && room.connector && room.connector.targetMiniAreaId;
    if (!maId) { console.warn("Mini-Area link is broken (room/connector not found):", areaId, roomId); return; }
    RoomGraphView.openMiniAreaWindow(idx, maId);
  }

  function renderMarkers() {
    markerLayerGroup.clearLayers();
    const layer = layerById.get(currentLayerId);
    MARKERS.filter(m => m.layer === currentLayerId && !hiddenTypes.has(m.type || "misc")).forEach(m => {
      const icon = L.divIcon({
        className: "", html: `<div class="olmran-marker" title="${escapeHtml(m.name)}">${escapeHtml((m.type || "?")[0].toUpperCase())}</div>`,
        iconSize: [22, 22], iconAnchor: [11, 11]
      });
      const marker = L.marker(pixelToLatLng(layer, m.x, m.y), { icon }).addTo(markerLayerGroup);
      let html = `<h3>${escapeHtml(m.name)}</h3>`;
      if (m.description) html += `<p>${escapeHtml(m.description)}</p>`;
      if (m.miniArea && m.miniArea.areaId && m.miniArea.roomId) {
        html += `<button class="popup-btn" data-area="${escapeHtml(m.miniArea.areaId)}" data-room="${escapeHtml(m.miniArea.roomId)}">View Area Map</button>`;
      }
      marker.bindPopup(html);
      marker.on("popupopen", e => {
        const btn = e.popup.getElement().querySelector(".popup-btn");
        if (btn) btn.addEventListener("click", () => openMiniAreaModal(currentLayerId, btn.dataset.area, btn.dataset.room));
      });
    });
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  // ---- search-to-jump ----
  const searchBox = document.getElementById("search-box");
  const searchResults = document.getElementById("search-results");

  function renderSearchResults(query) {
    searchResults.innerHTML = "";
    if (!query) { searchResults.classList.remove("open"); return; }
    const q = query.toLowerCase();
    const matches = ZONES.filter(z => z.name.toLowerCase().includes(q)).slice(0, 20);
    if (matches.length === 0) { searchResults.classList.remove("open"); return; }
    matches.forEach(z => {
      const row = document.createElement("div");
      row.className = "search-result";
      const layerName = (layerById.get(z.layer) || {}).name || z.layer;
      row.textContent = `${z.name} — ${layerName}`;
      row.addEventListener("click", () => {
        selectZone(z);
        searchResults.classList.remove("open");
        searchBox.value = z.name;
      });
      searchResults.appendChild(row);
    });
    searchResults.classList.add("open");
  }

  function selectZone(z) {
    if (z.layer !== currentLayerId) switchLayer(z.layer);
    const layer = layerById.get(z.layer);
    map.setView(pixelToLatLng(layer, z.x, z.y), Math.max(map.getZoom(), 0));
    selectedZoneName = z.name;
    renderItemBrowser();
  }

  searchBox.addEventListener("input", () => renderSearchResults(searchBox.value.trim()));
  document.addEventListener("click", e => {
    if (!e.target.closest("#search-wrap")) searchResults.classList.remove("open");
  });

  // ---- item browser ----
  const itemBrowser = document.getElementById("item-browser");
  document.getElementById("item-browser-toggle").addEventListener("click", () => {
    itemBrowser.classList.toggle("open");
  });

  function renderItemBrowser() {
    const body = document.getElementById("item-browser-body");
    if (!selectedZoneName) return;
    itemBrowser.classList.add("open");
    const items = ZONE_ITEMS[selectedZoneName];
    if (!items || items.length === 0) {
      body.innerHTML = `<p style="color: var(--muted); font-size: 12px;">No item data for "${escapeHtml(selectedZoneName)}" yet.</p>`;
      return;
    }
    body.innerHTML = `<h4 style="margin:0 0 6px;font-size:13px;">${escapeHtml(selectedZoneName)}</h4>` +
      items.map(it => `
        <div class="item-row">
          <div class="item-name">${escapeHtml(it.item || "?")}</div>
          <div class="item-meta">${escapeHtml([it.mob, it.slot, it.level ? "lvl " + it.level : null].filter(Boolean).join(" · "))}</div>
        </div>`).join("");
    itemBrowser.classList.add("open");
  }

  // ---- flag navigation sidebar ----
  // Lets a visitor jump straight to a specific area's flag (a {x, y, name}
  // point placed per-area in Test Builder -- see js/room-graph-view.js's
  // centerOn) instead of only ever landing on a realm's whole-map fit().
  // Realm and Area are searched with the same typo-tolerant matching so a
  // misspelled guess still finds the right one.
  function levenshtein(a, b) {
    const m = a.length, n = b.length;
    if (m === 0) return n;
    if (n === 0) return m;
    let prev = new Array(n + 1);
    for (let j = 0; j <= n; j++) prev[j] = j;
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
      }
      prev = cur;
    }
    return prev[n];
  }

  // Higher score = better match, -1 = no match. A substring hit always
  // wins (typed-so-far partial matches, the common case); otherwise a
  // small edit distance against the whole name OR any single word within
  // it (so "kaidd" still finds "Land of Kaid" via just the "Kaid" word,
  // not the whole phrase's much larger distance) counts as a misspelling.
  function fuzzyScore(query, name) {
    const q = query.trim().toLowerCase();
    if (!q) return 0;
    const n = name.toLowerCase();
    if (n.includes(q)) return 1000 - Math.abs(n.length - q.length);
    const tolerance = Math.max(1, Math.ceil(q.length / 3));
    let best = Infinity;
    n.split(/\s+/).concat([n]).forEach(word => {
      best = Math.min(best, levenshtein(q, word));
    });
    return best <= tolerance ? 500 - best : -1;
  }

  // Each area can now carry any number of flags (a plain area-level one,
  // plus any linked to specific room-group(s) -- see Test Builder's
  // area-flag.js), so every flag becomes its own jump target here, not just
  // one per area. They all still resolve to the same area via areaId; only
  // the name/x/y (and so the Items tree lookup, keyed by flag name) differ
  // per flag. roomIds isn't used here yet -- a room-linked flag jumps to its
  // own point exactly like an area-level one, just named differently.
  function buildFlagRealms() {
    const realms = [];
    MAP_LAYERS.forEach(l => {
      const areas = REALM_DATA_BY_LAYER[l.id] || [];
      // Same non-empty-REALM_DATA_BY_LAYER gate used to decide whether this
      // realm gets a "-wip" layer option at all -- no point listing it here
      // if there's nowhere to actually switch to.
      if (areas.length === 0) return;
      const flagEntries = [];
      areas.forEach(a => {
        (a.flags || []).forEach(flag => {
          flagEntries.push({ areaId: a.id, name: flag.name || a.name, x: flag.x, y: flag.y });
        });
      });
      // Falls back to the realm's actual top-level areas (whole-area fit,
      // no specific zoom point) when nothing has a real flag yet -- keeps
      // every realm selectable in the Jump tab permanently instead of it
      // vanishing until a moderator places flags.
      const areaEntries = flagEntries.length > 0 ? flagEntries : areas.map(a => ({ areaId: a.id, name: a.name }));
      const realmName = areas[0].realm || areas[0].name || l.name;
      realms.push({ layerId: l.id, realmName, areas: areaEntries });
    });
    return realms;
  }
  const flagRealms = buildFlagRealms();

  const flagNavPanel = document.getElementById("flag-nav");
  const flagNavToggleBtn = document.getElementById("flag-nav-toggle-btn");
  const flagRealmInput = document.getElementById("flag-nav-realm-input");
  const flagRealmResults = document.getElementById("flag-nav-realm-results");
  const flagAreaInput = document.getElementById("flag-nav-area-input");
  const flagAreaResults = document.getElementById("flag-nav-area-results");
  let selectedFlagRealm = null;

  flagNavToggleBtn.addEventListener("click", () => {
    const collapsed = flagNavPanel.classList.toggle("collapsed");
    flagNavToggleBtn.textContent = collapsed ? "‹" : "›";
    flagNavToggleBtn.title = collapsed ? "Show the Options panel" : "Hide the Options panel";
  });

  // ---- tear off / redock the Options panel into a free-floating window ----
  const flagNavTearoffBtn = document.getElementById("flag-nav-tearoff-btn");
  const flagNavHeader = document.getElementById("flag-nav-header");
  flagNavTearoffBtn.addEventListener("click", () => {
    const floating = flagNavPanel.classList.toggle("floating");
    if (floating) {
      const rect = flagNavPanel.getBoundingClientRect();
      flagNavPanel.style.left = rect.left + "px";
      flagNavPanel.style.top = rect.top + "px";
      flagNavPanel.style.right = "auto";
      flagNavPanel.style.position = "fixed";
      flagNavTearoffBtn.textContent = "⇲";
      flagNavTearoffBtn.title = "Dock back to the sidebar";
    } else {
      flagNavPanel.style.left = "";
      flagNavPanel.style.top = "";
      flagNavPanel.style.right = "";
      flagNavPanel.style.position = "";
      flagNavTearoffBtn.textContent = "⇱";
      flagNavTearoffBtn.title = "Pop out into a floating window";
    }
  });
  // Drag-to-move by the header, only while floating -- docked, the panel
  // stays anchored top-right (its normal CSS position) and isn't draggable.
  let flagNavDragging = false, flagNavDragStart = null, flagNavPosStart = null;
  flagNavHeader.addEventListener("pointerdown", e => {
    if (!flagNavPanel.classList.contains("floating") || e.target.closest("button")) return;
    flagNavDragging = true;
    flagNavDragStart = { x: e.clientX, y: e.clientY };
    flagNavPosStart = { left: flagNavPanel.offsetLeft, top: flagNavPanel.offsetTop };
    flagNavHeader.setPointerCapture(e.pointerId);
  });
  flagNavHeader.addEventListener("pointermove", e => {
    if (!flagNavDragging) return;
    flagNavPanel.style.left = Math.max(0, flagNavPosStart.left + (e.clientX - flagNavDragStart.x)) + "px";
    flagNavPanel.style.top = Math.max(0, flagNavPosStart.top + (e.clientY - flagNavDragStart.y)) + "px";
  });
  flagNavHeader.addEventListener("pointerup", () => { flagNavDragging = false; });

  function renderFlagResults(container, query, items, labelOf, onPick) {
    container.innerHTML = "";
    const q = query.trim();
    const scored = items
      .map(item => ({ item, score: fuzzyScore(q, labelOf(item)) }))
      .filter(x => q === "" || x.score >= 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 20);
    if (scored.length === 0) { container.classList.remove("open"); return; }
    scored.forEach(({ item }) => {
      const row = document.createElement("div");
      row.className = "search-result";
      row.textContent = labelOf(item);
      row.addEventListener("click", () => onPick(item));
      container.appendChild(row);
    });
    container.classList.add("open");
  }

  function selectFlagRealm(r) {
    selectedFlagRealm = r;
    flagRealmInput.value = r.realmName;
    flagRealmResults.classList.remove("open");
    flagAreaInput.disabled = false;
    flagAreaInput.placeholder = "Select an area…";
    flagAreaInput.value = "";
    switchLayer(r.layerId + WIP_SUFFIX);
  }

  function selectFlagArea(a) {
    flagAreaInput.value = a.name;
    flagAreaResults.classList.remove("open");
    renderItemsTree(a.name);
    if (flagNoZoomToggle.checked) return;
    // A fallback (no-flag-yet) area entry has no x/y -- just show the whole
    // area (switchLayer's own fit()) instead of a specific zoom point.
    const opts = { areaId: a.areaId };
    if (typeof a.x === "number" && typeof a.y === "number") opts.focus = { x: a.x, y: a.y, scale: 1.2 };
    switchLayer(selectedFlagRealm.layerId + WIP_SUFFIX, opts);
  }

  // ---- Items tab: a tree of {item -> monsters that drop it} for whichever
  // area was last picked in the Jump tab, keyed by that area's flag name
  // (see js/data/area-items.js -- empty until a real per-area drop export
  // exists). "Don't zoom to area" lets you browse this list across several
  // areas without the map jumping to each one.
  const flagNavTabs = document.querySelectorAll(".flag-nav-tab");
  const flagNavTabPanels = {
    jump: document.getElementById("flag-nav-tab-jump"),
    items: document.getElementById("flag-nav-tab-items"),
    myflags: document.getElementById("flag-nav-tab-myflags")
  };
  flagNavTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      flagNavTabs.forEach(t => t.classList.toggle("active", t === tab));
      Object.keys(flagNavTabPanels).forEach(key => {
        flagNavTabPanels[key].classList.toggle("hidden", key !== tab.dataset.tab);
      });
    });
  });

  const flagNoZoomToggle = document.getElementById("flag-nav-no-zoom-toggle");
  const itemsTreeEl = document.getElementById("flag-nav-items-tree");

  function renderItemsTree(areaName) {
    itemsTreeEl.innerHTML = "";
    const items = (typeof AREA_ITEMS !== "undefined" && AREA_ITEMS[areaName]) || [];
    if (items.length === 0) {
      itemsTreeEl.innerHTML = `<div class="muted">No item data for "${escapeHtml(areaName)}" yet.</div>`;
      return;
    }
    items.forEach(it => {
      const details = document.createElement("details");
      details.className = "flag-nav-item-node";
      const summary = document.createElement("summary");
      summary.textContent = it.item + (it.type ? ` (${it.type})` : "");
      details.appendChild(summary);
      const list = document.createElement("ul");
      list.className = "flag-nav-monster-list";
      (it.monsters || []).forEach(m => {
        const li = document.createElement("li");
        li.textContent = m;
        list.appendChild(li);
      });
      details.appendChild(list);
      itemsTreeEl.appendChild(details);
    });
  }

  // Behaves like a <select> that also happens to be searchable: clicking or
  // focusing the field (with nothing typed yet) opens the FULL option list,
  // exactly like a dropdown would, rather than requiring you to type first;
  // typing then narrows that same list via the fuzzy matcher above.
  function openFlagRealmResults() {
    renderFlagResults(flagRealmResults, "", flagRealms, r => r.realmName, selectFlagRealm);
  }
  function openFlagAreaResults() {
    if (!selectedFlagRealm) return;
    renderFlagResults(flagAreaResults, "", selectedFlagRealm.areas, a => a.name, selectFlagArea);
  }

  flagRealmInput.addEventListener("input", () => {
    selectedFlagRealm = null;
    flagAreaInput.disabled = true;
    flagAreaInput.value = "";
    flagAreaInput.placeholder = "Pick a realm first…";
    flagAreaResults.classList.remove("open");
    renderFlagResults(flagRealmResults, flagRealmInput.value, flagRealms, r => r.realmName, selectFlagRealm);
  });
  flagRealmInput.addEventListener("focus", openFlagRealmResults);
  flagRealmInput.addEventListener("click", openFlagRealmResults);
  flagAreaInput.addEventListener("input", () => {
    if (!selectedFlagRealm) return;
    renderFlagResults(flagAreaResults, flagAreaInput.value, selectedFlagRealm.areas, a => a.name, selectFlagArea);
  });
  flagAreaInput.addEventListener("focus", openFlagAreaResults);
  flagAreaInput.addEventListener("click", openFlagAreaResults);
  document.addEventListener("click", e => {
    if (!e.target.closest("#flag-nav")) {
      flagRealmResults.classList.remove("open");
      flagAreaResults.classList.remove("open");
    }
  });

  // ---- My Flags tab: personal, localStorage-only zoom-to-point bookmarks ----
  // Anyone viewing the public map can drop these on any WIP room-graph
  // layer -- never sent anywhere, never seen by anyone else, just a
  // per-browser convenience. Distinct from the moderator/Test-Builder-
  // authored flags (Jump tab), which are baked into the exported data.
  const USER_FLAGS_KEY = "userMapFlags";
  const userFlagCreateBtn = document.getElementById("user-flag-create-btn");
  const userFlagsBody = document.getElementById("user-flags-body");
  let userFlagPlacementArmed = false;

  function loadUserFlags() {
    try {
      const parsed = JSON.parse(localStorage.getItem(USER_FLAGS_KEY));
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) { return []; }
  }
  function saveUserFlags(flags) {
    try { localStorage.setItem(USER_FLAGS_KEY, JSON.stringify(flags)); }
    catch (e) { /* storage unavailable -- flags just won't persist */ }
  }

  function setCreateBtnArmed(armed) {
    userFlagPlacementArmed = armed;
    userFlagCreateBtn.classList.toggle("armed", armed);
    userFlagCreateBtn.textContent = armed ? "Click the map… (Esc to cancel)" : "Create Flag";
  }
  // switchLayer() calls this on every layer change (see its top) with the
  // layer it's switching TO -- drops any armed-but-unused placement (the
  // explorer it was armed on no longer exists) and only allows creating a
  // flag on a room-graph (WIP) layer, since that's the only coordinate
  // space these points live in.
  onLayerSwitchResetFlagPlacement = newLayerId => {
    setCreateBtnArmed(false);
    userFlagCreateBtn.disabled = !isWipLayerId(newLayerId);
  };
  userFlagCreateBtn.disabled = !isWipLayerId(currentLayerId);

  function renderUserFlagsList() {
    const flags = loadUserFlags();
    userFlagsBody.innerHTML = "";
    if (flags.length === 0) {
      userFlagsBody.innerHTML = '<div class="muted">None yet.</div>';
      return;
    }
    flags.forEach(flag => {
      const row = document.createElement("div");
      row.className = "user-flag-row";

      const nameInput = document.createElement("input");
      nameInput.type = "text";
      nameInput.value = flag.name;
      nameInput.title = "Rename";
      nameInput.addEventListener("input", () => {
        flag.name = nameInput.value;
        saveUserFlags(flags);
      });
      row.appendChild(nameInput);

      const jumpBtn = document.createElement("button");
      jumpBtn.type = "button";
      jumpBtn.textContent = "Jump";
      jumpBtn.addEventListener("click", () => {
        switchLayer(flag.layerId, { areaId: flag.areaId, focus: { x: flag.x, y: flag.y, scale: 1.2 } });
      });
      row.appendChild(jumpBtn);

      const delBtn = document.createElement("button");
      delBtn.type = "button";
      delBtn.className = "user-flag-delete";
      delBtn.textContent = "✕";
      delBtn.title = "Delete";
      delBtn.addEventListener("click", () => {
        saveUserFlags(flags.filter(f => f.id !== flag.id));
        renderUserFlagsList();
      });
      row.appendChild(delBtn);

      userFlagsBody.appendChild(row);
    });
  }

  userFlagCreateBtn.addEventListener("click", () => {
    if (userFlagPlacementArmed) {
      if (currentExplorer) currentExplorer.cancelPlacing();
      setCreateBtnArmed(false);
      return;
    }
    if (!currentExplorer || !isWipLayerId(currentLayerId)) return;
    setCreateBtnArmed(true);
    currentExplorer.startPlacing(pt => {
      const flags = loadUserFlags();
      const idx = realmIndexFor(baseLayerIdFor(currentLayerId));
      const area = idx.areasById.get(currentWipAreaId);
      flags.push({
        id: "uflag_" + Math.random().toString(36).slice(2, 10),
        name: `Flag ${flags.length + 1}` + (area ? ` (${area.name})` : ""),
        layerId: currentLayerId,
        areaId: currentWipAreaId,
        x: Math.round(pt.x),
        y: Math.round(pt.y)
      });
      saveUserFlags(flags);
      renderUserFlagsList();
      setCreateBtnArmed(false);
    });
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && userFlagPlacementArmed) {
      if (currentExplorer) currentExplorer.cancelPlacing();
      setCreateBtnArmed(false);
    }
  });

  renderUserFlagsList();

  switchLayer(currentLayerId);
})();
