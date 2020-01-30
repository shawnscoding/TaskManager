import authActionTypes from "./auth.types";

const INITIAL_STATE = {
  open: false
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authActionTypes.TOGGLE_SIGN_UP_FORM:
      return {
        ...state,
        open: !state.open
      };
    default:
      return state;
  }
};

export default authReducer;
