import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import ThemeContext from '../context/ThemeContext'
// Styles
import '../styles/futureWeather.scss'

const FutureWeather = ({ data, i }) => {
  const { theme } = useContext(ThemeContext)
  const { unit } = useContext(DataContext)
  const { day, month, week_day, weather, dayTemp, min, max } = data

  return (
    <div className={`future-weather ${theme}`}>
      <div className="date">
        <h3>{i === 0 ? 'Today' : `${week_day} ${day} ${month}`}</h3>
        <p>{weather.description}</p>
      </div>
      <div className="weather">
        <h2>{dayTemp + unit()}</h2>
        <p>min: {min + unit()}</p>
        <p>max: {max + unit()}</p>
      </div>
    </div>
  )
}

export default FutureWeather
