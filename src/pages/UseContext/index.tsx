import React from 'react'
import RootContext from './components/RootContext'
import ReduxContext from './components/ReduxContext'

const UseContext: React.FC = () => {
  return (
    <>
      <h1>UseContext</h1>
      <h3>简单来说Context的作用就是对它所包含的组件树提供全局共享数据的一种技术</h3>
      <RootContext />
      <ReduxContext />
    </>
  )
}

export default UseContext