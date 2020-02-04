import asyncActionTypes from "./async.types";

const INITIAL_STATE = {
  loading: false,
  elementName: null,
  errorMessage: null,
  step: 0
};

const asyncReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case asyncActionTypes.SET_TODO_FORM_STEP_TO_ZERO:
      return {
        ...state,
        step: 0
      };
    case asyncActionTypes.INCREASE_TODO_FORM_STEP:
      return {
        ...state,
        step: state.step + 1
      };
    case asyncActionTypes.DECREASE_TODO_FORM_STEP:
      return {
        ...state,
        step: state.step - 1
      };
    case asyncActionTypes.ASYNC_ACTION_START:
      return {
        ...state,
        loading: true
      };
    case asyncActionTypes.ASYNC_ACTION_FINISH:
      return {
        ...state,
        loading: false
      };
    case asyncActionTypes.ASYNC_ACTION_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default asyncReducer;
