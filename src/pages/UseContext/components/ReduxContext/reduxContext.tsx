import React from 'react'

export const UPDATE_COLOR = 'UPDATE_COLOR'

export type StateType = {
  color: string;
}

export type ActionType = {
  type: string;
  color: string;
}

export type MixStateAndDispatch = {
  state: StateType;
  dispatch?: React.Dispatch<ActionType>;
}

export const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case UPDATE_COLOR:
      return { color: action.color }
    default:
      return state
  }
}

export const ColorContext = React.createContext<MixStateAndDispatch>({state: { color: 'black' }})
