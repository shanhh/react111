import React, {useState, useMemo} from 'react'

interface IProps {
  time: number;
}

// 子组件
const Show: React.FC<IProps> = ({ time, children }) => {
  function changeTime (t: number, type: number): string {
    console.log('changeTime...', type)
    return new Date(t).toISOString()
  }
  // useMemo的函数会在渲染期间执行
  const newTime: string = useMemo(() => {
    return changeTime(time, 2)
  }, [time])

  return (
    <div>
      <p>Time is: { changeTime(time, 1) }</p>
      <p>Time2 is: { newTime }</p>
      <p>Random is: { children }</p>
    </div>
  )
}

const Example: React.FC = () => {
  const [time, setTime] = useState<number>(0)
  const [random, setRandom] = useState<number>(0)

  return (
    <>
      <h2>避免重复执行没必要的方法</h2>
      <h3>在某些情况下不希望组件对所有props做浅比较，只想实现局部Pure功能，即只想对特定的props做比较，并决定是否局部更新</h3>
      <button type='button' onClick={ (): void => setTime(new Date().getTime()) }>获取当前时间</button>
      <button type='button' onClick={ (): void => setRandom(Math.random()) }>获取当前随机数</button>
      <Show time={ time }>{random}</Show>
    </>
  )
}

const UseMemo: React.FC = () => {
  return (
    <>
      <h1>useMemo</h1>
      <Example/>
    </>
  )
}

export default UseMemo