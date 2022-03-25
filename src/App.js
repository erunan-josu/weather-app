import React, { useContext, useEffect } from 'react'
// Styles
import './styles/index.scss'
// Context
import DataContext from './context/DataContext'
import { MobileContextProvider } from './context/MobileContext'
// Components
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
// Functions
import { searchCelsiusData, searchFahrenheitData } from './getContextData'

function App() {
  const { cityName, setCityData, celsius } = useContext(DataContext)

  const getInitialData = async () => {
    if (celsius) {
      const data = await searchCelsiusData(cityName)
      setCityData(data)
    } else {
      const data = await searchFahrenheitData(cityName)
      setCityData(data)
    }
  }

  useEffect(() => {
    getInitialData()
  }, [cityName, celsius])
  return (
    <div className="App">
      <Header />
      <MobileContextProvider>
        <Main />
      </MobileContextProvider>
      <Footer />
    </div>
  )
}

export default App
