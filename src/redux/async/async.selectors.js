import { createSelector } from "reselect";

const selectAsync = state => state.async;

export const selectLoading = createSelector(
  [selectAsync],
  async => async.loading
);

export const selectStep = createSelector([selectAsync], async => async.step);

export const selectTodoFormOpen = createSelector(
  [selectAsync],
  async => async.todoFormOpen
);
