// import { createSelector } from 'reselect'
// import * as api from './api'

// ACTIONS TYPES
export const INCREASE_COUNTER = 'INCREASE_COUNTER'
export const GET_COUNTER = 'GET_COUNTER'

// Selectors
export const counterSelector = state => state.counter

// REDUCER
export const INITIAL_STATE = { counter: 0 }
export default function reducer(state = INITIAL_STATE, action = {}) {
  // const { payload } = action
  const { counter } = state

  // return state
  switch (action.type) {
    case INCREASE_COUNTER:
      return { ...state, counter: counter + 1 }
    default:
      return state
  }
}

// ACTION CREATORS
export const getCounter = () => ({
  type: GET_COUNTER,
})

export const increaseCounter = () => ({
  type: INCREASE_COUNTER,
})
