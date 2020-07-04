import React, {useContext} from 'react'

const ColorContext = React.createContext<string>('')

const RootContext: React.FC = () => {
  return (
    <>
      <h3>根组件注册，所有子组件都可拿到注册的值</h3>
      <ColorContext.Provider value='#1890ff'>
        <Father />
      </ColorContext.Provider>
    </>
  )
}

const Father: React.FC = () => {
  return (
    <Child />
  )
}

const Child: React.FC = () => {
  const color = useContext(ColorContext)

  return (
    <div style={ { backgroundColor: color } }>Background color is: { color }</div>
  )
}

export default RootContext