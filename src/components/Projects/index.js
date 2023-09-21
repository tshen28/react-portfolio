import Sidebar from '../Sidebar';
import './index.scss';
import Loader from 'react-loaders';

const Projects = () => {
    return (
        <>
        <Sidebar/>
        <Loader type='line-scale-pulse-out-rapid'/>
        </>
    )
}

export default Projects;