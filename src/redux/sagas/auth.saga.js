import { LOGIN_SUCCESS } from '../constants/actionTypes';
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
    yield put(push('/account'));
  } catch (e) {
    // TODO handle login errors
    console.log(e);
  }
}

function* login() {
  yield takeLatest('LOGIN', loginAsync);
}

export { login };