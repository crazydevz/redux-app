const countDefaultState = 0;

export default (state = countDefaultState, action) => {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return state + 1;
    default:
      return state;
  }
};
