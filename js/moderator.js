// Moderator panel: login gate, marker/zone content management, the
// unfiltered room-graph browser, the "accept updated map" import workflow,
// and account management. Everything here is export-then-commit — nothing
// persists anywhere but sessionStorage/memory until a human copies the
// regenerated file text over the real file and pushes it.
(function () {
  "use strict";

  function copyToClipboard(text, statusEl) {
    function done() {
      if (statusEl) { statusEl.textContent = "Copied to clipboard."; setTimeout(() => statusEl.textContent = "", 2000); }
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, () => fallbackCopy(text, done));
    } else {
      fallbackCopy(text, done);
    }
  }
  function fallbackCopy(text, done) {
    const ta = document.createElement("textarea");
    ta.value = text; ta.style.position = "fixed"; ta.style.left = "-9999px";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); } catch (e) { /* ignore */ }
    document.body.removeChild(ta);
    done();
  }
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function newId(prefix) {
    return prefix + "_" + Math.random().toString(36).slice(2, 10);
  }
  // Order-independent deep equality, used to tell "really changed" apart
  // from "same data, different key order" when diffing an import.
  function deepEqual(a, b) {
    if (a === b) return true;
    if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) return false;
    if (Array.isArray(a) !== Array.isArray(b)) return false;
    if (Array.isArray(a)) {
      if (a.length !== b.length) return false;
      for (let i = 0; i < a.length; i++) if (!deepEqual(a[i], b[i])) return false;
      return true;
    }
    const ka = Object.keys(a), kb = Object.keys(b);
    if (ka.length !== kb.length) return false;
    return ka.every(k => Object.prototype.hasOwnProperty.call(b, k) && deepEqual(a[k], b[k]));
  }
  function downloadTextFile(filename, text) {
    const blob = new Blob([text], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  // ---- login gate ----
  const loginGate = document.getElementById("login-gate");
  const builderApp = document.getElementById("builder-app");

  function showLoggedIn(session) {
    loginGate.style.display = "none";
    builderApp.hidden = false;
    document.getElementById("mod-session").textContent = `Logged in as ${session.username} (${session.role})`;
    document.getElementById("tab-accounts").style.display = session.role === "main" ? "" : "none";
    document.querySelector('.mod-tab-btn[data-tab="accounts"]').style.display = session.role === "main" ? "" : "none";
    initOnce();
  }

  document.getElementById("login-submit").addEventListener("click", async () => {
    const u = document.getElementById("login-username").value.trim();
    const p = document.getElementById("login-password").value;
    const errEl = document.getElementById("login-gate-error");
    errEl.textContent = "";
    const session = await Auth.login(u, p);
    if (!session) { errEl.textContent = "Invalid username or password."; return; }
    showLoggedIn(session);
  });
  document.getElementById("login-password").addEventListener("keydown", e => {
    if (e.key === "Enter") document.getElementById("login-submit").click();
  });
  document.getElementById("logout-btn").addEventListener("click", () => {
    Auth.logout();
    location.reload();
  });

  const existingSession = Auth.loadSession();

  // ---- tabs ----
  document.querySelectorAll(".mod-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".mod-tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".mod-tab-panel").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById("tab-" + btn.dataset.tab).classList.add("active");
      if (btn.dataset.tab === "graph") resizeGraphCanvas();
    });
  });

  let initialized = false;
  function initOnce() {
    if (initialized) return;
    initialized = true;
    populateLayerSelects();
    renderMarkerTable();
    renderZoneTable();
    initRoomGraphTab();
    renderAccountTable();
  }

  function populateLayerSelects() {
    ["marker-layer", "zone-layer"].forEach(id => {
      const sel = document.getElementById(id);
      MAP_LAYERS.forEach(l => {
        const opt = document.createElement("option");
        opt.value = l.id; opt.textContent = l.name;
        sel.appendChild(opt);
      });
    });
  }

  // ---- markers tab ----
  const markerForm = document.getElementById("marker-form");
  function renderMarkerTable() {
    const body = document.getElementById("marker-table-body");
    body.innerHTML = "";
    MARKERS.forEach((m, i) => {
      const layerName = (MAP_LAYERS.find(l => l.id === m.layer) || {}).name || m.layer;
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${escapeHtml(m.name)}</td><td>${escapeHtml(m.type || "")}</td><td>${escapeHtml(layerName)}</td>` +
        `<td>${m.x}, ${m.y}</td><td>${m.miniArea ? "✓" : ""}</td><td></td>`;
      const cell = tr.lastElementChild;
      const editBtn = document.createElement("button");
      editBtn.className = "mod-btn secondary"; editBtn.textContent = "Edit";
      editBtn.addEventListener("click", () => loadMarkerIntoForm(i));
      const delBtn = document.createElement("button");
      delBtn.className = "mod-btn danger"; delBtn.textContent = "Delete";
      delBtn.style.marginLeft = "6px";
      delBtn.addEventListener("click", () => { MARKERS.splice(i, 1); renderMarkerTable(); });
      cell.appendChild(editBtn); cell.appendChild(delBtn);
      body.appendChild(tr);
    });
  }
  function loadMarkerIntoForm(i) {
    const m = MARKERS[i];
    document.getElementById("marker-edit-id").value = i;
    document.getElementById("marker-name").value = m.name;
    document.getElementById("marker-type").value = m.type || "";
    document.getElementById("marker-layer").value = m.layer;
    document.getElementById("marker-x").value = m.x;
    document.getElementById("marker-y").value = m.y;
    document.getElementById("marker-description").value = m.description || "";
    document.getElementById("marker-ma-area").value = m.miniArea ? m.miniArea.areaId : "";
    document.getElementById("marker-ma-room").value = m.miniArea ? m.miniArea.roomId : "";
  }
  document.getElementById("marker-cancel-edit").addEventListener("click", () => { markerForm.reset(); document.getElementById("marker-edit-id").value = ""; });
  markerForm.addEventListener("submit", e => {
    e.preventDefault();
    const idxStr = document.getElementById("marker-edit-id").value;
    const areaId = document.getElementById("marker-ma-area").value.trim();
    const roomId = document.getElementById("marker-ma-room").value.trim();
    const marker = {
      name: document.getElementById("marker-name").value.trim(),
      type: document.getElementById("marker-type").value.trim(),
      layer: document.getElementById("marker-layer").value,
      x: Number(document.getElementById("marker-x").value),
      y: Number(document.getElementById("marker-y").value),
      description: document.getElementById("marker-description").value.trim() || undefined,
      miniArea: (areaId && roomId) ? { areaId, roomId } : null
    };
    if (idxStr !== "") MARKERS[Number(idxStr)] = marker; else MARKERS.push(marker);
    markerForm.reset();
    document.getElementById("marker-edit-id").value = "";
    renderMarkerTable();
  });

  function formatMarkersFile(markers) {
    const header =
      `// Points of interest (banks, shops, healers, etc.). Populate through the\n` +
      `// moderator panel, or by hand. Coordinates are [x, y] in the SOURCE IMAGE's\n` +
      `// pixel space (origin top-left).\n`;
    return header + `const MARKERS = ${JSON.stringify(markers, null, 2)};\n`;
  }
  document.getElementById("copy-markers-btn").addEventListener("click", function () {
    copyToClipboard(formatMarkersFile(MARKERS), this);
  });

  // ---- zones tab ----
  const zoneForm = document.getElementById("zone-form");
  function renderZoneTable() {
    const body = document.getElementById("zone-table-body");
    body.innerHTML = "";
    ZONES.forEach((z, i) => {
      const layerName = (MAP_LAYERS.find(l => l.id === z.layer) || {}).name || z.layer;
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${escapeHtml(z.name)}</td><td>${escapeHtml(layerName)}</td><td>${z.x}, ${z.y}</td><td></td>`;
      const cell = tr.lastElementChild;
      const editBtn = document.createElement("button");
      editBtn.className = "mod-btn secondary"; editBtn.textContent = "Edit";
      editBtn.addEventListener("click", () => loadZoneIntoForm(i));
      const delBtn = document.createElement("button");
      delBtn.className = "mod-btn danger"; delBtn.textContent = "Delete";
      delBtn.style.marginLeft = "6px";
      delBtn.addEventListener("click", () => { ZONES.splice(i, 1); renderZoneTable(); });
      cell.appendChild(editBtn); cell.appendChild(delBtn);
      body.appendChild(tr);
    });
  }
  function loadZoneIntoForm(i) {
    const z = ZONES[i];
    document.getElementById("zone-edit-index").value = i;
    document.getElementById("zone-name").value = z.name;
    document.getElementById("zone-layer").value = z.layer;
    document.getElementById("zone-x").value = z.x;
    document.getElementById("zone-y").value = z.y;
  }
  document.getElementById("zone-cancel-edit").addEventListener("click", () => { zoneForm.reset(); document.getElementById("zone-edit-index").value = "-1"; });
  zoneForm.addEventListener("submit", e => {
    e.preventDefault();
    const idx = Number(document.getElementById("zone-edit-index").value);
    const zone = {
      name: document.getElementById("zone-name").value.trim(),
      layer: document.getElementById("zone-layer").value,
      x: Number(document.getElementById("zone-x").value),
      y: Number(document.getElementById("zone-y").value)
    };
    if (idx >= 0) ZONES[idx] = zone; else ZONES.push(zone);
    zoneForm.reset();
    document.getElementById("zone-edit-index").value = "-1";
    renderZoneTable();
  });

  function formatZonesFile(zones) {
    const header =
      `// Named regions on the map, used for the search box's "jump to zone"\n` +
      `// feature. Coordinates are [x, y] in the SOURCE IMAGE's pixel space (origin\n` +
      `// top-left).\n`;
    return header + `const ZONES = ${JSON.stringify(zones, null, 2)};\n`;
  }
  document.getElementById("copy-zones-btn").addEventListener("click", function () {
    copyToClipboard(formatZonesFile(ZONES), this);
  });

  // ---- room graph tab (unfiltered browser) ----
  const REALMS = [
    { key: "kaid", label: "Land of Kaid", varName: "REALM_KAID", getData: () => (typeof REALM_KAID !== "undefined" ? REALM_KAID : []) },
    { key: "evil", label: "Evil", varName: "REALM_EVIL", getData: () => (typeof REALM_EVIL !== "undefined" ? REALM_EVIL : []) },
    { key: "good", label: "Good", varName: "REALM_GOOD", getData: () => (typeof REALM_GOOD !== "undefined" ? REALM_GOOD : []) },
    { key: "chaos", label: "Chaos", varName: "REALM_CHAOS", getData: () => (typeof REALM_CHAOS !== "undefined" ? REALM_CHAOS : []) }
  ];
  let graphExplorer = null;

  function initRoomGraphTab() {
    const realmSelect = document.getElementById("graph-realm-select");
    REALMS.forEach(r => {
      const opt = document.createElement("option");
      opt.value = r.key; opt.textContent = r.label;
      realmSelect.appendChild(opt);
    });
    realmSelect.addEventListener("change", populateAreaSelect);
    document.getElementById("graph-area-select").addEventListener("change", showSelectedArea);
    graphExplorer = RoomGraphView.createExplorer(document.getElementById("room-graph-canvas"), { areasById: new Map(), miniAreasById: new Map() });
    populateAreaSelect();
  }

  function currentRealm() {
    const key = document.getElementById("graph-realm-select").value;
    return REALMS.find(r => r.key === key) || REALMS[0];
  }

  function populateAreaSelect() {
    const realm = currentRealm();
    const areas = realm.getData();
    const areaSelect = document.getElementById("graph-area-select");
    areaSelect.innerHTML = "";
    if (areas.length === 0) {
      const opt = document.createElement("option");
      opt.textContent = "(no areas imported yet)"; opt.value = "";
      areaSelect.appendChild(opt);
      return;
    }
    areas.forEach(a => {
      const opt = document.createElement("option");
      opt.value = a.id; opt.textContent = a.name;
      areaSelect.appendChild(opt);
    });
    showSelectedArea();
  }

  function showSelectedArea() {
    const realm = currentRealm();
    const areas = realm.getData();
    const areaId = document.getElementById("graph-area-select").value;
    const area = areas.find(a => a.id === areaId);
    const index = RoomGraphView.buildIndex(areas);
    graphExplorer = RoomGraphView.createExplorer(document.getElementById("room-graph-canvas"), index);
    if (area) graphExplorer.show(area, area.name);
  }

  function resizeGraphCanvas() {
    if (graphExplorer) graphExplorer.resize();
  }

  // ---- GitHub direct-commit (optional, accept-updated-map tab) ----
  // Token is remembered in localStorage for 30 days (per-device, not
  // per-session) so it doesn't need re-entering every login. Whoever has
  // access to this browser/device for that window can commit to the repo
  // with it -- that's the accepted tradeoff for not re-pasting it each time.
  const GITHUB_OWNER = "Gnawbie", GITHUB_REPO = "Olmran-Map";
  const GITHUB_TOKEN_STORAGE_KEY = "modGithubToken";
  const GITHUB_TOKEN_TTL_MS = 30 * 24 * 60 * 60 * 1000;
  let githubToken = "";
  let githubBranchCache = null;

  function loadStoredGithubToken() {
    try {
      const raw = localStorage.getItem(GITHUB_TOKEN_STORAGE_KEY);
      if (!raw) return "";
      const parsed = JSON.parse(raw);
      if (!parsed || !parsed.token || !parsed.savedAt) return "";
      if (Date.now() - parsed.savedAt > GITHUB_TOKEN_TTL_MS) {
        localStorage.removeItem(GITHUB_TOKEN_STORAGE_KEY);
        return "";
      }
      return parsed.token;
    } catch (e) { return ""; }
  }
  function saveStoredGithubToken(token) {
    try {
      if (token) localStorage.setItem(GITHUB_TOKEN_STORAGE_KEY, JSON.stringify({ token, savedAt: Date.now() }));
      else localStorage.removeItem(GITHUB_TOKEN_STORAGE_KEY);
    } catch (e) { /* storage unavailable/blocked -- token just won't persist */ }
  }

  githubToken = loadStoredGithubToken();
  const githubTokenInput = document.getElementById("github-token");
  if (githubToken) githubTokenInput.value = githubToken;
  githubTokenInput.addEventListener("input", e => {
    githubToken = e.target.value.trim();
    saveStoredGithubToken(githubToken);
  });

  function utf8ToBase64(str) {
    const bytes = new TextEncoder().encode(str);
    let binary = "";
    bytes.forEach(b => { binary += String.fromCharCode(b); });
    return btoa(binary);
  }
  function base64ToUtf8(b64) {
    const binary = atob(b64.replace(/\n/g, ""));
    const bytes = Uint8Array.from(binary, c => c.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  }

  async function githubApi(path, options) {
    const opts = options || {};
    const res = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}${path}`, {
      ...opts,
      headers: {
        "Accept": "application/vnd.github+json",
        "Authorization": `Bearer ${githubToken}`,
        "X-GitHub-Api-Version": "2022-11-28",
        ...(opts.headers || {})
      }
    });
    let body = null;
    try { body = await res.json(); } catch (e) { /* no/invalid JSON body */ }
    if (!res.ok) {
      const err = new Error((body && body.message) || `HTTP ${res.status}`);
      err.status = res.status;
      throw err;
    }
    return body;
  }

  async function githubDefaultBranch() {
    if (githubBranchCache) return githubBranchCache;
    const info = await githubApi("");
    githubBranchCache = info.default_branch || "main";
    return githubBranchCache;
  }

  async function commitFileToGithub(path, content, message) {
    if (!githubToken) throw new Error("enter a GitHub token above first");
    const branch = await githubDefaultBranch();
    let sha;
    try {
      const existing = await githubApi(`/contents/${path}?ref=${encodeURIComponent(branch)}`);
      sha = existing.sha;
    } catch (e) {
      if (e.status !== 404) throw e;
    }
    return githubApi(`/contents/${path}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, content: utf8ToBase64(content), branch, ...(sha ? { sha } : {}) })
    });
  }

  // Same convention as every manual push: bump index.html's ?v=N so
  // browsers that already cached the old realm-graph JS actually refetch it.
  async function bumpCacheVersionOnGithub() {
    const branch = await githubDefaultBranch();
    const file = await githubApi(`/contents/index.html?ref=${encodeURIComponent(branch)}`);
    const html = base64ToUtf8(file.content);
    const versions = [...html.matchAll(/\?v=(\d+)/g)].map(m => parseInt(m[1], 10));
    if (versions.length === 0) return null;
    const newV = Math.max(...versions) + 1;
    const bumped = html.replace(/\?v=\d+/g, `?v=${newV}`);
    return githubApi(`/contents/index.html`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: `Bump cache version to v${newV}`, content: utf8ToBase64(bumped), branch, sha: file.sha })
    });
  }

  // ---- accept updated map (import) tab ----
  let pendingImport = null; // { byRealmKey: { key -> Area[] } }

  function runImportPreview() {
    const raw = document.getElementById("import-json").value.trim();
    const summaryEl = document.getElementById("import-summary");
    const outputEl = document.getElementById("import-export-output");
    summaryEl.innerHTML = ""; outputEl.innerHTML = "";
    let parsed;
    try { parsed = JSON.parse(raw); } catch (e) { summaryEl.innerHTML = `<p style="color:var(--danger)">Invalid JSON: ${escapeHtml(e.message)}</p>`; return; }
    // Accepts either { areas: { id: Area } } (Test Builder's localStorage/bulk-export
    // shape) or a plain array of Area objects.
    let areaList;
    if (Array.isArray(parsed)) areaList = parsed;
    else if (parsed && parsed.areas) areaList = Object.values(parsed.areas);
    else { summaryEl.innerHTML = `<p style="color:var(--danger)">Unrecognized shape — expected { areas: {...} } or an array of areas.</p>`; return; }

    const realmNameToKey = { Chaos: "chaos", Evil: "evil", Good: "good", Kaid: "kaid" };
    const byRealmKey = {};
    let unassigned = 0;
    areaList.forEach(area => {
      const key = realmNameToKey[area.realm];
      if (!key) { unassigned++; return; }
      (byRealmKey[key] = byRealmKey[key] || []).push(area);
    });

    pendingImport = { byRealmKey };

    const roomCount = arr => arr.reduce((n, a) => n + (a.rooms || []).length + (a.miniAreas || []).reduce((m, ma) => m + (ma.rooms || []).length, 0), 0);
    const changedRealms = [];
    const rows = REALMS.map(r => {
      const incoming = byRealmKey[r.key] || [];
      const current = r.getData();
      if (incoming.length === 0) {
        return `<div class="realm-row no-change"><strong>${r.label}:</strong> nothing in the import for this realm — left as-is.</div>`;
      }
      const changed = !deepEqual(current, incoming);
      if (changed) changedRealms.push(r);
      const noun = changed ? "" : " <em>(identical to what's already live — nothing to do)</em>";
      return `<div class="realm-row${changed ? "" : " no-change"}"><strong>${r.label}:</strong> ${current.length} → ${incoming.length} area(s), ${roomCount(current)} → ${roomCount(incoming)} room(s)${noun}</div>`;
    }).join("");
    summaryEl.innerHTML = rows + (unassigned ? `<p style="color:var(--danger)">${unassigned} area(s) had no recognized realm and were skipped.</p>` : "");

    if (changedRealms.length === 0) {
      outputEl.innerHTML = `<p class="import-all-clear">Nothing to apply — every realm above already matches this import.</p>`;
      return;
    }

    function commitErrorHint(e) {
      const msg = (e.message || "").toLowerCase();
      if (e.status === 401 || msg.includes("bad credentials")) {
        return " — the token looks invalid or expired. Generate a new one.";
      }
      if (e.status === 403 || e.status === 404 || msg.includes("not accessible")) {
        return " — check the token's Contents permission is \"Read and write\" and that this repo is included in its repository access.";
      }
      if (e.status === 409) {
        return " — someone else changed this file since Preview Import ran. Re-run Preview Import and try again.";
      }
      if (e.status === 422 && (msg.includes("too large") || msg.includes("large"))) {
        return " — this file is likely too big for direct commit. Use Download/Copy below instead.";
      }
      return "";
    }

    // ---- one primary Apply action: commits every changed realm, then bumps cache version ----
    const realmNames = changedRealms.map(r => r.label).join(", ");
    const applyWrap = document.createElement("div");
    applyWrap.className = "realm-apply-block apply-primary";
    applyWrap.innerHTML =
      `<h4>Apply to the live map</h4>` +
      `<p class="mod-hint">Commits ${realmNames} straight to GitHub and bumps the cache version, in one step.</p>`;
    const applyActions = document.createElement("div");
    applyActions.className = "realm-apply-actions";
    const applyBtn = document.createElement("button");
    applyBtn.className = "mod-btn apply-btn";
    applyBtn.textContent = changedRealms.length === 1 ? `Apply ${changedRealms[0].label} change` : `Apply all ${changedRealms.length} changes`;
    const applyStatus = document.createElement("span");
    applyStatus.className = "mod-status";
    const applyResult = document.createElement("div");
    applyResult.className = "apply-result";
    applyBtn.addEventListener("click", async () => {
      applyBtn.disabled = true;
      applyResult.className = "apply-result";
      applyResult.textContent = "";
      try {
        for (const r of changedRealms) {
          applyStatus.textContent = `Committing ${r.label}…`;
          await commitFileToGithub(`js/data/realm-graph/${r.key}.js`, formatRealmGraphFile(r, byRealmKey[r.key]), `Update room graph: ${r.label}`);
        }
        applyStatus.textContent = "Bumping cache version…";
        await bumpCacheVersionOnGithub();
        applyStatus.textContent = "";
        applyResult.className = "apply-result ok";
        applyResult.innerHTML = `&check; Applied — ${escapeHtml(realmNames)} committed. GitHub Pages will rebuild in about a minute.`;
      } catch (e) {
        applyStatus.textContent = "";
        applyResult.className = "apply-result err";
        applyResult.textContent = "Failed: " + e.message + commitErrorHint(e);
      } finally {
        applyBtn.disabled = false;
      }
    });
    applyActions.appendChild(applyBtn); applyActions.appendChild(applyStatus);
    applyWrap.appendChild(applyActions);
    applyWrap.appendChild(applyResult);
    outputEl.appendChild(applyWrap);

    // ---- per-realm manual fallback: no token, or prefer to handle it yourself ----
    changedRealms.forEach(r => {
      const path = `js/data/realm-graph/${r.key}.js`;
      const fileText = formatRealmGraphFile(r, byRealmKey[r.key]);
      const wrap = document.createElement("div");
      wrap.className = "realm-apply-block secondary";
      wrap.innerHTML =
        `<h4>${r.label}</h4>` +
        `<p class="mod-hint">Or do it yourself: save as <code>${path}</code>, overwriting the existing file.</p>`;
      const actions = document.createElement("div");
      actions.className = "realm-apply-actions";
      const dlBtn = document.createElement("button");
      dlBtn.className = "mod-btn secondary";
      dlBtn.textContent = "Download";
      dlBtn.addEventListener("click", () => downloadTextFile(`${r.key}.js`, fileText));
      const copyBtn = document.createElement("button");
      copyBtn.className = "mod-btn secondary";
      copyBtn.textContent = "Copy instead";
      const copyStatus = document.createElement("span");
      copyStatus.className = "mod-status";
      copyBtn.addEventListener("click", () => copyToClipboard(fileText, copyStatus));
      actions.appendChild(dlBtn); actions.appendChild(copyBtn); actions.appendChild(copyStatus);
      wrap.appendChild(actions);
      outputEl.appendChild(wrap);
    });

    const gitWrap = document.createElement("div");
    gitWrap.className = "realm-apply-block secondary";
    const gitPaths = changedRealms.map(r => `js/data/realm-graph/${r.key}.js`).join(" ");
    const gitCmd = `git add ${gitPaths}\ngit commit -m "Update room graph: ${changedRealms.map(r => r.label).join(", ")}"\ngit push`;
    gitWrap.innerHTML = `<h4>Or, from the repo folder</h4><p class="mod-hint">If you downloaded/copied instead of applying directly:</p>`;
    const pre = document.createElement("pre");
    pre.style.cssText = "font-size:12px; background:var(--panel-bg); border:1px solid var(--panel-border); border-radius:4px; padding:8px; white-space:pre-wrap; margin:0 0 8px;";
    pre.textContent = gitCmd;
    const gitCopyBtn = document.createElement("button");
    gitCopyBtn.className = "mod-btn secondary";
    gitCopyBtn.textContent = "Copy commands";
    const gitStatus = document.createElement("span");
    gitStatus.className = "mod-status";
    gitCopyBtn.addEventListener("click", () => copyToClipboard(gitCmd, gitStatus));
    gitWrap.appendChild(pre);
    const gitActions = document.createElement("div");
    gitActions.className = "realm-apply-actions";
    gitActions.appendChild(gitCopyBtn); gitActions.appendChild(gitStatus);
    gitWrap.appendChild(gitActions);
    outputEl.appendChild(gitWrap);
  }

  document.getElementById("import-preview-btn").addEventListener("click", runImportPreview);

  // Upload a JSON file instead of pasting -- reads it into the same
  // textarea Preview Import already reads from, then runs the preview
  // automatically (non-destructive: it only parses and shows a summary,
  // nothing is written until you actually copy+paste a realm file
  // yourself) so uploading really does "input the code automatically".
  document.getElementById("import-json-file").addEventListener("change", (evt) => {
    const file = evt.target.files[0];
    if (!file) return;
    document.getElementById("import-json-filename").textContent = file.name;
    const reader = new FileReader();
    reader.onload = () => {
      document.getElementById("import-json").value = reader.result;
      runImportPreview();
    };
    reader.onerror = () => {
      document.getElementById("import-summary").innerHTML =
        `<p style="color:var(--danger)">Couldn't read that file.</p>`;
    };
    reader.readAsText(file);
  });

  function formatRealmGraphFile(realm, areas) {
    const header =
      `// Test-builder-exported room-graph data (Areas -> Rooms/Edges/Connectors/\n` +
      `// Mini-Areas) for the ${realm.label} realm. Wholesale-replaced whenever the\n` +
      `// moderator panel accepts an updated export — never hand-edited.\n`;
    return header + `const ${realm.varName} = ${JSON.stringify(areas, null, 2)};\n`;
  }

  // ---- accounts tab ----
  function renderAccountTable() {
    const body = document.getElementById("account-table-body");
    body.innerHTML = "";
    MOD_ACCOUNTS.forEach(a => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${escapeHtml(a.username)}</td><td>${escapeHtml(a.role)}</td><td></td>`;
      if (a.role !== "main") {
        const delBtn = document.createElement("button");
        delBtn.className = "mod-btn danger"; delBtn.textContent = "Remove";
        delBtn.addEventListener("click", () => { Auth.removeAccount(a.username); renderAccountTable(); });
        tr.lastElementChild.appendChild(delBtn);
      }
      body.appendChild(tr);
    });
  }
  document.getElementById("account-form").addEventListener("submit", async e => {
    e.preventDefault();
    const username = document.getElementById("account-username").value.trim();
    const password = document.getElementById("account-password").value;
    const role = document.getElementById("account-role").value;
    if (!username || !password) return;
    await Auth.addAccount(username, password, role);
    e.target.reset();
    renderAccountTable();
  });
  document.getElementById("copy-accounts-btn").addEventListener("click", function () {
    copyToClipboard(Auth.formatAccountsFile(MOD_ACCOUNTS), this);
  });

  // Restoring a session on load must run last: showLoggedIn() -> initOnce()
  // touches every tab's render functions, which close over consts (REALMS,
  // MARKERS, ZONES, ...) declared throughout this file — calling it any
  // earlier would hit those before their declarations run.
  if (existingSession) showLoggedIn(existingSession);
})();
