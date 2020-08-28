import {
  LOGIN_SUCCESS,
  LOGIN,
  REGISTER,
  REGISTER_SUCCESS,
} from '../constants/actionTypes';
import { call, takeLatest, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { Auth } from '../../agent';

function* loginAsync(action) {
  try {
    const res = yield call(Auth.login, action.payload);
    console.log(res);
    yield put({ type: LOGIN_SUCCESS, payload: res });
    window.localStorage.setItem('token', res.token);
    window.localStorage.setItem('username', res.username);
    window.localStorage.setItem('profilePictureUrl', res.profilePictureUrl);
    yield put(push('/account'));
  } catch (e) {
    // TODO handle login errors
    console.log(e);
  }
}

function* registerAsync(action) {
  try {
    const res = yield call(Auth.register, action.payload);
    console.log(res);
    yield put({ type: REGISTER_SUCCESS, payload: res });
    yield put(push('/login'));
  } catch (e) {
    // TODO handle login errors
    console.log(e);
  }
}

function* login() {
  yield takeLatest(LOGIN, loginAsync);
}

function* register() {
  yield takeLatest(REGISTER, registerAsync);
}

export { login, register };
