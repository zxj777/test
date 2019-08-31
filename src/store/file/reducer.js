import * as actionTypes from './actionTypes'

const defaultState = {
  testTabs: [],
  testData: {}
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TEST_DATA_SUCCESS:
      const {id, data} = action.data
      return {
        ...state,
        testData: {
          ...state.testData,
          [id]: data
        }
      }
    case actionTypes.FETCH_TEST_TABS_SUCCESS:
      return {
        ...state,
        testTabs: action.data
      }
    default:
      return state
  }
}