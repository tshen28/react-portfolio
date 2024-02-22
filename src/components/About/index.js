import './index.scss';
import Loader from 'react-loaders';
import Animation from '../Animation';
import { useEffect, useState } from 'react';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className="container about-page">
                <div className='text-zone'>
                    <h1><Animation letterClass={letterClass} strArr={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15} /></h1>
                    <p>Hello! I'm Taylor Shen, a passionate software engineer driven by the thrill of turning ideas into reality through code. With 2 years of experience in the industry, I've cultivated a deep understanding of crafting efficient, scalable, and user-centric solutions. </p>

                    <p>My journey in software development began with a love for problem-solving. From architecting robust backend systems to crafting intuitive user interfaces, I thrive on the challenges that come with creating elegant, functional software. 

                    Beyond writing clean code, I prioritize collaboration and communication. I firmly believe that the best software is developed through teamwork, where diverse perspectives converge to create exceptional products. My experience working in cross-functional teams has not only honed my technical skills but also enriched my ability to effectively communicate complex ideas. </p>

                </div>
            </div>
            <Loader type='ball-scale-ripple' />
        </>
    );
}

export default About;