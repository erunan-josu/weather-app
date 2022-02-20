import React, { useContext } from 'react'
import { icons } from '../svg/svg'

// styles
import '../styles/today.scss'
// Context
import ThemeContext from '../context/ThemeContext'
import DataContext from '../context/DataContext'
// Components
import ExtraInfo from './ExtraInfo'

const Today = () => {
  const { theme } = useContext(ThemeContext)
  const { cityData, unit } = useContext(DataContext)
  const current = cityData.current
  const {
    name,
    description,
    temp,
    tempMin,
    tempMax,
    humidity,
    feels_like,
    icon_url,
  } = current
  const icon = icons()

  return (
    <div className={`${theme} current-info-container`}>
      <div className={`${theme} today-container`}>
        <div className="today-info-top">
          <div className="main-info">
            <h2>{name}</h2>
            <h3>{description}</h3>
            <h1>{temp + unit()}</h1>
          </div>
          <div className="weather-icon">
            <img src={icon[`${icon_url}`]} alt="animated-icon" />
          </div>
        </div>
        <div className="today-info-bottom">
          <ExtraInfo name="Min" data={tempMin} unit={unit()} />
          <ExtraInfo name="Max" data={tempMax} unit={unit()} />
          <ExtraInfo name="Sensación" data={feels_like} unit={unit()} />
          <ExtraInfo name="Humedad" data={humidity} unit={' %'} />
        </div>
      </div>
    </div>
  )
}

export default Today
