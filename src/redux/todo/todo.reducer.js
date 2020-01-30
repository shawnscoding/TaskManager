import todoActionTypes from "./todo.types";

const INITIAL_STATE = {
  todoList: []
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case todoActionTypes.ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      };
    case todoActionTypes.REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== action.payload)
      };
    case todoActionTypes.SET_TODO_FROM_FIREBASE:
      return {
        ...state,
        todoList: action.payload
      };
    default:
      return state;
  }
};

export default todoReducer;
