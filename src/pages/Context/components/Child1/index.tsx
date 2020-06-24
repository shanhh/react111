import React from 'react'
import PropTypes from 'prop-types'

class Child1 extends React.PureComponent {

  public render (): JSX.Element {
    return (
      <>
        <div>我是Child1 这是老的context不建议使用 这是祖辈的context传过来的值为:{this.context.text}</div>
      </>
    )
  }
}

Child1.contextTypes = {text: PropTypes.string}

export default Child1