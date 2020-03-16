import { createSelector } from "reselect";
const selectAuth = state => state.auth;

export const selectToggleSignUpForm = createSelector(
  [selectAuth],
  auth => auth.open
);

export const selectCurrentUser = createSelector(
  [selectAuth],
  auth => auth.currentUser
);

export const selectSignInAndSignUpError = createSelector(
  [selectAuth],
  auth => auth.error
);

export const selectDirectAfterLogAct = createSelector(
  [selectAuth],
  auth => auth.directAfterLogAct
);
