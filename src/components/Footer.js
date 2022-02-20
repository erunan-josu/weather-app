import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
// styles
import '../styles/footer.scss'
// Context
import ThemeContext from '../context/ThemeContext'

const Footer = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <footer className={theme}>
      <p> &copy; Josu Hernandez</p>
      <a href="https://github.com/erunan-josu">
        <FontAwesomeIcon icon={faGithub} className="icon" />
        erunan-josu
      </a>
      <a href="https://www.instagram.com/erunan.josu/">
        <FontAwesomeIcon icon={faInstagram} className="icon" />
        erunan.josu
      </a>
    </footer>
  )
}

export default Footer
