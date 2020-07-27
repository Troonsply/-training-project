const reducer = function(state = {buttons:{}}, action) {
  switch (action.type) {
    case "ADD_BUTTON":
      return state.update("buttons", (buttons) => buttons.push(action.button));
    case "DELETE_BUTTON":
      return state.update("buttons",
        (buttons) => buttons.filterNot(
          (item) => item === action.button
        )
      );
  }
  return state;
}
module.exports = reducer;