import { put, call } from 'redux-saga/effects';
import * as constants from '../actions/constants';
import { entriesRequest } from "../services/authentication";


export function* fetchEntriesSaga(user) {
  try {
    yield put({type: constants.ENTRIES_REQUEST_INIT});
    const entries = yield call(entriesRequest, user);
    yield put({type: constants.ENTRIES_REQUEST_SUCCESS, entries})
  } catch (error) {
    yield put({type: constants.ENTRIES_REQUEST_ERROR, error})
  }
}
