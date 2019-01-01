// import { createSelector } from 'reselect'
import * as api from './api'

// ACTIONS TYPES
export const GET_DATES = 'GET_DATES'

// Selectors
export const complexityDataSelector = state => state.complexityData

// REDUCER
export const INITIAL_STATE = { dates: [] }

export default function reducer(state = INITIAL_STATE, action = {}) {
  // const { payload } = action

  // return state
  switch (action.type) {
    // case GET_DATES:
    //   return { ...state, counter: counter + 1 }
    default:
      return state
  }
}

// ACTION CREATORS
export const getDates = () => ({
  type: GET_DATES,
})
