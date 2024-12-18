import {
  SET_TODO_INPUT,
  ADD_TODO_INPUT,
  DELETE_TODO_INPUT,
  EDIT_TODO_INPUT,
} from "./constants";
export const setToDoInput = (payload) => ({
  type: SET_TODO_INPUT,
  payload,
});
export const addToDoInput = (payload) => ({
  type: ADD_TODO_INPUT,
  payload,
});
export const editToDoInput = (payload) => ({
  type: EDIT_TODO_INPUT,
  payload,
});
export const deleToDoInput = (payload) => ({
  type: DELETE_TODO_INPUT,
  payload,
});
