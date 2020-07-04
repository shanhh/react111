import React, {useContext, useReducer} from 'react'
import {ColorContext, reducer, UPDATE_COLOR} from './reduxContext'

interface IShowProps {
  text: string;
}
const Show: React.FC<IShowProps> = (props) => {
  const { state, dispatch } = useContext(ColorContext)

  return (
    <div style={ { color: state.color } }>
      当前字体颜色为: {state.color}
      <div>我是{props.text}</div>
      <button type='button' onClick={ (): void=> dispatch && dispatch({type: UPDATE_COLOR, color: 'red'}) }>红色</button>
      <button type='button' onClick={ (): void=> dispatch && dispatch({type: UPDATE_COLOR, color: 'green'}) }>绿色</button>
    </div>
  )
}

const Example: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { color: '#000000' })

  return (
    <ColorContext.Provider value={ {state, dispatch} }>
      <div>
        <div>父组件</div>
        <button type='button' onClick={ (): void=> dispatch && dispatch({type: UPDATE_COLOR, color: 'blue'}) }>蓝色</button>
        <button type='button' onClick={ (): void=> dispatch && dispatch({type: UPDATE_COLOR, color: 'lightblue'}) }>轻绿色</button>
        <Show text='子组件'/>
      </div>
    </ColorContext.Provider>
  )
}

const ReduxContext: React.FC = () => {
  return (
    <>
      <h3>配合 useReducer 实现 Redux 的代替方案：</h3>
      <Example/>
    </>
  )
}

export default ReduxContext