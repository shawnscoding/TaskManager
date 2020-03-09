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

export const selectTimer = createSelector(
  [selectTodoReducer],
  todoList => todoList.timer
);

export const selectCurrentTask = createSelector(
  [selectTodoReducer],
  todoList => todoList.currentTask
);

export const selectWorking = createSelector(
  [selectTodoReducer],
  todoList => todoList.working
);

export const selectFormerTodo = createSelector(
  [selectTodoReducer],
  todoList => todoList.formerTodo
);
