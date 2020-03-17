import { takeLatest, put, all, call } from "redux-saga/effects";
import authActionTypes from "./auth.types";
import { auth } from "../../firebase/firebase.config";
import {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  signOutFailure,
  signOutSuccess,
  directUserAfterLogAct
} from "./auth.actions";
import {
  createUserProfileDocument,
  getCurrentUser
} from "./../../firebase/firebase.utils";
import { asyncActionStart, asyncActionFinish } from "./../async/async.actions";

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const snapShot = yield userRef.get();
    yield put(signInSuccess({ id: snapShot.id, ...snapShot.data() }));

    return;
  } catch (err) {
    yield put(signInFailure(err));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (err) {
    put(signInFailure(err));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
  alert("You have signd Up successfully!");
  yield put(asyncActionFinish());

  yield put(directUserAfterLogAct(true));
}

export function* signUp({ payload: { displayName, email, password } }) {
  try {
    yield put(asyncActionStart());

    const { user } = yield auth.createUserWithEmailAndPassword(email, password);

    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (err) {
    alert(err.message);
    yield put(signUpFailure(err));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    yield put(asyncActionStart());

    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
    yield put(asyncActionFinish());
    yield put(directUserAfterLogAct(true));
  } catch (err) {
    alert(err.message);
    yield put(asyncActionFinish());

    yield put(signInFailure(err));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (err) {
    alert(err.message);
    yield put(signOutFailure(err));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(authActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignUpStart() {
  yield takeLatest(authActionTypes.SIGN_UP_START, signUp);
}

export function* onSignOutStart() {
  yield takeLatest(authActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignInStart() {
  yield takeLatest(authActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpSuccess() {
  yield takeLatest(authActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* authSagas() {
  yield all([
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart)
  ]);
}
