// ALl reducers have two params.
// 1. Current State, usually provide a default state.
// 2. Info that came from any action.

// export default (state = [], action) => {
//   return state;
// };

const seedData = [
  { food: "burger", quantity: 1000 },
  { food: "steak", quantity: 2000 },
  { food: "chicke", quantity: 3000 },
];

function meatReducer(state = seedData, action) {
  return state;
}
export default meatReducer;
