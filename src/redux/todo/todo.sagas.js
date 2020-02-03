import { all, call, takeLatest, select, put } from "redux-saga/effects";
import todoActionTypes from "./todo.types";
import { firestore } from "./../../firebase/firebase.config";
import { selectCurrentUser } from "../auth/auth.selectors";
import {
  addTodoSuccess,
  clearTodoList,
  setTodoFromFirebase,
  filterTodoForThisMonth
} from "./todo.actions";
import { createNewTodo, pickUpYearMonthAndDate } from "./../../utils/helper";
import authActionTypes from "../auth/auth.types";

export function* addTodoToFirebase({ payload }) {
  const { form, date } = payload;
  const { year, month, newDate, time } = pickUpYearMonthAndDate(date);
  const user = yield select(selectCurrentUser);

  if (user) {
    try {
      const newTodo = createNewTodo(
        form,
        year,
        month,
        date,
        newDate,
        user.id,
        time
      );
      yield firestore.collection("todo_list").add(newTodo);

      yield put(addTodoSuccess(newTodo));
    } catch (err) {
      alert("Sorry,, something went wrong,, try again later");
      console.log(err);
    }
  }
}

export function* checkTodoInFirebase() {
  const user = yield select(selectCurrentUser);
  console.log("fired");
  try {
    const listsRef = yield firestore.collection("todo_list");
    const query = yield listsRef
      .where("userId", "==", user.id)
      .where("year", "==", "2020");
    const snapShot = yield query.get();
    const todoList = [];
    for (let i = 0; i < snapShot.docs.length; i++) {
      let todo = { ...snapShot.docs[i].data(), id: snapShot.docs[i].id };
      todoList.push(todo);
    }
    yield put(setTodoFromFirebase(todoList));
    yield put(filterTodoForThisMonth());
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
