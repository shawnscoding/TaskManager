import todoActionTypes from "./todo.types";
import { checkIfTodoExist, isTodoThisWeek } from "./todo.utils";

const INITIAL_STATE = {
  monthlyTodo: [],
  weeklyTodo: [],
  currentTask: null,
  timer: false,
  working: false,
  formerTodo: []
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case todoActionTypes.OPEN_TIMER:
      return {
        ...state,
        timer: true
      };
    case todoActionTypes.CLOSE_TIMER:
      return {
        ...state,
        timer: false
      };
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
    case todoActionTypes.SET_TODO_ON_TIMTER:
      return {
        ...state,
        currentTask: {
          timeToComplete: action.payload.timeToComplete,
          task: action.payload
        },
        working: false
      };

    case todoActionTypes.STARTED_WORKING:
      return {
        ...state,
        working: true
      };
    case todoActionTypes.STORE_UPDATED_TODO_FINISH:
      return {
        ...state,

        working: false
      };

    case todoActionTypes.FETCH_FORMER_TODO_FINISH:
      return {
        ...state,
        formerTodo: [...action.payload]
      };
    default:
      return state;
  }
};

export default todoReducer;
