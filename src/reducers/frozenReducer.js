// ALl reducers have two params.
// 1. Current State, usually provide a default state.
// 2. Info that came from any action.

// export default (state = [], action) => {
//   return state;
// };

const seedData = [
  { food: "TV Dinners", quantity: 100 },
  { food: "Veggies", quantity: 200 },
  { food: "Frozen pizzas", quantity: 300 },
];

function frozenReducer(state = seedData, action) {
  return state;
}
export default frozenReducer;
