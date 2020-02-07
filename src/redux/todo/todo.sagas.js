import { all, call, takeLatest, select, put } from "redux-saga/effects";
import todoActionTypes from "./todo.types";
import { firestore } from "./../../firebase/firebase.config";
import { selectCurrentUser } from "../auth/auth.selectors";
import {
  addTodoSuccess,
  clearTodoList,
  setTodoFromFirebase
} from "./todo.actions";
import { createNewTodo } from "./../../utils/helper";
import authActionTypes from "../auth/auth.types";
import {
  asyncActionStart,
  asyncActionFinish,
  increaseTodoFormStep
} from "./../async/async.actions";
import { getThisMonth } from "../../utils/helper";

export function* addTodoToFirebase({ payload }) {
  const { form, date } = payload;
  const user = yield select(selectCurrentUser);

  if (user) {
    try {
      yield put(asyncActionStart());
      const newTodo = createNewTodo(form, date, user.id);
      const docRef = yield firestore.collection("todo_list").add(newTodo);
      const snapShot = yield docRef.get();
      yield put(addTodoSuccess({ ...snapShot.data(), id: docRef.id }));
      yield put(asyncActionFinish());
      yield put(increaseTodoFormStep());
    } catch (err) {
      alert("Sorry,, something went wrong,, try again later");
      console.log(err);
    }
  }
}

export function* checkTodoInFirebase() {
  const user = yield select(selectCurrentUser);
  const month = getThisMonth();
  try {
    const listsRef = yield firestore.collection("todo_list");
    const query = yield listsRef
      .where("userId", "==", user.id)
      .where("month", "==", month)
      .orderBy("date");
    const snapShot = yield query.get();
    const todoList = [];
    for (let i = 0; i < snapShot.docs.length; i++) {
      let todo = { ...snapShot.docs[i].data(), id: snapShot.docs[i].id };
      todoList.push(todo);
    }
    yield put(setTodoFromFirebase(todoList));
  } catch (err) {
    alert("Sorry,, something went wrong,, try again later");
    console.log(err);
  }
}

export function* clearTodoListOnSignOut() {
  yield put(clearTodoList());
}

export function* onAddTodo() {
  yield takeLatest(todoActionTypes.ADD_TODO_START, addTodoToFirebase);
}

export function* onUserSignIn() {
  yield takeLatest(authActionTypes.SIGN_IN_SUCCESS, checkTodoInFirebase);
}

export function* onSignOutStart() {
  yield takeLatest(authActionTypes.SIGN_OUT_START, clearTodoListOnSignOut);
}

export function* todoSagas() {
  yield all([call(onAddTodo), call(onUserSignIn), call(onSignOutStart)]);
}
