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
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1> 
                    <span className={`${letterClass} _11`}>H</span> 
                    <span className={`${letterClass} _12`}>i</span>
                    <span className={`${letterClass} _13`}>,</span>
                    <br/>
                    <span className={`${letterClass} _14`}>I</span>
                    <span className={`${letterClass} _15`}>'</span>
                    <span className={`${letterClass} _16`}>m</span> <Animation letterClass={letterClass} strArr={nameArr} idx={17}/> <br/> <Animation letterClass={letterClass} strArr={jobArr} idx={14}/>
                </h1>
                <h2>Frontend / Backend Developer</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
        <Loader type='line-scale-pulse-out-rapid'/>
        </>
    );
}

export default Home;