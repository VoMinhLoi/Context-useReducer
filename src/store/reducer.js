import { act } from "react";
import { SET_TODO_INPUT, ADD_TODO_INPUT } from "./constants";
const initState = {
  toDos: [],
  toDo: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        toDo: action.payload,
      };
    case ADD_TODO_INPUT:
      return {
        ...state,
        toDos: [...state.toDos, action.payload],
      };
    default:
      throw new Error("Invalid");
  }
};
export { initState };
export default reducer;
