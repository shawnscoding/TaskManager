import { createSelector } from "reselect";
const selectAuth = state => state.auth;

export const selectToggleSignUpForm = createSelector(
  [selectAuth],
  auth => auth.open
);
