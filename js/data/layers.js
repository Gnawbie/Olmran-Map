// Each layer is a separate realm map image. Add more entries here as new
// region maps are created (e.g. a cropped-out "Imperial City of Kaid" detail
// map). `colorImage` is an optional overlay PNG that colors in areas of the
// map (territory/danger/ownership shading, etc.) — leave it `null` until one
// exists; the public viewer's "Color Layer" toggle simply hides itself for
// any realm where this is `null`.
//
// `colorMapAnchor` is this base image's own pixel coordinate ({x, y} in the
// same space as `width`/`height`) that the color image's realm-graph "center"
// room (Test Builder's `isCenter` room flag) should land on. app.js shifts
// the color overlay by (colorMapAnchor - that room's room-graph coordinate)
// so it registers against the base map — a translation only, so this assumes
// the color image was generated at the same pixel scale as the base image.
// Leave `null` (falls back to identical bounds) until both a colorImage and
// a real anchor point are known for that realm.
const MAP_LAYERS = [
  {
    id: "land-of-kaid",
    name: "Land of Kaid (Overworld)",
    image: "maps/Land_of_Kaid_Fix.png?v=1",
    width: 4766,
    height: 6632,
    colorImage: null,
    colorMapAnchor: null
  },
  {
    id: "olmran-evil",
    name: "Evil",
    image: "maps/Olmran_Evil_v1.1.png",
    width: 5270,
    height: 4068,
    colorImage: null,
    colorMapAnchor: null
  },
  {
    id: "olmran-good",
    name: "Good",
    image: "maps/Olmran_Good_v1.1.png",
    width: 5251,
    height: 3796,
    colorImage: null,
    colorMapAnchor: null
  },
  {
    id: "olmran-chaos",
    name: "Chaos",
    image: "maps/Olmran_Chaos_v1.1.png",
    width: 6983,
    height: 5326,
    colorImage: null,
    colorMapAnchor: null
  }
];
