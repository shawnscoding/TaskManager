import todoActionTypes from "./todo.types";
import { setDailyTodo } from "./todo.utils";

const INITIAL_STATE = {
  todoList: [],
  dailyTodo: []
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case todoActionTypes.ADD_TODO_SUCCESS:
      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      };
    case todoActionTypes.GET_DAILY_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
        dailyTodo: setDailyTodo(state.todoList, action.payload)
      };
    case todoActionTypes.REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo !== action.payload)
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
