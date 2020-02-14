import todoActionTypes from "./todo.types";
import { checkIfTodoExist } from "./todo.utils";

const INITIAL_STATE = {
  todoList: [],
  weeklyTodo: []
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case todoActionTypes.ADD_TODO_SUCCESS:
      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      };
    case todoActionTypes.GET_WEEKLY_TODO_SUCCESS:
      return {
        ...state,
        weeklyTodo: action.payload
      };
    case todoActionTypes.REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo !== action.payload)
      };
    case todoActionTypes.SET_TODO_FROM_FIREBASE:
      return {
        ...state,
        todoList: checkIfTodoExist(action.payload)
      };
    case todoActionTypes.CLEAR_TODO_LIST:
      return {
        ...state,
        todoList: []
      };
    case todoActionTypes.SET_ANOTHER_TODO_SUCCESS:
      return {
        ...state,
        todoList: checkIfTodoExist(action.payload)
      };
    default:
      return state;
  }
};

export default todoReducer;
