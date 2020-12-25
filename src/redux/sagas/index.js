import { all } from 'redux-saga/effects';
import {
  login,
  register,
  updateUserStatus,
  uploadProfilePicture,
} from './auth.saga';
import { readAllMessages } from './messages.saga';

export default function* rootSaga() {
  yield all([
    login(),
    register(),
    readAllMessages(),
    updateUserStatus(),
    uploadProfilePicture(),
  ]);
}
