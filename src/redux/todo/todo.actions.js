import todoActionTypes from "./todo.types";

export const addTodo = todo => ({
  type: todoActionTypes.ADD_TODO,
  payload: todo
});

export const removeTodo = todo => ({
  type: todoActionTypes.REMOVE_TODO,
  payload: todo
});

export const setTodoFromFirebase = todos => ({
  type: todoActionTypes.SET_TODO_FROM_FIREBASE,
  payload: todos
});
