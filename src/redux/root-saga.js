import { all, call } from "redux-saga/effects";
import { authSagas } from "./auth/auth.sagas";
import { todoSagas } from "./todo/todo.sagas";

export default function* rootSage() {
  yield all([call(authSagas), call(todoSagas)]);
}
