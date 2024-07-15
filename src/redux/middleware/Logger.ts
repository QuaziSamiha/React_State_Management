const Logger = (state) => (next) => (action) => {
  // console.log(state)
  // console.log(next)
  // console.log(action)
  console.log("Current State => ", state.getState());
  console.log("Action => ", action);
  // next();
  next(action);
  console.log("Next State => ", state.getState());
};

export default Logger;
