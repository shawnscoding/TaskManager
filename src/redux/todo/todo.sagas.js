import { all, call, takeLatest, select, put } from "redux-saga/effects";
import todoActionTypes from "./todo.types";
import { firestore } from "./../../firebase/firebase.config";
import { selectCurrentUser } from "../auth/auth.selectors";
import {
  addTodoSuccess,
  clearTodoList,
  setTodoFromFirebase,
  setAnotherTodoSuccess,
  getWeeklyTodoSuccess
} from "./todo.actions";
import { createNewTodo } from "./todo.utils";
import authActionTypes from "../auth/auth.types";
import {
  asyncActionStart,
  asyncActionFinish,
  increaseTodoFormStep
} from "./../async/async.actions";
import { getThisMonth, getThisYear } from "../../utils/helper";

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

      console.log(snapShot.data().week, "week in saga");
      const test = { payload: snapShot.data().week };
      console.log(test);
      yield getWeeklyTodoFromFb(test);

      yield put(asyncActionFinish());
      yield put(increaseTodoFormStep());
    } catch (err) {
      alert("Sorry,, something went wrong,, try again later");
      console.log(err);
    }
  }
}

export function* getWeeklyTodoFromFb({ payload }) {
  yield put(asyncActionStart());

  const user = yield select(selectCurrentUser);
  const year = getThisYear();
  console.log(payload, "week in saga");

  try {
    const listsRef = yield firestore.collection("todo_list");
    const query = yield listsRef
      .where("userId", "==", user.id)
      .where("year", "==", year)
      .where("week", "==", payload)
      .orderBy("date");
    const snapShot = yield query.get();
    const todoList = [];
    if (snapShot.docs.length === 0) {
      todoList.push({ date: "" });
    } else {
      for (let i = 0; i < snapShot.docs.length; i++) {
        let todo = { ...snapShot.docs[i].data(), id: snapShot.docs[i].id };
        todoList.push(todo);
      }
    }

    yield put(getWeeklyTodoSuccess(todoList));
    yield put(asyncActionFinish());
  } catch (err) {
    alert("Sorry,, something went wrong,, try again later");
    console.log(err);
  }
}

export function* checkTodoInFirebase(month) {
  const user = yield select(selectCurrentUser);
  try {
    console.log("runned!");
    const listsRef = yield firestore.collection("todo_list");
    const query = yield listsRef
      .where("userId", "==", user.id)
      .where("month", "==", month)
      .orderBy("date");
    const snapShot = yield query.get();
    if (snapShot.docs.length === 0) return;
    const todoList = [];
    for (let i = 0; i < snapShot.docs.length; i++) {
      let todo = { ...snapShot.docs[i].data(), id: snapShot.docs[i].id };
      todoList.push(todo);
    }
    return todoList;
  } catch (err) {
    alert("Sorry,, something went wrong,, try again later");
    console.log(err);
  }
}

export function* checkMonthlyTodo({ payload }) {
  console.log("run");
  yield put(asyncActionStart());

  const todoList = yield checkTodoInFirebase(payload);
  yield put(setAnotherTodoSuccess(todoList));
  yield put(asyncActionFinish());
}

export function* checkThisMonthTodoInFb() {
  yield put(asyncActionStart());

  const month = getThisMonth();
  const todoList = yield checkTodoInFirebase(month);
  yield put(setTodoFromFirebase(todoList));
  yield put(asyncActionFinish());
}

export function* clearTodoListOnSignOut() {
  yield put(clearTodoList());
}

// listeners

export function* onAddTodo() {
  yield takeLatest(todoActionTypes.ADD_TODO_START, addTodoToFirebase);
}

export function* onUserSignIn() {
  yield takeLatest(authActionTypes.SIGN_IN_SUCCESS, checkThisMonthTodoInFb);
}

export function* onSignOutStart() {
  yield takeLatest(authActionTypes.SIGN_OUT_START, clearTodoListOnSignOut);
}

export function* onGetWeeklyTodo() {
  yield takeLatest(todoActionTypes.GET_WEEKLY_TODO_START, getWeeklyTodoFromFb);
}

export function* onSetAnotherTodo() {
  yield takeLatest(todoActionTypes.SET_ANOTHER_TODO_START, checkMonthlyTodo);
}

// compose

export function* todoSagas() {
  yield all([
    call(onAddTodo),
    call(onGetWeeklyTodo),
    call(onUserSignIn),
    call(onSetAnotherTodo),
    call(onSignOutStart)
  ]);
}
