import React, { useContext } from 'react'
// Styles
import '../styles/header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMoon,
  faSun,
  faTemperatureHalf,
} from '@fortawesome/free-solid-svg-icons'
// Context
import ThemeContext from '../context/ThemeContext'
import DataContext from '../context/DataContext'

const Header = () => {
  const { dark, theme, toggleTheme } = useContext(ThemeContext)
  const { celsius, setCelsius, city } = useContext(DataContext)

  return (
    <header className={theme}>
      <h2>Weather7</h2>
      <div className="options-container">
        <FontAwesomeIcon
          icon={dark ? faMoon : faSun}
          className="theme-icon"
          onClick={toggleTheme}
        />
        <div
          className="temp-select"
          onClick={() => {
            setCelsius(!celsius)
          }}
        >
          <FontAwesomeIcon
            icon={faTemperatureHalf}
            className="theme-icon temp-icon"
          />
          <p>{celsius ? '°C' : '°F'}</p>
        </div>
      </div>
    </header>
  )
}

export default Header
