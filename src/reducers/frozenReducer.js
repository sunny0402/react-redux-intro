// ALl reducers have two params.
// 1. Current State, usually provide a default state.
// 2. Info that came from any action.

// export default (state = [], action) => {
//   return state;
// };

const seedData = ["TV Dinners", "Frozen Veggies", "Frozen pizzas"];

function frozenReducer(state = seedData, action) {
  return state;
}
export default frozenReducer;
