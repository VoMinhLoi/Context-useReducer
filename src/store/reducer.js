import { act } from "react";
import { SET_TODO_INPUT, ADD_TODO_INPUT, DELETE_TODO_INPUT } from "./constants";
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
    case DELETE_TODO_INPUT:
      const newToDos = [...state.toDos];
      newToDos.splice(action.payload, 1);
      return {
        ...state,
        toDos: newToDos,
      };
    default:
      throw new Error("Invalid");
  }
};
export { initState };
export default reducer;
