import './index.scss';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';

const Home = () => {
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I'm Taylor, <br/> full-stack web developer.</h1>
                <h2>Frontend / Backend Developer</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
        <Loader type='line-scale-pulse-out-rapid'/>
        </>
    );
}

export default Home;