import getCurrentIcon from './getIcon'
import { getDate } from './getDate'
import axios from 'axios'
import {
  geolocation_URL,
  celsius_forecast_URL,
  fahrenheit_forecast_URL,
} from './Api'

// Array that contains cities with same name
export const getCitiesData = (city) => {
  return axios.get(geolocation_URL(city))
}

// Celsius
export const getCelsiusForecast = (lat, lon) => {
  return axios.get(celsius_forecast_URL(lat, lon))
}

export const searchCelsiusByCoords = async (lat, lon, name) => {
  const forecast = await getCelsiusForecast(lat, lon)
  const timeZone = forecast.data['timezone']
  const current = forecast.data['current']
  const daily = forecast.data['daily']
  return generateCustomData(name, current, daily, timeZone)
}

export const searchCelsiusData = async (cityName) => {
  const cities = await getCitiesData(cityName)
  const city = cities.data[0]
  const { lat, lon, name } = city
  return searchCelsiusByCoords(lat, lon, name)
}

// Fahrenheit
export const getFahrenheitForecast = async (lat, lon) => {
  const data = await axios.get(fahrenheit_forecast_URL(lat, lon))

  return data
}

export const searchFahrenheitByCoords = async (lat, lon, name) => {
  const forecast = await getFahrenheitForecast(lat, lon)
  const current = forecast.data['current']
  const daily = forecast.data['daily']

  return generateCustomData(name, current, daily)
}

export const searchFahrenheitData = async (cityName) => {
  const cities = await getCitiesData(cityName)
  const city = cities.data[0]
  const { lat, lon, name } = city
  return searchFahrenheitByCoords(lat, lon, name)
}

// Generate custom data object
const generateCustomData = (name, obj1, obj2, timezone) => {
  let tempMin = 0
  let tempMax = 0
  const generateCustomDaily = (arr) => {
    const daily = arr.map((item, i) => {
      const { min, max } = item.temp
      const dayTemp = item.temp['day'].toFixed(1)
      if (i === 0) {
        tempMin = min
        tempMax = max
      }
      const { humidity, dt } = item
      const weather = item.weather[0]
      const date = getDate(dt)

      return { dayTemp, min, max, humidity, weather, ...date }
    })
    return daily
  }

  const generateCustomCurrent = () => {
    const { humidity, feels_like, temp, weather, wind_speed } = obj1

    const current = {
      name,
      timezone,
      humidity,
      feels_like,
      description: weather[0].description,
      icon_url: getCurrentIcon(weather[0].icon),
      temp: temp.toFixed(1),
      weather,
      wind_speed,
    }
    return current
  }

  const customDaily = generateCustomDaily(obj2)
  const customCurrent = generateCustomCurrent(obj1)

  return { current: { tempMin, tempMax, ...customCurrent }, daily: customDaily }
}
