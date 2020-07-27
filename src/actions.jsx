const addButton = function (button) {
    return {
      type: "ADD_Button",
      button
    }
  };
const deleteButton = function (button) {
return {
    type: "DELETE_Button",
    button
}
};

module.exports = {addButton, deleteButton};