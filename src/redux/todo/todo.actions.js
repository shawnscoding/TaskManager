import todoActionTypes from "./todo.types";

export const addTodoStart = (form, date) => ({
  type: todoActionTypes.ADD_TODO_START,
  payload: { form, date }
});

export const addTodoSuccess = newTodo => ({
  type: todoActionTypes.ADD_TODO_SUCCESS,
  payload: newTodo
});

export const removeTodoStart = todo => ({
  type: todoActionTypes.REMOVE_TODO_START,
  payload: todo
});

export const removeTodoSuccess = todo => ({
  type: todoActionTypes.REMOVE_TODO_SUCCESS,
  payload: todo
});

export const clearTodoList = () => ({
  type: todoActionTypes.CLEAR_TODO_LIST
});

export const setTodoFromFirebase = todoList => ({
  type: todoActionTypes.SET_TODO_FROM_FIREBASE,
  payload: todoList
});

export const setAnotherTodoStart = month => ({
  type: todoActionTypes.SET_ANOTHER_TODO_START,
  payload: month
});

export const setAnotherTodoSuccess = todoList => ({
  type: todoActionTypes.SET_ANOTHER_TODO_SUCCESS,
  payload: todoList
});

export const setTodoOnTimer = todo => ({
  type: todoActionTypes.SET_TODO_ON_TIMTER,
  payload: todo
});

export const getWeeklyTodoStart = week => ({
  type: todoActionTypes.GET_WEEKLY_TODO_START,
  payload: week
});

export const getWeeklyTodoSuccess = todoList => ({
  type: todoActionTypes.GET_WEEKLY_TODO_SUCCESS,
  payload: todoList
});

export const openTimer = () => ({
  type: todoActionTypes.OPEN_TIMER
});

export const closeTimer = () => ({
  type: todoActionTypes.CLOSE_TIMER
});

export const stoppedWork = () => ({
  type: todoActionTypes.STOPPED_WORKING
});

export const startedWork = () => ({
  type: todoActionTypes.STARTED_WORKING
});

export const storeUpdatedTodoStart = task => ({
  type: todoActionTypes.STORE_UPDATED_TODO_START,
  payload: task
});

export const storeUpdatedTodoFinish = task => ({
  type: todoActionTypes.STORE_UPDATED_TODO_FINISH,
  payload: task
});

export const resetMonthlyTodoOnRoute = () => ({
  type: todoActionTypes.RESET_MONTHLY_TODO_ON_ROUTE
});
