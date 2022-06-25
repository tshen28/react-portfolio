import React from 'react'
import '../../styles/Projects'

export default function Projects () {
    return (
        <section>
            <h1>My Projects</h1>
            <div className="relative-img">
                <img src='./images/IYKYK.png' alt='IYKYK screenshot'/>
                <div className="text-overlay project-name">
                    <h2>IYKYK</h2>
                    <h3>Project 3</h3>
                </div>
                <div className="center hidden">
                    <a className="text-overlay margin-right" href="https://github.com/Jeff-T-Schmidt/IYKYK" target="_blank" rel="noreferrer">GitHub
                        Link</a>
                    <a className="text-overlay" href="https://iykyk-frontend.herokuapp.com/" target="_blank" rel="noreferrer">Deployed
                        Link</a>
                </div>
            </div>
            <div className="container">
                
            </div>
        </section>
    )
}