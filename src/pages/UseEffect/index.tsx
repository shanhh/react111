import React, { useState, useEffect} from 'react'

let count = 1
const UseEffect: React.FC = () => {
  const [name, setName] = useState<string>('Jack')

  // 1.每当状态改变时，都要重新执行 useEffect 的逻辑
  useEffect(() => {
    count += 1
  })

  // 2.即使每次状态都改变，也只执行第一次 useEffect 的逻辑：
  useEffect(() => {
    console.log(count)
  }, [])

  // 3.根据某个状态是否变化来决定要不要重新执行
  useEffect(() => {
    console.log(name)
  }, [name])

  // 4.组件卸载时处理一些内存问题，比如清除定时器、清除事件监听：
  useEffect(() => {
    const handler = (): void=> {
      document.title = Math.random().toString()
    }

    window.addEventListener('resize', handler)

    return (): void => {
      window.removeEventListener('resize', handler)
    }
  }, [])

  return (
    <>
      <h3>你可以把useEffect 看做componentDidMount，componentDidUpdate和componentWillUnmount这三个函数的组合</h3>
      <h1>useEffect的使用</h1>
      <div>count: {count}</div>
      <br/>
      <div>name: {name}</div>
      <br/>
      <div onClick={ (): void => setName('Jack') }>Jack</div>
      <br/>
      <div onClick={ (): void => setName('Mark') }>Mark</div>
    </>
  )
}

export default UseEffect