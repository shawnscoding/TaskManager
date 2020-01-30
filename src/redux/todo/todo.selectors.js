import { createSelector } from "reselect";

const selectTodoReducer = state => state.todoList;

export const selectTodoList = createSelector(
  [selectTodoReducer],
  todoList => todoList.todoList
);
