import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <footer>
            <a href="mailto:shen.taylor@yahoo.com"> <FontAwesomeIcon icon={faSquareEnvelope} className="fa-3x"/></a>
            <a href="https://github.com/tshen28/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="fa-3x"/></a>
            <a href="https://www.linkedin.com/in/taylor-shen28" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faLinkedin} className="fa-3x"/></a>
        </footer>
    )
}
