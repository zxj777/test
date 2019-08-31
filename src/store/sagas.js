import file from './file/saga'
import { all, fork } from 'redux-saga/effects'
export default function* rootSaga() {
  yield all([fork(file)])
}
