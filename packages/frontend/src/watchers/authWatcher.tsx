import { takeLatest } from 'redux-saga/effects';
import { REGISTER_USER, LOGIN_USER, ENTRIES_REQUEST } from "../actions/constants";
import { registerUserSaga,loginUserSaga } from '../sagas/authSaga';
import {fetchEntriesSaga } from '../sagas/entriesSaga'

export function* watchUserRegistration () {
  yield takeLatest(REGISTER_USER, registerUserSaga)
}

export function* watchUserLogin () {
  yield takeLatest(LOGIN_USER, loginUserSaga)
}

export function* watchEntries () {
  yield takeLatest(ENTRIES_REQUEST, fetchEntriesSaga)
}
