import { all } from 'redux-saga/effects';
import { login, register } from './auth.saga';

export default function* rootSaga() {
  yield all([login(), register()]);
}
