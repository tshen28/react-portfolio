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
                    <a className="text-overlay margin-right" href="https://github.com/chuanw101/found-ark" target="_blank" rel="noreferrer">GitHub
                        Link</a>
                    <a className="text-overlay" href="https://found-ark.herokuapp.com/" target="_blank" rel="noreferrer">Deployed
                        Link</a>
                </div>
            </div>
            <div className="container">
                <div className="relative-img">
                    <img className="img" src="./images/weather-dashboard.png" alt="weather dashboard screen shot" />
                    <div className="text-overlay project-name">
                        <h2>Weather Dashboard</h2>
                        <h3>HTML/CSS/JavaScript</h3>
                    </div>
                    <div className="center hidden">
                        <a className="text-overlay margin-right" href="https://github.com/chuanw101/weather-dashboard" target="_blank" rel="noreferrer">GitHub
                            Link</a>
                        <a className="text-overlay" href="https://chuanw101.github.io/weather-dashboard/" target="_blank" rel="noreferrer">Deployed
                            Link</a>
                    </div>
                </div>

                <div className="relative-img">
                    <img className="img" src="./images/workday-scheduler.png" alt="work day scheduler screen shot" />
                    <div className="text-overlay project-name">
                        <h2>Work Day Scheduler</h2>
                        <h3>HTML/CSS/JavaScript</h3>
                    </div>
                    <div className="center hidden">
                        <a className="text-overlay margin-right" href="https://github.com/chuanw101/work-day-scheduler" target="_blank" rel="noreferrer">GitHub
                            Link</a>
                        <a className="text-overlay" href="https://chuanw101.github.io/work-day-scheduler/" target="_blank" rel="noreferrer">Deployed
                            Link</a>
                    </div>
                </div>

                <div className="relative-img">
                    <img className="img" src="./images/byob.png" alt="byo packpack screen shot" />
                    <div className="text-overlay project-name">
                        <h2>BYO BackPack</h2>
                        <h3>HandleBars/NodeJS</h3>
                    </div>
                    <div className="center hidden">
                        <a className="text-overlay margin-right" href="https://github.com/chuanw101/byo-backpack" target="_blank" rel="noreferrer">GitHub
                            Link</a>
                        <a className="text-overlay" href="https://byo-backpack.herokuapp.com/" target="_blank" rel="noreferrer">Deployed
                            Link</a>
                    </div>
                </div>

                <div className="relative-img">
                    <img className="img" src="./images/wheres-the-beer.png" alt="wheres the beer screen shot" />
                    <div className="text-overlay project-name">
                        <h2>Where's the beer?</h2>
                        <h3>HTML/CSS/JavaScript</h3>
                    </div>
                    <div className="center hidden">
                        <a className="text-overlay margin-right" href="https://github.com/framenolan/wheres-the-beer" target="_blank" rel="noreferrer">GitHub
                            Link</a>
                        <a className="text-overlay" href="https://framenolan.github.io/wheres-the-beer/" target="_blank" rel="noreferrer">Deployed
                            Link</a>
                    </div>
                </div>
            </div>
        </section>
    )
}