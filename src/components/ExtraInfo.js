import React from 'react'

const ExtraInfo = ({ name, data, unit }) => {
  return (
    <div className="extra-info">
      <p>{name}</p>
      <p>{data + unit}</p>
    </div>
  )
}

export default ExtraInfo
