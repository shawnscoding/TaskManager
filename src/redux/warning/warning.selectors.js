import { createSelector } from "reselect";

const selectWarningReducer = state => state.warning;

export const selectTimerWarning = createSelector(
  [selectWarningReducer],
  warning => warning.timerWarning
);
