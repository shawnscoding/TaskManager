import todoActionTypes from "./todo.types";
import { onFilterTodoForThisMonth } from "./todo.utils";

const INITIAL_STATE = {
  todoList: [],
  todosByMonth: []
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case todoActionTypes.ADD_TODO_SUCCESS:
      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      };
    case todoActionTypes.FILTER_TODO_FOR_THIS_MONTH:
      return {
        ...state,
        todosByMonth: onFilterTodoForThisMonth(state.todoList)
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
    case todoActionTypes.CLEAR_TODO_LIST:
      return {
        ...state,
        todoList: []
      };
    default:
      return state;
  }
};

export default todoReducer;
