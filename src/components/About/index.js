import Loader from 'react-loaders';
import Sidebar from '../Sidebar';

const About = () => {
    return (
        <>
        <div className="container about-page">
            <Sidebar/>
            <h1>Hello</h1>
        </div>
        <Loader type='line-scale-pulse-out-rapid'/>
        </>
    );
}

export default About;