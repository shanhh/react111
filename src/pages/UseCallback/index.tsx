import React, {useCallback, useState} from 'react'

interface IData {
  time: number;
}
const set = new Set()
// 子组件
const Show: React.FC<IData> = ({ time, children }) => {
  function changeTime (t: number, type: number): string {
    console.log('changeTime...', type)
    return new Date(t).toISOString()
  }

  const newTime = useCallback(() => {
    return changeTime(time, 2)
  }, [time])

  // 缓存的长度
  set.add(newTime)
  return (
    <div>
      <div>callback的长度： {set.size}</div>
      <p>Time is: { changeTime(time, 1) }</p>
      <p>Time2 is: { newTime() }</p>
      <p>Random is: { children }</p>
    </div>
  )
}

const Example: React.FC = () => {
  const [time, setTime] = useState<number>(0)
  const [random, setRandom] = useState<number>(0)

  return (
    <>

      <button type='button' onClick={ (): void => setTime(new Date().getTime()) }>获取当前时间</button>
      <button type='button' onClick={ (): void => setRandom(Math.random()) }>获取当前随机数</button>
      <Show time={ time }>{random}</Show>
    </>
  )
}

const UseCallback: React.FC = () => {
  return (
    <>
      <h1>useCallback</h1>
      <h3>useMemo和useCallback接收的参数都是一样，都是在其依赖项发生变化后才执行,都是返回缓存的值,区别在于useMemo返回的是函数运行的结果, useCallback返回的是函数。</h3>
      <h3>useMemo返回缓存的变量，useCallback返回缓存的函数</h3>
      <br/>
      <Example/>
    </>
  )
}

export default UseCallback