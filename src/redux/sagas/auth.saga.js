import {
  LOGIN_SUCCESS,
  LOGIN,
  REGISTER,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  REGISTER_FAIL,
} from '../constants/actionTypes';
import { call, takeLatest, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { Auth } from '../../agent';

function* loginAsync(action) {
  try {
    const res = yield call(Auth.login, action.payload);
    yield put({ type: LOGIN_SUCCESS, payload: res });
    window.localStorage.setItem('token', res.token);
    window.localStorage.setItem('username', res.username);
    window.localStorage.setItem('profilePictureUrl', res.profilePictureUrl);
    yield put(push('/account'));
  } catch (e) {
    yield put({ type: LOGIN_FAIL, payload: e });
  }
}

function* registerAsync(action) {
  try {
    const res = yield call(Auth.register, action.payload);
    yield put({ type: REGISTER_SUCCESS, payload: res });
    window.localStorage.setItem('token', res.token);
    window.localStorage.setItem('username', res.username);
    yield put(push('/account'));
  } catch (e) {
    yield put({ type: REGISTER_FAIL, payload: e });
  }
}

function* login() {
  yield takeLatest(LOGIN, loginAsync);
}

function* register() {
  yield takeLatest(REGISTER, registerAsync);
}

export { login, register };
