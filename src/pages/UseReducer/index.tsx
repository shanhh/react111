import React, {Fragment, useReducer} from 'react'

type StateType = {
  count: number;
  name?: string;
}

type ActionType = {
  type: 'reset' | 'decrement' | 'increment';
}

const initialState = { count: 0, name: '单浩辉' }

function reducer (state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case 'reset':
      return initialState
    case 'increment':
      return {... state, count: state.count + 1 }
    case 'decrement':
      return {... state, count: state.count - 1 }
    default:
      return state
  }
}

const Count: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Fragment >
      <div>Count: {state.count}</div>
      <div> Name: {state.name}</div>
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
      <h3>有没有想过你在某个组件里写了很多很多的useState </h3>
      <h3>useState中的state可以是个对象？ 如何写  </h3>
      <Count/>
    </>
  )
}

export default UseReducer