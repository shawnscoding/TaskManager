import { createSelector } from "reselect";

const selectTodoReducer = state => state.todoList;

export const selectTodoList = createSelector(
  [selectTodoReducer],
  todoList => todoList.todoList
);

export const selectTodoListByMonth = createSelector(
  [selectTodoReducer],
  todoList => todoList.todosByMonth
);
