import React, { useState, createContext } from 'react'

const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
  const [dark, setDark] = useState(false)
  const toggleTheme = () => {
    dark ? setDark(false) : setDark(!dark)
  }
  const theme = dark ? 'dark' : 'light'
  const searchTheme = dark ? 'dark-bar' : 'light-bar'

  const data = { dark, toggleTheme, theme, searchTheme }
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

export { ThemeContextProvider }
export default ThemeContext
