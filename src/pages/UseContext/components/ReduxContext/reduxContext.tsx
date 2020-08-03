import React from 'react'

export const UPDATE_COLOR = 'UPDATE_COLOR'

export type StateType = {
  color: string;
}

export type ActionType = {
  type: string;
  payload: Promise<any> | string;
}

export type MixStateAndDispatch = {
  state: StateType;
  dispatch?: React.Dispatch<ActionType>;
}
const isPromise = (obj: any): boolean => {
  return (
    !!obj &&
    (typeof obj === 'object' || typeof obj === 'function') &&
    typeof obj.then === 'function'
  )
}

export const wrapperDispatch = (dispatch: React.Dispatch<ActionType>): React.Dispatch<ActionType> => {
  return function (action): void {
    if (isPromise(action.payload)) {
      (action.payload as Promise<any>).then(v => {
        dispatch({ type: action.type, payload: v })
      })
    } else {
      dispatch(action)
    }
  }
}

export const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case UPDATE_COLOR:
      return {... state, color: action.payload as string}
    default:
      return state
  }
}

export const ColorContext = React.createContext<MixStateAndDispatch>({state: { color: 'black' }})
