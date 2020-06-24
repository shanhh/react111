import React from 'react'
import PropTypes from 'prop-types'
import Child1 from './components/Child1'
import Child2 from './components/Child2'
import {
  ThemeContext,
  themes,
  IThemes
} from './context'

interface IContext {
  text: string;
}
interface IState {
  theme: IThemes;
}

class Context extends React.Component<any, IState> {
  constructor (props) {
    super(props)
    this.state = {theme: themes.light}
  }

  public getChildContext (): IContext {
    return {text: '祖辈过来的值'}
  }

  public toggleTheme (): void{
    this.setState((state) => ({
      theme:
      state.theme === themes.dark
        ? themes.light
        : themes.dark
    }))
  }

  public render (): JSX.Element {
    return (
      <>
        <h1>context</h1>
        < Child1/>
        <ThemeContext.Provider value={ this.state.theme }>
          <Child2 changeTheme={ (): void => this.toggleTheme() } />
        </ThemeContext.Provider>
      </>
    )
  }
}

Context.childContextTypes = {text: PropTypes.string}

export default Context