import React, {useState, useEffect, useRef} from 'react'

const Count1: React.FC = () => {
  const [count, setCount] = useState<number>(0)

  const handleCount = (): void=> {
    setTimeout(() => {
      // eslint-disable-next-line no-alert
      alert(`current count: ${count}`)
    }, 3000)
  }

  return (
    <>
      <div>当我们更新状态的时候, React会重新渲染组件, 每一次渲染都会拿到独立的count状态,<br />
          并重新渲染一个handleCount函数.  每一个handleCount里面都有它自己的count </div>
      <h1>闭包</h1>
      <p>current count: { count }</p>
      <button type='button' onClick={ (): void => setCount(count + 1) }>加</button>
      <button type='button' onClick={ (): void => handleCount() }>弹框显示</button>
    </>
  )
}

const Count2: React.FC = () => {
  const [count, setCount] = useState<number>(0)
  const preCountRef = useRef<number>(count)

  useEffect(() => {
    preCountRef.current = count
  }, [count])

  const handleCount = (): void=> {
    setTimeout(() => {
      // eslint-disable-next-line no-alert
      alert(`current count: ${preCountRef.current}`)
    }, 3000)
  }

  return (
    <>
      <div>因为变更 .current 属性不会引发组件重新渲染，根据这个特性可以获取状态的前一个值 </div>
      <h1>解决</h1>
      <p>pre count: { preCountRef.current }</p>
      <p>current count: { count }</p>
      <button type='button' onClick={ (): void => setCount(count + 1) }>加</button>
      <button type='button' onClick={ (): void => handleCount() }>弹框显示</button>
    </>
  )
}

const TextInput: React.FC = () => {
  const inputEl = useRef<HTMLInputElement>(null)

  const onFocusClick = (): void=> {
    if (inputEl && inputEl.current) {
      inputEl.current.focus()
    }
  }

  return (
    <>
      <h1>ref</h1>
      <div>操作Dom节点，类似 createRef</div>
      <input type='text' ref={ inputEl }/>
      <button type='button' onClick={ onFocusClick }>Focus the input</button>
    </>
  )
}

const UseRef: React.FC = () => {
  return (
    <>
      <h3>它不仅仅是用来管理 DOM ref的，它还相当于this , 可以存放任何变量，很好的解决闭包带来的不方便性。</h3>
      <Count1/>
      <br />
      <Count2/>
      <br/>
      <TextInput />
    </>
  )
}

export default UseRef
