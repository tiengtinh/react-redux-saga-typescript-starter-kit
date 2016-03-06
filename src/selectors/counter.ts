import { createSelector } from 'reselect'

export const counterSelector = (state) => state.counter

export const counterObjectSelector = createSelector(
  counterSelector, (counter) => {
    return {
      count: counter,
    }
  }
)
