import React from 'react'
import { v4 as uuidv4 } from 'uuid'
// Components
import Suggestion from './Suggestion'

const Suggestions = ({ suggestions, input, resetSearch }) => {
  return (
    <div className="suggestion-container">
      {suggestions &&
        input.length > 0 &&
        suggestions.map((data) => {
          return (
            <Suggestion key={uuidv4()} data={data} resetSearch={resetSearch} />
          )
        })}
    </div>
  )
}

export default Suggestions
