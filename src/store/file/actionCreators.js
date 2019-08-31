import * as actionTypes from './actionTypes'

export function fetchTestData(id) {
  return {
    type: actionTypes.FETCH_TEST_DATA,
    id
  }
}

export function fetchTestDataSuccess(data) {
  return {
    type: actionTypes.FETCH_TEST_DATA_SUCCESS,
    data
  }
}

export function fetchTestDataFail() {
  return {
    type: actionTypes.FETCH_TEST_DATA_FAIL
  }
}

export function fetchTestTabs() {
  return {
    type: actionTypes.FETCH_TEST_TABS
  }
}

export function fetchTestTabsSuccess(data) {
  return {
    type: actionTypes.FETCH_TEST_TABS_SUCCESS,
    data
  }
}

export function fetchTestTabsFail() {
  return {
    type: actionTypes.FETCH_TEST_TABS_FAIL
  }
}