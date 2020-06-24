import React from 'react'
import {ThemeContext} from '../../context'

class Title extends React.Component {

  public componentDidMount (): void {
    console.log(this.props, 11111)
  }

  public render (): JSX.Element {
    return (
      <div>
        <ThemeContext.Consumer>
          {(context): JSX.Element => (
            <h1 style={ {background: context.background, color: context.color} }>
              {this.props.children}
            </h1>
          )}
        </ThemeContext.Consumer>
      </div>
    )
  }
}

export default Title