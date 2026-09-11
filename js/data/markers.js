// Points of interest (banks, shops, healers, etc.). Populate through the
// moderator panel, or by hand. Coordinates are [x, y] in the SOURCE IMAGE's
// pixel space (origin top-left), same space the moderator panel's
// coordinate picker reports.
//
// {
//   name: "Kaid Local Bank",
//   type: "bank",              // used for filter chips + icon label
//   layer: "land-of-kaid",     // must match an id in layers.js
//   x: 1234,
//   y: 567,
//   description: "Optional longer text shown in the popup.",
//   miniArea: null              // OR { areaId, roomId } — if set, the popup
//                                // shows a "View Area Map" button that opens
//                                // that room's linked Mini-Area (view-only)
//                                // from js/data/realm-graph/<realm>.js.
//                                // roomId is the specific connector room
//                                // whose room.connector.targetMiniAreaId
//                                // points at the Mini-Area to open.
// }
const MARKERS = [];
