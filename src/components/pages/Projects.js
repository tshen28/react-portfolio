import React from 'react'
import '../../styles/Projects.css'
import IYKYK from '../../images/IYKYK.png'
import Project1 from '../../images/Project1.png'
import Project2 from '../../images/Project2.png'
import NoteTaker from '../../images/NoteTaker.png'
import teamGenerator from '../../images/teamGenerator.png'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Projects() {
    return (
        <section>
            <h1>My Projects</h1>
            <div className='container'>
                <div className='cardImg'>
                    <Card style={{ width: '30%' }} className="projectCard">
                        <Card.Img variant="top" src={IYKYK} />
                        <Card.Body className="card-body">
                            <Card.Title>IYKYK</Card.Title>
                            <Card.Text>
                                Project 3 featuring an event planning social media app
                            </Card.Text>
                            <a href='https://github.com/Jeff-T-Schmidt/IYKYK' target="_blank"><Button variant="light">Github</Button></a>
                            <a href='https://iykyk-frontend.herokuapp.com/' target="_blank"><Button variant="light">Deployed</Button></a>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cardImg'>
                    <Card style={{ width: '30%' }} className="projectCard">
                        <Card.Img variant="top" src={Project2} />
                        <Card.Body className="card-body">
                            <Card.Title>Restaurant Finder</Card.Title>
                            <Card.Text>
                                Project 2 featuring restaurant search and save app
                            </Card.Text>
                            <a href='https://github.com/erict001/Restaurant-Finder' target="_blank"><Button variant="light">Github</Button></a>
                            <a href='https://roogle-2022.herokuapp.com/' target="_blank"><Button variant="light">Deployed</Button></a>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cardImg'>
                    <Card style={{ width: '30%' }} className="projectCard">
                        <Card.Img variant="top" src={Project1} />
                        <Card.Body className="card-body">
                            <Card.Title>Cocktail Wonderland</Card.Title>
                            <Card.Text>
                                Project 1 featuring a cocktail recipe randomizer
                            </Card.Text>
                            <a href='https://github.com/Jeff-T-Schmidt/First-Project' target="_blank"><Button variant="light">Github</Button></a>
                            <a href='https://jeff-t-schmidt.github.io/First-Project/' target="_blank"><Button variant="light">Deployed</Button></a>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cardImg'>
                    <Card style={{ width: '30%' }} className="projectCard">
                        <Card.Img variant="top" src={NoteTaker} />
                        <Card.Body className="card-body">
                            <Card.Title>Note Taker</Card.Title>
                            <Card.Text>
                                Note taker app using Express
                            </Card.Text>
                            <a href='https://github.com/tshen28/note-taker' target="_blank"><Button variant="light">Github</Button></a>
                            <a href='https://protected-falls-13447.herokuapp.com/' target="_blank"><Button variant="light">Deployed</Button></a>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cardImg'>
                    <Card style={{ width: '30%' }} className="projectCard">
                        <Card.Img variant="top" src={teamGenerator} />
                        <Card.Body className="card-body">
                            <Card.Title>Team Profile Generator</Card.Title>
                            <Card.Text>
                                Team generator app using Inquirer npm
                            </Card.Text>
                            <a href='https://github.com/tshen28/team-profile-generator' target="_blank"><Button variant="light">Github</Button></a>
                            <a href='https://drive.google.com/file/d/1xqUf7diw7wzeBJsv_6rF-TbXXPVktcuj/view?usp=sharing' target="_blank"><Button variant="light">Demo</Button></a>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cardImg'>
                    <Card style={{ width: '30%' }} className="projectCard">
                        <Card.Img variant="top" src="" />
                        <Card.Body className="card-body">
                            <Card.Title>Employee Tracker</Card.Title>
                            <Card.Text>
                                Employee management system using MySQL
                            </Card.Text>
                            <a href='https://github.com/tshen28/employee-tracker' target="_blank"><Button variant="light">Github</Button></a>
                            <a href='https://drive.google.com/file/d/1Q4189Di6529ZAbPERkxnrSy7OR_yU879/view?usp=sharing' target="_blank"><Button variant="light">Demo</Button></a>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </section>
    )
}