# Land of Olmran — Interactive Map

A pannable, zoomable public map for the Land of Olmran game world (Leaflet,
`CRS.Simple`), plus a login-walled moderator panel for curating map content
and browsing the underlying room-graph data.

## Running locally

Static site, no build step:

```
python -m http.server 8080
```

then open `http://localhost:8080`.

## Project structure

```
index.html              public map viewer
moderator.html            login-walled moderator panel
css/style.css              public viewer styling (also shared by the room-graph viewer)
css/moderator.css           moderator panel styling
js/app.js                  public viewer: Leaflet, search, filters, markers, item browser
js/moderator.js              moderator panel: marker/zone editing, room-graph browser, map import
js/auth.js                  shared PBKDF2-SHA256 moderator login (both pages include it)
js/room-graph-view.js         read-only room/edge/connector renderer, shared by both pages
js/data/layers.js              map image layer defs, one per realm
js/data/zones.js               named zones for the "jump to zone" search
js/data/markers.js              moderator-curated points of interest
js/data/zone-items.js            item drops per zone
js/data/mod-accounts.js           hashed moderator accounts
js/data/realm-graph/*.js          Test-Builder-exported room-graph data, one file per realm
maps/                          realm map images
```

## Public map

- Layer dropdown switches between the four realm maps.
- Search box jumps to any zone in `js/data/zones.js` (switches realm if needed).
- Filter chips show/hide marker types.
- A marker's popup shows a "View Area Map" button when it has a `miniArea`
  link — opens a read-only viewer of that Mini-Area's rooms, with the same
  click-to-drill-deeper behavior as the original Test Builder tool, just
  without any editing. This is the only place the room-graph is visible to
  the public — deliberately scoped to the linked Mini-Area only, not the
  full graph.
- "Color Layer" toggle appears once a realm's `layers.js` entry has a
  `colorImage` set (nothing does yet — this is a prepared slot for a future
  area-coloring overlay from a separate program).

## Moderator panel

Log in at `moderator.html` (accounts in `js/data/mod-accounts.js`, hashed —
not real security on a public static site, just a casual deterrent; don't
reuse an important password). Once logged in:

- **Markers** / **Zones** — add/edit/delete, then "Copy updated `<file>.js`"
  and paste it over the real file, commit, push. Same pattern as everything
  else here — this is a static site with no backend, so nothing is truly
  live until you push.
- **Room Graph** — the full, unfiltered room-graph browser: pick any realm
  and area, including every Mini-Area, view-only.
- **Accept Updated Map** — paste the JSON from Test Builder's "Copy ALL
  Areas (JSON)" button (see below), preview the realm-by-realm diff, then
  copy the regenerated `js/data/realm-graph/<realm>.js` file(s) and commit.
  This never touches `markers.js` or `zones.js`, so moderator-curated
  public map content survives every re-import.
- **Accounts** (main role only) — add/remove moderator accounts, then copy
  the updated `mod-accounts.js` and commit.

## Getting data out of Test Builder

Test Builder (the separate room/area graph editor) has a "Copy ALL Areas
(JSON)" button next to "Copy Area Data" that exports everything in one
shot — paste that straight into the moderator panel's Accept Updated Map tab.

## Adding a new region map

1. Drop the image into `maps/`.
2. Add an entry to `MAP_LAYERS` in `js/data/layers.js` with its pixel
   width/height.
3. It shows up automatically in the layer dropdown.
