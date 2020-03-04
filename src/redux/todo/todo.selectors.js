import { createSelector } from "reselect";

const selectTodoReducer = state => state.todoList;

export const selectMonthlyTodo = createSelector(
  [selectTodoReducer],
  todoList => todoList.monthlyTodo
);

export const selectWeeklyTodo = createSelector(
  [selectTodoReducer],
  todoList => todoList.weeklyTodo
);
