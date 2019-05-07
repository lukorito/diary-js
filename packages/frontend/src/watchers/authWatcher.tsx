import { takeLatest } from 'redux-saga/effects';
import { REGISTER_USER, LOGIN_USER } from "../actions/constants";
import { registerUserSaga,loginUserSaga } from '../sagas/authSaga';

export function* watchUserRegistration () {
  yield takeLatest(REGISTER_USER, registerUserSaga)
}

export function* watchUserLogin () {
  yield takeLatest(LOGIN_USER, loginUserSaga)
}
