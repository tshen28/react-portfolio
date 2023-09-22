import './index.scss';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import Animation from '../Animation';
import { useEffect, useState } from 'react';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArr = ['T', 'a', 'y', 'l', 'o', 'r', ',']
    const jobArr = ['f', 'u', 'l', 'l', '-', 's', 't', 'a', 'c', 'k', ' ', 'w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <div>
        <div className="container home-page">
            <div className="text-zone">
                <h1> 
                    <span className={`${letterClass} _10`}>H</span> 
                    <span className={`${letterClass} _11`}>i</span>
                    <span className={`${letterClass} _12`}>,</span>
                    <br/>
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'</span>
                    <span className={`${letterClass} _15`}>m</span> <Animation letterClass={letterClass} strArr={nameArr} idx={16}/> <br/> <Animation letterClass={letterClass} strArr={jobArr} idx={14}/>
                </h1>
                <h2>Frontend / Backend Developer</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
        <Loader type='line-scale-pulse-out-rapid'/>
        </div>
    );
}

export default Home;