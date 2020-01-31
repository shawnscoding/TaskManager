import authActionTypes from "./auth.types";

const INITIAL_STATE = {
  open: false,
  currentUser: null,
  authenticated: false,
  error: null
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authActionTypes.TOGGLE_SIGN_UP_FORM:
      return {
        ...state,
        open: !state.open
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
