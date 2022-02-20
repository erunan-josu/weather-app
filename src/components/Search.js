import React, { useEffect, useContext } from 'react'
// styles
import '../styles/search.scss'
// Context
import MobileContext from '../context/MobileContext'
// Components
import SearchBar from './SearchBar'
import Suggestions from './Suggestions'
// Utils
import { getCitiesData } from '../getContextData'

const Search = ({
  input,
  setInput,
  suggestions,
  setSuggestions,
  resetSearch,
}) => {
  const { mobileSearch } = useContext(MobileContext)

  const getSuggestions = async () => {
    if (input === '') return
    const cities = await getCitiesData(input)
    setSuggestions(cities.data)
  }

  useEffect(() => {
    getSuggestions()
  }, [input])

  return (
    <div
      className={mobileSearch ? 'mobile-search-container' : 'search-container'}
    >
      <div className="search-wrapper">
        <SearchBar
          input={input}
          setInput={setInput}
          setSuggestions={setSuggestions}
          resetSearch={resetSearch}
        />
        <Suggestions
          suggestions={suggestions}
          input={input}
          resetSearch={resetSearch}
        />
      </div>
    </div>
  )
}

export default Search
