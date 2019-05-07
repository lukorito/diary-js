import { all } from 'redux-saga/effects';
import { watchUserRegistration, watchUserLogin } from '../watchers/authWatcher';

export default function* rootSaga() {
  yield all([
  //  sagas go here
    watchUserRegistration(),
    watchUserLogin(),
  ])
}
