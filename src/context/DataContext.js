import { useState, createContext } from 'react'

const DataContext = createContext()

const initialCity = 'Madrid'

const DataContextProvider = ({ children }) => {
  // City
  const [cityName, setCityName] = useState(initialCity)

  // CityData
  const [cityData, setCityData] = useState({})

  // Celsius
  const [celsius, setCelsius] = useState(true)
  const unit = () => (celsius ? ' °C' : ' °F')

  //Context Data
  const data = {
    cityName,
    setCityName,
    cityData,
    setCityData,
    celsius,
    setCelsius,
    unit,
  }

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>
}

export { DataContextProvider }
export default DataContext
