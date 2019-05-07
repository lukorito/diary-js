import { put, call } from 'redux-saga/effects';
import * as constants from '../actions/constants';
import { registerUserService, loginUserService } from '../services/authentication';
import { setUser } from "../utils/authHelper";


export function* registerUserSaga(user) {
  try {
    yield put({type: constants.REGISTER_USER_INIT});
    const newUser = yield call(registerUserService, user.user);
    yield put({type: constants.REGISTER_USER_SUCCESS, newUser})
  } catch (error) {
    yield put({type: constants.REGISTER_USER_ERROR, error})
  }
}

export function* loginUserSaga(user){
  try{
    yield put({type: constants.LOGIN_USER_INIT});
    const newUser = yield call(loginUserService, user.user);
    yield put({type: constants.LOGIN_USER_SUCCESS, newUser});
    yield call(setUser, newUser.data.data)
  } catch (error) {
    yield put({type: constants.LOGIN_USER_ERROR, error})
  }
}
