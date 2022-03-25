import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
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
        Github
      </a>
      <a
        target="blank"
        href="https://www.linkedin.com/in/josu-hern%C3%A1ndez-preciado-76966a205/"
        className={theme}
      >
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
        LinkedIn
      </a>
    </footer>
  )
}

export default Footer
