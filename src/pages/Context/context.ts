import React from 'react'

export interface IThemes {
  color: string;
  background: string;
}

export const themes = {
  light: {
    color: '#000000',
    background: '#eeeeee'
  },
  dark: {
    color: '#ffffff',
    background: '#222222'
  }
}

export const ThemeContext = React.createContext(
  themes.dark // 默认值
)