import React, { useContext } from 'react'
// Context
import GlobalContext from '../context/DataContext'
import MobileContext from '../context/MobileContext'
import ThemeContext from '../context/ThemeContext'

const Suggestion = ({ data, resetSearch }) => {
  const { dark } = useContext(ThemeContext)
  const { setCityName } = useContext(GlobalContext)
  const { mobileSearch, setMobileSearch } = useContext(MobileContext)
  const { name, state, country } = data

  return (
    <div
      className={dark ? 'suggestion dark' : 'suggestion light'}
      onClick={() => {
        setCityName(name)
        resetSearch()
        mobileSearch && setMobileSearch(!mobileSearch)
      }}
    >
      <p>{`${name},  ${state !== undefined ? state : ''}  ${country}`}</p>
    </div>
  )
}

export default Suggestion
