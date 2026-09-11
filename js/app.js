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

  const layerById = new Map(MAP_LAYERS.map(l => [l.id, l]));
  let currentLayerId = MAP_LAYERS[0].id;
  let imageLayer = null;
  let colorLayer = null;
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

  // A realm with room-graph data (currently just Kaid) renders its exported
  // root Area directly in #room-graph-root, using the same renderer as the
  // public "View Area Map" popup and the moderator's raw browser -- there's
  // no separate "Realm View" layout system, because Test Builder exports a
  // realm as one big top-level Area already. A realm with no data yet
  // (Evil/Good/Chaos) falls back to the flat map image via Leaflet, same as
  // before.
  function switchLayer(layerId) {
    const layer = layerById.get(layerId);
    if (!layer) return;
    currentLayerId = layerId;
    const rootAreas = REALM_DATA_BY_LAYER[layerId] || [];
    const toggle = document.getElementById("color-layer-toggle");

    if (rootAreas.length > 0) {
      mapEl.hidden = true;
      roomGraphRoot.hidden = false;
      toggle.hidden = true;
      const idx = realmIndexFor(layerId);
      const rootArea = rootAreas[0];
      RoomGraphView.createExplorer(roomGraphRoot, idx).show(rootArea, rootArea.name);
    } else {
      roomGraphRoot.hidden = true;
      mapEl.hidden = false;
      const bounds = boundsFor(layer);
      if (imageLayer) map.removeLayer(imageLayer);
      imageLayer = L.imageOverlay(layer.image, bounds).addTo(map);
      if (colorLayer) { map.removeLayer(colorLayer); colorLayer = null; }
      if (layer.colorImage) {
        colorLayer = L.imageOverlay(layer.colorImage, bounds, { opacity: 0.6 });
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
    const entry = maId && idx.miniAreasById.get(maId);
    if (!entry) { console.warn("Mini-Area link is broken (room/connector not found):", areaId, roomId); return; }

    const backdrop = document.createElement("div");
    backdrop.className = "rgv-modal-backdrop";
    backdrop.innerHTML = `
      <div class="rgv-modal">
        <div class="rgv-modal-header">
          <span>${entry.ma.name}</span>
          <button class="rgv-modal-close" type="button">✕</button>
        </div>
        <div class="rgv-modal-body"></div>
      </div>`;
    document.body.appendChild(backdrop);
    const explorer = RoomGraphView.createExplorer(backdrop.querySelector(".rgv-modal-body"), idx);
    explorer.show(entry.ma, entry.ma.name);
    function close() { document.body.removeChild(backdrop); }
    backdrop.querySelector(".rgv-modal-close").addEventListener("click", close);
    backdrop.addEventListener("click", e => { if (e.target === backdrop) close(); });
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

  switchLayer(currentLayerId);
})();
