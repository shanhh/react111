import React from 'react'

interface IAttributes {
  text: string;
  ref?: React.RefObject<HTMLElement>;
}
const Child: React.ForwardRefExoticComponent<IAttributes> = React.forwardRef((props, ref) => {
  const {text} = props

  const myRef = (ref as any) || React.createRef<HTMLElement>()

  return (
    <>
      <div ref={ myRef }>{text}</div>
    </>
  )
})

const ForwardRef: React.FC = () => {
  const buttonRef = React.createRef<HTMLElement>()

  const getChildrenRef = (): void => {
    console.log(buttonRef.current)
  }

  return (
    <>
      <h1>这里是forwardRef</h1>
      <div onClick={ getChildrenRef }>点击我看打印</div>
      <br/>
      <Child ref={ buttonRef } text='我是父传过来的'/>
    </>
  )
}

export default ForwardRef