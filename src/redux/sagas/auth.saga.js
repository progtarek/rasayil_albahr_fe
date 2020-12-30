import {
  LOGIN_SUCCESS,
  LOGIN,
  REGISTER,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  REGISTER_FAIL,
  UPLOAD_PROFILE_PICTURE,
  UPLOAD_PROFILE_PICTURE_SUCCESS,
  SET_STATUS_SUCCESS,
  SET_STATUS,
} from '../constants/actionTypes';
import { call, takeLatest, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { Auth, Media, Users } from '../../agent';

function* loginAsync(action) {
  try {
    const res = yield call(Auth.login, action.payload);
    yield put({ type: LOGIN_SUCCESS, payload: res });
    window.localStorage.setItem('token', res.token);
    window.localStorage.setItem('username', res.username);
    if (res.profilePictureUrl)
      window.localStorage.setItem('profilePictureUrl', res.profilePictureUrl);
    yield put(push('/messages'));
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
    yield put(push('/messages'));
  } catch (e) {
    yield put({ type: REGISTER_FAIL, payload: e });
  }
}

function* uploadProfilePictureAsync(action) {
  try {
    const profilePictureUrl = yield call(Media.upload, action.payload);
    yield Users.updateProfilePicture({ profilePictureUrl });
    yield put({
      type: UPLOAD_PROFILE_PICTURE_SUCCESS,
      payload: { profilePictureUrl },
    });
    window.localStorage.setItem('profilePictureUrl', profilePictureUrl);
  } catch (error) {
    console.log('error', error);
  }
}

function* updateUserStatusAsync(action) {
  try {
    const payload = yield call(Users.updateUserStatus, action.payload);
    yield put({
      type: SET_STATUS_SUCCESS,
      payload,
    });
    window.localStorage.setItem('status', payload.status);
  } catch (error) {
    console.log('error', error);
  }
}

function* login() {
  yield takeLatest(LOGIN, loginAsync);
}

function* register() {
  yield takeLatest(REGISTER, registerAsync);
}

function* uploadProfilePicture() {
  yield takeLatest(UPLOAD_PROFILE_PICTURE, uploadProfilePictureAsync);
}

function* updateUserStatus() {
  yield takeLatest(SET_STATUS, updateUserStatusAsync);
}

export { login, register, uploadProfilePicture, updateUserStatus };
