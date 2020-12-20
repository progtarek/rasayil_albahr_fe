import {
  READ_MESSAGES_START, READ_MESSAGES_SUCCESS, READ_MESSAGES_FAIL
} from '../constants/actionTypes';
import { call, takeLatest, put } from 'redux-saga/effects';
import { Messages } from '../../agent';

function* readAllMessagesAsync() {
  try {
    const res = yield call(Messages.readAll);
    yield put({ type: READ_MESSAGES_SUCCESS, payload: res });

  } catch (e) {
    yield put({ type: READ_MESSAGES_FAIL, payload: e });
  }
}

function* readAllMessages() {
  yield takeLatest(READ_MESSAGES_START, readAllMessagesAsync);
}

export { readAllMessages };
