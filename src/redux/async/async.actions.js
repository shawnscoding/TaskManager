import asyncActionTypes from "./async.types";

export const asyncActionStart = () => ({
  type: asyncActionTypes.ASYNC_ACTION_START
});

export const asyncActionFinish = () => ({
  type: asyncActionTypes.ASYNC_ACTION_FINISH
});

export const asyncActionError = () => ({
  type: asyncActionTypes.ASYNC_ACTION_ERROR
});

export const increaseTodoFormStep = () => ({
  type: asyncActionTypes.INCREASE_TODO_FORM_STEP
});

export const decreaseTodoFormStep = () => ({
  type: asyncActionTypes.DECREASE_TODO_FORM_STEP
});

export const setTodoFormStepToZero = () => ({
  type: asyncActionTypes.SET_TODO_FORM_STEP_TO_ZERO
});
