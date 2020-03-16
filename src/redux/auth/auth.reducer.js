import authActionTypes from "./auth.types";

const INITIAL_STATE = {
  open: false,
  currentUser: null,
  error: null,
  directAfterLogAct: false
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authActionTypes.TOGGLE_SIGN_UP_FORM:
      return {
        ...state,
        open: !state.open
      };
    case authActionTypes.DIRECT_USER_AFTER_LOG_ACT:
      return {
        ...state,
        directAfterLogAct: action.payload
      };
    case authActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case authActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case authActionTypes.SIGN_IN_FAILURE:
    case authActionTypes.SIGN_UP_FAILURE:
    case authActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
