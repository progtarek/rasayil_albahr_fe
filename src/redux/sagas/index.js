import { all } from 'redux-saga/effects';
import { login, loginWithGoogle } from './auth.saga';

export default function* rootSaga() {
  yield all([login(), loginWithGoogle()]);
}
