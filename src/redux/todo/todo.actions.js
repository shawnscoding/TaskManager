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

export const setTodoFromFirebase = todoList => ({
  type: todoActionTypes.SET_TODO_FROM_FIREBASE,
  payload: todoList
});

export const clearTodoList = () => ({
  type: todoActionTypes.CLEAR_TODO_LIST
});
