import { useState, createContext } from 'react'
const MobileContext = createContext()

const MobileContextProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 440)
  const [width, setWidth] = useState(window.innerWidth)
  const handleResize = () => {
    setWidth(window.innerWidth)
    setIsMobile(window.innerWidth < 440)
  }
  const [mobileSearch, setMobileSearch] = useState(false)

  const data = {
    isMobile,
    setIsMobile,
    width,
    handleResize,
    mobileSearch,
    setMobileSearch,
  }

  return (
    <MobileContext.Provider value={data}>{children}</MobileContext.Provider>
  )
}

export { MobileContextProvider }
export default MobileContext
