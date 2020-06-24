import React, { useState } from 'react'

interface IPerson {
  name: string;
  age?: number;
}
const UseState: React.FC = () => {
  const [count, setCount] = useState<number>(0)
  const [person, setPerson] = useState<IPerson>({name: 'shan', age: 28})

  return (
    <>
      <h3>可以让函数式组件拥有状态管理特性，类似class组件中的this.state 和this.setState，但是更加简洁，不用频繁的使用this </h3>
      <h1>useState的使用</h1>
      <div onClick={ (): void => setCount(count + 1) }>{count}</div>
      <br/>
      <div>{person.name}</div>
      <div>{person.age}</div>
      <div onClick={ (): void=> setPerson({name: 'Nobel', age: count}) }>点击我试试</div>
    </>
  )
}

export default UseState