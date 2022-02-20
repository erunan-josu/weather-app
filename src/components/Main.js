import React, { useContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
// Styles
import '../styles/main.scss'
// Context
import DataContext from '../context/DataContext'
import MobileContext from '../context/MobileContext'
// Components
import Search from './Search'
import Today from './Today'
import FutureWeather from './FutureWeather'
import Loader from './Loader'

const Main = () => {
  const { cityData } = useContext(DataContext)
  const { handleResize, mobileSearch } = useContext(MobileContext)
  const { daily, current } = cityData
  const [input, setInput] = useState('')
  const [suggestions, setSuggestions] = useState([])

  const resetSearch = () => {
    setInput('')
    setSuggestions([])
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })
  return (
    <div className={`main-content-container ${mobileSearch && 'main-search'}`}>
      <div className="content-wrapper">
        <div className="content-top">
          <Search
            input={input}
            setInput={setInput}
            suggestions={suggestions}
            setSuggestions={setSuggestions}
            resetSearch={resetSearch}
          />

          {!mobileSearch && <>{current ? <Today /> : <Loader />}</>}
        </div>

        {!mobileSearch && (
          <div className="content-bottom">
            {daily &&
              daily.map((data, i) => (
                <FutureWeather data={data} key={uuidv4()} i={i} />
              ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Main
