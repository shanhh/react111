import React from 'react'

class Ref extends React.Component {

  public methodRef: HTMLDivElement

  public objRef = React.createRef<HTMLDivElement>() // {current: null}

  public changeColor (): void {
    console.log(this.refs)
    const myDiv = this.refs.myRef as HTMLElement

    myDiv.style.color = 'red'
    console.log(this.refs.myRef)
  }

  public changeContent (): void {
    this.objRef.current!.textContent = 'obj ref createRef'
    console.log(this.objRef)
  }

  public showRef (): void {
    console.log(this.methodRef)
  }

  public render (): JSX.Element {
    return (
      <>
        <h1>ref</h1>
        <div ref='myRef' onClick={ (): void => this.changeColor() }>我是字符串ref 点击我变个色1</div>
        <br/>
        <div ref={ (ele): HTMLDivElement | null => (this.methodRef = ele!) } onClick={ (): void => this.showRef() }>我是方法的ref</div>
        <br/>
        <div ref={ this.objRef } onClick={ (): void => this.changeContent() }>我是createRef的ref</div>
      </>
    )
  }
}
export default Ref
