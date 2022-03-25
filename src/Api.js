const base_url = 'https://api.openweathermap.org/'
const geo_url = 'geo/1.0/direct?q='
const forecast_url = 'data/2.5/onecall?'
const api_key = process.env.REACT_APP_API_KEY

export const geolocation_URL = (city) => {
  return `${base_url}${geo_url}${city}&limit=4&appid=${api_key}`
}

// celsius
export const celsius_forecast_URL = (lat, lon) => {
  return `${base_url}${forecast_url}lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&appid=${api_key}`
}

// fahrenheit
export const fahrenheit_forecast_URL = (lat, lon) => {
  return `${base_url}${forecast_url}lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=imperial&appid=${api_key}`
}
