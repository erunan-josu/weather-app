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
      <a target="blank" href="https://github.com/erunan-josu" className={theme}>
        <FontAwesomeIcon icon={faGithub} className="icon" />
        erunan-josu
      </a>
      <a
        target="blank"
        href="https://www.instagram.com/erunan.josu/"
        className={theme}
      >
        <FontAwesomeIcon icon={faInstagram} className="icon" />
        erunan.josu
      </a>
    </footer>
  )
}

export default Footer
