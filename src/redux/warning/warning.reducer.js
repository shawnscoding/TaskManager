import warningActionTypes from "./warning.types";

const INITIAL_STATE = {
  timerWarning: false
};

const warningReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case warningActionTypes.TOGGLE_TIMER_WARNING:
      return {
        ...state,
        timerWarning: !state.timerWarning
      };

    default:
      return state;
  }
};

export default warningReducer;
