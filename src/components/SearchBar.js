import React, { useContext } from 'react'
// Context
import DataContext from '../context/DataContext'
import ThemeContext from '../context/ThemeContext'
import MobileContext from '../context/MobileContext'
// Styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({ input, setInput, setSuggestions, resetSearch }) => {
  const { theme, searchTheme } = useContext(ThemeContext)
  const { setCityName } = useContext(DataContext)
  const { isMobile, setMobileSearch, mobileSearch } = useContext(MobileContext)

  return (
    <div className="searchbar-container">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onClick={() => isMobile && setMobileSearch(true)}
        type="search"
        name="search"
        placeholder="City Name"
        className={searchTheme}
      />
      <button
        className={`${theme} search-button`}
        onClick={() => {
          setCityName(input)
          resetSearch()
        }}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>

      <button className={`${theme} ${!mobileSearch ? 'hide' : 'close-button'}`}>
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => {
            setMobileSearch(false)
            resetSearch()
          }}
        />
      </button>
    </div>
  )
}

export default SearchBar
