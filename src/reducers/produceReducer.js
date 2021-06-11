// ALl reducers have two params.
// 1. Current State, usually provide a default state.
// 2. Info that came from any action.

// export default (state = [], action) => {
//   return state;
// };

const seedData = [
  { food: "Lettuce", quantity: 50 },
  { food: "Turnips", quantity: 20 },
  { food: "Apples", quantity: 40 },
  { food: "Cilantro", quantity: 70 },
];

function produceReducer(state = seedData, action) {
  return state;
}
export default produceReducer;
