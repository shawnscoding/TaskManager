import todoActionTypes from "./todo.types";
import { checkIfTodoExist, isTodoThisWeek } from "./todo.utils";

const INITIAL_STATE = {
  monthlyTodo: [],
  weeklyTodo: []
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case todoActionTypes.ADD_TODO_SUCCESS:
      return {
        ...state,
        monthlyTodo: [...state.monthlyTodo, action.payload]
      };
    case todoActionTypes.GET_WEEKLY_TODO_SUCCESS:
      return {
        ...state,
        weeklyTodo: [...action.payload]
      };
    case todoActionTypes.REMOVE_TODO:
      return {
        ...state,
        monthlyTodo: state.monthlyTodo.filter(todo => todo !== action.payload)
      };
    case todoActionTypes.SET_TODO_FROM_FIREBASE:
      return {
        ...state,
        monthlyTodo: checkIfTodoExist(action.payload)
      };
    case todoActionTypes.CLEAR_TODO_LIST:
      return {
        ...state,
        monthlyTodo: []
      };
    case todoActionTypes.SET_ANOTHER_TODO_SUCCESS:
      return {
        ...state,
        monthlyTodo: checkIfTodoExist(action.payload)
      };
    default:
      return state;
  }
};

export default todoReducer;
