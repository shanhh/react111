import React from 'react'
import Title from '../Title'

interface IChild2Props {
  changeTheme: () => void;
}

class Child2 extends React.Component<IChild2Props, any> {

  public componentDidMount (): void {
    console.log(this.props, 11111)
  }

  public render (): JSX.Element {
    return (
      <div onClick={ (): void=> this.props.changeTheme() }>
        <Title >Child2 点击我试试</Title>
      </div>
    )
  }
}

export default Child2