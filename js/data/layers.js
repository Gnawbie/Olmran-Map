// Each layer is a separate realm map image. Add more entries here as new
// region maps are created (e.g. a cropped-out "Imperial City of Kaid" detail
// map). `colorImage` is an optional same-bounds overlay PNG that colors in
// areas of the map (territory/danger/ownership shading, etc.) — leave it
// `null` until one exists; the public viewer's "Color Layer" toggle simply
// hides itself for any realm where this is `null`.
const MAP_LAYERS = [
  {
    id: "land-of-kaid",
    name: "Land of Kaid (Overworld)",
    image: "maps/Land_of_Kaid_Fix.png",
    width: 4766,
    height: 6632,
    colorImage: null
  },
  {
    id: "olmran-evil",
    name: "Evil",
    image: "maps/Olmran_Evil_v1.1.png",
    width: 5270,
    height: 4068,
    colorImage: null
  },
  {
    id: "olmran-good",
    name: "Good",
    image: "maps/Olmran_Good_v1.1.png",
    width: 5251,
    height: 3796,
    colorImage: null
  },
  {
    id: "olmran-chaos",
    name: "Chaos",
    image: "maps/Olmran_Chaos_v1.1.png",
    width: 6983,
    height: 5326,
    colorImage: null
  }
];
