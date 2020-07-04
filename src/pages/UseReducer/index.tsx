import React, {Fragment, useReducer} from 'react'

type StateType = {
  count: number;
}

type ActionType = {
  type: 'reset' | 'decrement' | 'increment';
}

const initialState = { count: 0 }

function reducer (state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case 'reset':
      return initialState
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      return state
  }
}

const Count: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <Fragment >
       Count: {state.count}
      <button type='button' onClick={ (): void => dispatch({ type: 'reset' }) }>Reset</button>
      <button type='button' onClick={ (): void => dispatch({ type: 'increment' }) }>+</button>
      <button type='button' onClick={ (): void => dispatch({ type: 'decrement' }) }>-</button>
    </Fragment>
  )
}

const UseReducer: React.FC = () => {
  return (
    <>
      <h1>useReducer</h1>
      <h3>有没有想过你在某个组件里写了很多很多的useState</h3>
      <Count/>
    </>
  )
}

export default UseReducer