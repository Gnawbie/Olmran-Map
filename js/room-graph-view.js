// Read-only renderer for Test-builder-exported room-graph data (Areas and
// Mini-Areas: Rooms/Edges/Connectors/TextLabels/CustomArrows). Shared by
// both index.html's public "View Area Map" popup (a single Area/Mini-Area
// at a time, opened from a marker) and moderator.html's unrestricted
// Realm -> Area browser. No dragging, no selection, no editing — pan/zoom
// and click-a-connector-room-to-open-its-Mini-Area only.
//
// Room/Edge/TextLabel/CustomArrow shapes are identical whether they belong
// to a top-level Area or a nested Mini-Area (this mirrors how the original
// Test-builder editor itself reuses one set of draw functions for both), so
// a single `renderNode()` draws either.
const RoomGraphView = (function () {
  "use strict";

  const SVG_NS = "http://www.w3.org/2000/svg";
  const DEFAULT_ROOM_SIZE = 30;
  // Room difficulty markers (Test Builder's room.marker) -- same fixed
  // palette/geometry as Test Builder's own rooms.js, so a room looks the
  // same here as it did while being authored. Visibility toggled via a CSS
  // class (see js/app.js's Options panel checkbox), not re-rendering, so it
  // doesn't disturb the current pan/zoom.
  const MARKER_COLORS = { purple: "#9b59d0", red: "#e33d3d", green: "#3fbf5f", white: "#f5f5f5" };

  function el(tag, attrs, parent) {
    const e = document.createElementNS(SVG_NS, tag);
    Object.keys(attrs || {}).forEach(k => e.setAttribute(k, attrs[k]));
    if (parent) parent.appendChild(e);
    return e;
  }

  function roomSizeFor(node, room) {
    const base = node.roomSize || DEFAULT_ROOM_SIZE;
    return base * (room.sizeScale || 1);
  }

  function roomCenter(node, room) {
    const s = roomSizeFor(node, room);
    return { x: room.x + s / 2, y: room.y + s / 2 };
  }

  function roomsById(node) {
    const m = new Map();
    (node.rooms || []).forEach(r => m.set(r.id, r));
    return m;
  }

  const EDGE_STYLE = {
    wall: { stroke: "#1a1a1a", dash: null, width: 3 },
    portal: { stroke: "#e05555", dash: null, width: 3 },
    climb: { stroke: "#8b909c", dash: "2,5", width: 3, ticks: true },
    dotted: { stroke: "#1a1a1a", dash: "1,4", width: 3 },
    dottedRed: { stroke: "#e05555", dash: "1,4", width: 3 }
  };

  function drawEdges(node, g) {
    const rooms = roomsById(node);
    (node.edges || []).forEach(edge => {
      const a = rooms.get(edge.from), b = rooms.get(edge.to);
      if (!a || !b || a.hidden || b.hidden) return;
      const ca = roomCenter(node, a), cb = roomCenter(node, b);
      const style = EDGE_STYLE[edge.kind] || EDGE_STYLE.wall;
      // Light halo behind the line for contrast against the dark canvas.
      el("line", { x1: ca.x, y1: ca.y, x2: cb.x, y2: cb.y, stroke: "rgba(255,255,255,0.25)", "stroke-width": style.width + 3 }, g);
      const line = el("line", { x1: ca.x, y1: ca.y, x2: cb.x, y2: cb.y, stroke: style.stroke, "stroke-width": style.width }, g);
      if (style.dash) line.setAttribute("stroke-dasharray", style.dash);
      if (style.ticks) {
        const dx = cb.x - ca.x, dy = cb.y - ca.y;
        const len = Math.hypot(dx, dy) || 1;
        const ux = dx / len, uy = dy / len, px = -uy, py = ux;
        const ticks = Math.max(1, Math.floor(len / 14));
        for (let i = 1; i < ticks; i++) {
          const t = i / ticks;
          const cx = ca.x + dx * t, cy = ca.y + dy * t;
          el("line", {
            x1: cx - px * 5, y1: cy - py * 5, x2: cx + px * 5, y2: cy + py * 5,
            stroke: style.stroke, "stroke-width": 2
          }, g);
        }
      }
      if (edge.label) {
        el("text", {
          x: (ca.x + cb.x) / 2, y: (ca.y + cb.y) / 2 - 4,
          "text-anchor": "middle", fill: "#e6e8ec", "font-size": 11, "font-family": "system-ui, sans-serif"
        }, g).textContent = edge.label;
      }
    });
  }

  function drawConnector(node, room, roomG) {
    if (!room.connector) return;
    const s = roomSizeFor(node, room);
    const pad = 6;
    el("rect", {
      x: room.x - pad, y: room.y - pad, width: s + pad * 2, height: s + pad * 2,
      fill: "none", stroke: room.connector.borderColor || "#e05555", "stroke-width": 2, rx: 3
    }, roomG);
    const xColor = room.connector.xColor || room.connector.borderColor || "#1a1a1a";
    const c = roomCenter(node, room);
    const half = s * 0.28;
    el("line", { x1: c.x - half, y1: c.y - half, x2: c.x + half, y2: c.y + half, stroke: xColor, "stroke-width": 2 }, roomG);
    el("line", { x1: c.x + half, y1: c.y - half, x2: c.x - half, y2: c.y + half, stroke: xColor, "stroke-width": 2 }, roomG);
    if (room.connector.label) {
      el("text", {
        x: c.x, y: room.y + s + pad + 12, "text-anchor": "middle", fill: "#e6e8ec",
        "font-size": 11, "font-family": "system-ui, sans-serif"
      }, roomG).textContent = room.connector.label;
    }
  }

  function drawRoomArrow(node, room, roomG) {
    if (!room.arrow) return;
    const c = roomCenter(node, room);
    const tip = { x: c.x + room.arrow.dx, y: c.y + room.arrow.dy };
    el("line", { x1: c.x, y1: c.y, x2: tip.x, y2: tip.y, stroke: "#e6e8ec", "stroke-width": 2, "marker-end": "url(#rgv-arrowhead)" }, roomG);
  }

  function drawRooms(node, g, hasMiniAreaLink) {
    (node.rooms || []).forEach(room => {
      if (room.hidden) return;
      const s = roomSizeFor(node, room);
      const roomG = el("g", { class: "rgv-room", "data-room-id": room.id }, g);
      const openable = !!(room.connector && room.connector.targetMiniAreaId);
      if (openable) roomG.classList.add("rgv-room-openable");
      const rect = el("rect", {
        class: "rgv-room-body",
        x: room.x, y: room.y, width: s, height: s,
        fill: room.color || "#5aa9e6", stroke: room.borderColor || "#1a1a1a", "stroke-width": 2, rx: 2
      }, roomG);
      if (room.isRiver) { rect.setAttribute("stroke-dasharray", "3,3"); rect.setAttribute("stroke", "#5aa9e6"); }
      if (room.icon) {
        el("image", { x: room.x, y: room.y, width: s, height: s, href: room.icon, "pointer-events": "none" }, roomG);
      }
      if (room.marker && !room.iconName && MARKER_COLORS[room.marker]) {
        const msize = Math.max(6, s * 0.22);
        el("rect", {
          class: "room-marker-square",
          x: room.x + s / 2 - msize / 2, y: room.y + s / 2 - msize / 2,
          width: msize, height: msize,
          fill: MARKER_COLORS[room.marker]
        }, roomG);
      }
      drawConnector(node, room, roomG);
      drawRoomArrow(node, room, roomG);
    });
  }

  function drawArrows(node, g) {
    const rooms = roomsById(node);
    (node.arrows || []).forEach(a => {
      const room = rooms.get(a.roomId);
      if (!room || room.hidden) return;
      const c = roomCenter(node, room);
      const tip = { x: c.x + a.dx, y: c.y + a.dy };
      el("line", {
        x1: c.x, y1: c.y, x2: tip.x, y2: tip.y, stroke: a.color || "#e6e8ec",
        "stroke-width": 2, "stroke-dasharray": "2,3", "marker-end": "url(#rgv-arrowhead)"
      }, g);
    });
  }

  function drawTextLabels(node, g) {
    (node.textLabels || []).forEach(t => {
      if (t.imageUrl) {
        el("image", { x: t.x, y: t.y, width: t.w, height: t.h, href: t.imageUrl }, g);
      } else if (t.text) {
        const lines = String(t.text).split("\n");
        const size = t.size || 16;
        const textEl = el("text", {
          x: t.x, y: t.y, fill: t.color || "#e6e8ec", "font-size": size,
          "font-family": "Georgia, 'Palatino Linotype', Palatino, serif",
          "paint-order": "stroke", stroke: "#1c1e22", "stroke-width": 3
        }, g);
        lines.forEach((line, i) => {
          el("tspan", { x: t.x, dy: i === 0 ? 0 : size * 1.15 }, textEl).textContent = line;
        });
      }
    });
  }

  function contentBounds(node) {
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    let any = false;
    (node.rooms || []).forEach(r => {
      if (r.hidden) return;
      any = true;
      const s = roomSizeFor(node, r);
      minX = Math.min(minX, r.x); minY = Math.min(minY, r.y);
      maxX = Math.max(maxX, r.x + s); maxY = Math.max(maxY, r.y + s);
    });
    (node.textLabels || []).forEach(t => {
      any = true;
      minX = Math.min(minX, t.x); minY = Math.min(minY, t.y);
      maxX = Math.max(maxX, t.x + (t.w || 100)); maxY = Math.max(maxY, t.y + (t.h || 20));
    });
    if (!any) return { minX: 0, minY: 0, maxX: 400, maxY: 300 };
    return { minX, minY, maxX, maxY };
  }

  function ensureDefs(svg) {
    if (svg.querySelector("#rgv-arrowhead")) return;
    const defs = el("defs", {}, svg);
    const marker = el("marker", {
      id: "rgv-arrowhead", markerWidth: 8, markerHeight: 8, refX: 6, refY: 4, orient: "auto"
    }, defs);
    el("path", { d: "M0,0 L8,4 L0,8 Z", fill: "#e6e8ec" }, marker);
  }

  // Draws one Area or Mini-Area (`node`) into `svg`, replacing any prior
  // content, and returns the world <g> element (for pan/zoom transforms).
  function renderNode(svg, node) {
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    ensureDefs(svg);
    const world = el("g", { class: "rgv-world" }, svg);
    const edgesLayer = el("g", { class: "rgv-edges" }, world);
    const roomsLayer = el("g", { class: "rgv-rooms" }, world);
    const arrowsLayer = el("g", { class: "rgv-arrows" }, world);
    const textLayer = el("g", { class: "rgv-text" }, world);
    drawEdges(node, edgesLayer);
    drawRooms(node, roomsLayer);
    drawArrows(node, arrowsLayer);
    drawTextLabels(node, textLayer);
    return world;
  }

  // ---- pan/zoom + click-to-open wiring ----
  function attachInteraction(svg, world, node, onOpenMiniArea) {
    let view = { x: 0, y: 0, scale: 1 };

    function apply() {
      world.setAttribute("transform", `translate(${view.x},${view.y}) scale(${view.scale})`);
    }

    function fit() {
      const b = contentBounds(node);
      const w = Math.max(1, b.maxX - b.minX), h = Math.max(1, b.maxY - b.minY);
      const rect = svg.getBoundingClientRect();
      const vw = rect.width || 600, vh = rect.height || 400;
      const pad = 60;
      const scale = Math.max(0.05, Math.min((vw - pad) / w, (vh - pad) / h, 2));
      view.scale = scale;
      view.x = vw / 2 - (b.minX + w / 2) * scale;
      view.y = vh / 2 - (b.minY + h / 2) * scale;
      apply();
    }

    let dragging = false, moved = 0, start = { x: 0, y: 0 }, viewStart = { x: 0, y: 0 }, downTarget = null;
    // Armed by setPlacing() (see js/app.js's user-flag "Create Flag" button)
    // -- the next genuine click (not a pan-drag) on the canvas calls this
    // with the clicked room-graph-space point, then immediately disarms
    // itself. Panning while armed does NOT cancel it, only Escape or a
    // completed placement does.
    let placing = null;

    function cancelPlacing() {
      if (!placing) return;
      placing = null;
      svg.classList.remove("rgv-placing");
    }
    function setPlacing(cb) {
      placing = cb;
      svg.classList.add("rgv-placing");
    }

    // Click-to-highlight: plain click on a (non-connector) room highlights
    // every room sharing a flag-group (roomIds) with it -- same glow as the
    // Options Jump tab, just triggered from the canvas instead of a
    // dropdown. Shift-click adds to a running set of clicked rooms instead
    // of replacing it, highlighting the union of every matching flag-group
    // across all of them. A room that doesn't belong to any flag group
    // still highlights itself alone, so a click always visibly does
    // something. Clicking empty canvas clears it.
    let clickedRoomIds = new Set();
    function applyClickHighlight() {
      const idSet = new Set();
      (node.flags || []).forEach(f => {
        if (f.roomIds && f.roomIds.some(id => clickedRoomIds.has(id))) {
          f.roomIds.forEach(id => idSet.add(id));
        }
      });
      if (idSet.size === 0) clickedRoomIds.forEach(id => idSet.add(id));
      svg.querySelectorAll(".rgv-room").forEach(roomEl => {
        roomEl.classList.toggle("rgv-room-highlighted", idSet.has(roomEl.getAttribute("data-room-id")));
      });
    }
    function clearClickHighlight() {
      clickedRoomIds = new Set();
      svg.querySelectorAll(".rgv-room-highlighted").forEach(roomEl => roomEl.classList.remove("rgv-room-highlighted"));
    }

    // Captured at gesture start (not re-read at pointerup) so releasing
    // Ctrl mid-drag doesn't change how the gesture gets interpreted.
    let ctrlHeld = false;
    svg.addEventListener("pointerdown", e => {
      dragging = true; moved = 0;
      start = { x: e.clientX, y: e.clientY };
      viewStart = { x: view.x, y: view.y };
      downTarget = e.target.closest(".rgv-room");
      ctrlHeld = e.ctrlKey;
      svg.setPointerCapture(e.pointerId);
    });
    svg.addEventListener("pointermove", e => {
      if (!dragging) return;
      const dx = e.clientX - start.x, dy = e.clientY - start.y;
      moved = Math.max(moved, Math.hypot(dx, dy));
      view.x = viewStart.x + dx;
      view.y = viewStart.y + dy;
      apply();
    });
    svg.addEventListener("pointerup", e => {
      dragging = false;
      if (moved < 4 && placing) {
        const rect = svg.getBoundingClientRect();
        const sx = e.clientX - rect.left, sy = e.clientY - rect.top;
        const cb = placing;
        placing = null;
        svg.classList.remove("rgv-placing");
        cb({ x: (sx - view.x) / view.scale, y: (sy - view.y) / view.scale });
        downTarget = null;
        return;
      }
      if (moved < 4 && downTarget) {
        const roomId = downTarget.getAttribute("data-room-id");
        const room = (node.rooms || []).find(r => r.id === roomId);
        // Shift-held always means "select for highlighting", even on a
        // connector room -- never opens its Mini-Area window mid-multi-select.
        if (!e.shiftKey && room && room.connector && room.connector.targetMiniAreaId && onOpenMiniArea) {
          onOpenMiniArea(room.connector.targetMiniAreaId);
        } else if (room && !ctrlHeld) {
          // Ctrl held (Ctrl-drag, or even a near-zero-movement Ctrl-click)
          // means "just pan/nudge the view" -- never touches whatever's
          // currently highlighted.
          if (e.shiftKey) clickedRoomIds.add(roomId);
          else clickedRoomIds = new Set([roomId]);
          applyClickHighlight();
        }
      } else if (moved < 4 && !downTarget && !ctrlHeld) {
        clearClickHighlight();
      }
      downTarget = null;
    });
    svg.addEventListener("wheel", e => {
      e.preventDefault();
      const rect = svg.getBoundingClientRect();
      const cx = e.clientX - rect.left, cy = e.clientY - rect.top;
      const factor = e.deltaY < 0 ? 1.15 : 1 / 1.15;
      const newScale = Math.max(0.02, Math.min(6, view.scale * factor));
      view.x = cx - (cx - view.x) * (newScale / view.scale);
      view.y = cy - (cy - view.y) * (newScale / view.scale);
      view.scale = newScale;
      apply();
    }, { passive: false });

    // Centers the view on a room-graph-space point, e.g. an area's flag
    // (see js/app.js's flag-navigation sidebar) -- optionally also setting
    // the zoom scale, since fit()'s whole-realm scale is usually too far
    // zoomed out to make sense of a single flagged spot.
    function centerOn(x, y, scale) {
      const rect = svg.getBoundingClientRect();
      const vw = rect.width || 600, vh = rect.height || 400;
      if (typeof scale === "number") view.scale = scale;
      view.x = vw / 2 - x * view.scale;
      view.y = vh / 2 - y * view.scale;
      apply();
    }

    fit();
    return {
      fit, zoomBy: f => { view.scale = Math.max(0.02, Math.min(6, view.scale * f)); apply(); }, centerOn,
      setPlacing, cancelPlacing
    };
  }

  // Builds a lookup index for one realm's exported Area array: Area-by-id
  // and Mini-Area-by-id (+ its owning Area id) — Mini-Area links resolve
  // globally across the whole realm, not just within the clicked Area, per
  // the original Test-builder editor's own lookup behavior.
  //
  // `centerPoint` is the room-graph-space coordinate of the one room (if
  // any, across the realm's top-level Areas only) flagged `isCenter` in
  // Test Builder — used to register a realm's color-layer overlay image
  // against this coordinate space (see app.js). Not searched inside
  // Mini-Areas: the flag is a single realm-wide anchor, not per-Mini-Area.
  function findCenterRoom(realmAreas) {
    for (const area of realmAreas || []) {
      const room = (area.rooms || []).find(r => r.isCenter);
      if (room) return roomCenter(area, room);
    }
    return null;
  }

  function buildIndex(realmAreas) {
    const areasById = new Map();
    const miniAreasById = new Map();
    (realmAreas || []).forEach(area => {
      areasById.set(area.id, area);
      (area.miniAreas || []).forEach(ma => miniAreasById.set(ma.id, { ma, ownerAreaId: area.id }));
    });
    return { areasById, miniAreasById, centerPoint: findCenterRoom(realmAreas) };
  }

  // Creates a self-contained viewer inside `container`: a small toolbar
  // (breadcrumb + zoom controls) above an SVG canvas. `index` comes from
  // buildIndex(). Call `.show(node, title)` to display an Area or
  // Mini-Area; clicking a Mini-Area-linked room pushes a breadcrumb entry
  // and shows that Mini-Area, reusing the same canvas.
  function createExplorer(container, index) {
    container.innerHTML = "";
    container.classList.add("rgv-explorer");
    const toolbar = el2("div", "rgv-toolbar", container);
    const crumbEl = el2("div", "rgv-breadcrumb", toolbar);
    const zoomControls = el2("div", "rgv-zoom-controls", toolbar);
    const zoomOutBtn = el2("button", "rgv-btn", zoomControls, "−");
    const zoomResetBtn = el2("button", "rgv-btn", zoomControls, "Fit");
    const zoomInBtn = el2("button", "rgv-btn", zoomControls, "+");
    const canvasWrap = el2("div", "rgv-canvas-wrap", container);
    const svg = el("svg", { class: "rgv-svg", width: "100%", height: "100%" }, canvasWrap);

    function el2(tag, cls, parent, text) {
      const e = document.createElement(tag);
      e.className = cls;
      if (text !== undefined) e.textContent = text;
      if (parent) parent.appendChild(e);
      return e;
    }

    let stack = []; // [{ node, title }]
    let interaction = null;

    function renderCrumbs() {
      crumbEl.innerHTML = "";
      stack.forEach((frame, i) => {
        if (i > 0) {
          const sep = document.createElement("span");
          sep.className = "rgv-crumb-sep";
          sep.textContent = " → ";
          crumbEl.appendChild(sep);
        }
        const btn = document.createElement("button");
        btn.className = "rgv-crumb" + (i === stack.length - 1 ? " rgv-crumb-current" : "");
        btn.textContent = frame.title;
        btn.disabled = i === stack.length - 1;
        btn.addEventListener("click", () => { stack = stack.slice(0, i + 1); draw(); });
        crumbEl.appendChild(btn);
      });
    }

    function draw() {
      const frame = stack[stack.length - 1];
      renderCrumbs();
      const world = renderNode(svg, frame.node);
      // Clicking a connector room always opens its Mini-Area in its own
      // floating window (see openMiniAreaWindow below) rather than
      // navigating this canvas in place -- this matches Test Builder's own
      // multi-window behavior and lets a user keep several Mini-Areas open
      // side by side. `stack` is kept around only so `.show()` can still
      // swap this canvas's single node from outside (moderator's Area
      // picker, or opening a fresh window).
      interaction = attachInteraction(svg, world, frame.node, maId => {
        openMiniAreaWindow(index, maId);
      });
    }

    zoomInBtn.addEventListener("click", () => interaction && interaction.zoomBy(1.25));
    zoomOutBtn.addEventListener("click", () => interaction && interaction.zoomBy(0.8));
    zoomResetBtn.addEventListener("click", () => interaction && interaction.fit());

    return {
      show(node, title) {
        stack = [{ node, title }];
        draw();
      },
      resize() { if (interaction) interaction.fit(); },
      centerOn(x, y, scale) { if (interaction) interaction.centerOn(x, y, scale); },
      // One-shot: cb fires with the next clicked room-graph-space point,
      // then this auto-disarms. Re-showing a different node (area switch)
      // silently drops an armed-but-unused placement.
      startPlacing(cb) { if (interaction) interaction.setPlacing(cb); },
      cancelPlacing() { if (interaction) interaction.cancelPlacing(); },
      // Glows every room whose id is in `ids` (e.g. a flag's roomIds, or an
      // entire area's rooms for an area-level flag) and un-glows every other
      // room -- always a full replace, never additive, so there's no need
      // for a separate "clear" call. A fresh .show() already wipes and
      // rebuilds the whole SVG anyway (see renderNode), so switching to a
      // different area naturally drops any highlight on its own even
      // without this being called again.
      highlightRooms(ids) {
        const set = new Set(ids || []);
        svg.querySelectorAll(".rgv-room").forEach(roomEl => {
          roomEl.classList.toggle("rgv-room-highlighted", set.has(roomEl.getAttribute("data-room-id")));
        });
      }
    };
  }

  // ---- floating Mini-Area windows ----
  // Draggable/resizable/maximizable/minimizable windows, stacked in one
  // fixed overlay layer appended to <body>. Each window is a self-contained
  // createExplorer() instance, so clicking a connector room inside an open
  // window opens yet another window on top -- nesting works the same way
  // Test Builder's own floating windows do.
  let windowZCounter = 3000;
  let windowCascade = 0;

  // Remembers whatever size the user last resized ANY Mini-Area window to
  // (shared across all of them, not per-area) so the next one opened starts
  // at that size instead of always resetting to the hardcoded default.
  // Per-device via localStorage -- no server round-trip, just a viewer
  // preference.
  const WINDOW_SIZE_STORAGE_KEY = "rgvMiniWindowSize";
  const DEFAULT_WINDOW_SIZE = { width: 640, height: 460 };

  function loadSavedWindowSize() {
    try {
      const parsed = JSON.parse(localStorage.getItem(WINDOW_SIZE_STORAGE_KEY));
      if (parsed && typeof parsed.width === "number" && typeof parsed.height === "number") return parsed;
    } catch (e) { /* ignore malformed/blocked storage */ }
    return null;
  }
  function saveWindowSize(width, height) {
    try { localStorage.setItem(WINDOW_SIZE_STORAGE_KEY, JSON.stringify({ width, height })); }
    catch (e) { /* storage unavailable -- size just won't persist */ }
  }

  function ensureWindowsLayer() {
    let layer = document.querySelector(".rgv-windows-layer");
    if (!layer) {
      layer = document.createElement("div");
      layer.className = "rgv-windows-layer";
      document.body.appendChild(layer);
    }
    return layer;
  }

  function bringToFront(win) {
    windowZCounter += 1;
    win.style.zIndex = windowZCounter;
  }

  function openWindow(index, node, title) {
    const layer = ensureWindowsLayer();
    const win = document.createElement("div");
    win.className = "rgv-window";
    windowCascade = (windowCascade + 28) % 220;
    win.style.left = (60 + windowCascade) + "px";
    win.style.top = (60 + windowCascade) + "px";
    const size = loadSavedWindowSize() || DEFAULT_WINDOW_SIZE;
    win.style.width = size.width + "px";
    win.style.height = size.height + "px";
    win.innerHTML =
      '<div class="rgv-window-titlebar">' +
        '<span class="rgv-window-title"></span>' +
        '<div class="rgv-window-controls">' +
          '<button class="rgv-win-btn rgv-win-min" type="button" title="Minimize">–</button>' +
          '<button class="rgv-win-btn rgv-win-max" type="button" title="Maximize">▢</button>' +
          '<button class="rgv-win-btn rgv-win-close" type="button" title="Close">✕</button>' +
        "</div>" +
      "</div>" +
      '<div class="rgv-window-body"></div>';
    win.querySelector(".rgv-window-title").textContent = title;
    layer.appendChild(win);
    bringToFront(win);
    win.addEventListener("pointerdown", () => bringToFront(win));

    const explorer = createExplorer(win.querySelector(".rgv-window-body"), index);
    explorer.show(node, title);

    // -- drag to move (titlebar only, disabled while maximized) --
    const titlebar = win.querySelector(".rgv-window-titlebar");
    let dragging = false, dragStart = null, winStart = null;
    titlebar.addEventListener("pointerdown", e => {
      if (e.target.closest(".rgv-win-btn") || win.classList.contains("rgv-window-maximized")) return;
      dragging = true;
      dragStart = { x: e.clientX, y: e.clientY };
      winStart = { left: win.offsetLeft, top: win.offsetTop };
      titlebar.setPointerCapture(e.pointerId);
    });
    titlebar.addEventListener("pointermove", e => {
      if (!dragging) return;
      win.style.left = Math.max(0, winStart.left + (e.clientX - dragStart.x)) + "px";
      win.style.top = Math.max(0, winStart.top + (e.clientY - dragStart.y)) + "px";
    });
    titlebar.addEventListener("pointerup", () => { dragging = false; });

    // -- free drag resize is native CSS `resize: both` on .rgv-window; we
    // just need to re-fit the canvas whenever the window's box changes --
    // also where an actual user resize gets persisted, skipping the
    // transient minimized (collapsed) and maximized (viewport-filling)
    // states so neither ever overwrites the real remembered size.
    const resizeObserver = new ResizeObserver(() => {
      if (explorer.resize) explorer.resize();
      if (!win.classList.contains("rgv-window-minimized") && !win.classList.contains("rgv-window-maximized")) {
        saveWindowSize(win.offsetWidth, win.offsetHeight);
      }
    });
    resizeObserver.observe(win);

    // -- close --
    win.querySelector(".rgv-win-close").addEventListener("click", () => {
      resizeObserver.disconnect();
      if (win.parentNode) win.parentNode.removeChild(win);
    });

    // -- minimize: collapse to just the titlebar, remembering prior height --
    let prevHeight = win.style.height;
    win.querySelector(".rgv-win-min").addEventListener("click", () => {
      const minimized = win.classList.toggle("rgv-window-minimized");
      if (minimized) {
        prevHeight = win.style.height;
        win.style.height = "";
      } else {
        win.style.height = prevHeight || "460px";
      }
      if (explorer.resize) explorer.resize();
    });

    // -- maximize / restore --
    let restoreBounds = null;
    win.querySelector(".rgv-win-max").addEventListener("click", () => {
      if (win.classList.contains("rgv-window-maximized")) {
        win.classList.remove("rgv-window-maximized");
        if (restoreBounds) Object.assign(win.style, restoreBounds);
      } else {
        restoreBounds = { left: win.style.left, top: win.style.top, width: win.style.width, height: win.style.height };
        win.classList.remove("rgv-window-minimized");
        win.classList.add("rgv-window-maximized");
        win.style.left = "0px";
        win.style.top = "0px";
        win.style.width = "100vw";
        win.style.height = "100vh";
      }
      if (explorer.resize) explorer.resize();
    });

    return { el: win, close: () => win.querySelector(".rgv-win-close").click() };
  }

  // Looks up a Mini-Area by id (globally across the realm, same as
  // attachInteraction's click handling) and opens it in a new floating
  // window. This is the one place both the public marker popup and the
  // in-canvas connector-room click end up calling.
  function openMiniAreaWindow(index, maId) {
    const entry = index.miniAreasById.get(maId);
    if (!entry) { console.warn("Mini-Area link is broken (id not found):", maId); return null; }
    return openWindow(index, entry.ma, entry.ma.name);
  }

  return { buildIndex, createExplorer, renderNode, openMiniAreaWindow };
})();
