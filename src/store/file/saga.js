import { takeLatest, take, call, put } from 'redux-saga/effects'
import * as actionTypes from './actionTypes'
import {
  fetchTestDataSuccess,
  fetchTestTabsSuccess,
  fetchTestData as fetchTestDataFirst
} from './actionCreators'
import {
  fetchTestData as fetchTestDataApi,
  fetchTestTabs as fetchTestTabsApi
} from '../../service'

function* fetchTestTabs() {
  try {
    const result = yield call(fetchTestTabsApi)
    const { code, data } = result
    if (code === 200) {
      yield put(fetchTestTabsSuccess(data))
      yield put(fetchTestDataFirst(data[0].id))
    }
  } catch (err) {
    console.log(err)
  }
}

function* fetchTestData(action) {
  try {
    const result = yield call(fetchTestDataApi, action.id)
    const { code, data } = result
    if (code === 200) {
      yield put(fetchTestDataSuccess(data))
      
    }
  } catch (err) {
    console.log(err)
  }
}

export default function* fileSaga() {
  yield takeLatest(actionTypes.FETCH_TEST_DATA, fetchTestData)
  yield takeLatest(actionTypes.FETCH_TEST_TABS, fetchTestTabs)
}
