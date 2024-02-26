import './index.scss';
import Loader from 'react-loaders';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Logo from '../../assets/images/ts.png'


const Projects = () => {
    return (
        <div className='project_page'>
            <Card className='project_card' sx={{ maxWidth: 350 }}>
                <CardMedia
                    sx={{ height: 180 }}
                    image={Logo}
                    title=""
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" fontSize="18px" fontWeight="bold" color="#E1F639">
                        Project 1
                    </Typography>
                    <Typography variant="body2" color="azure" fontSize="11px">
                        Project description
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" className="project_btn">Project Demo</Button>
                    <Button variant="outlined" className="project_btn">Github Repo</Button>
                </CardActions>
            </Card>
            <Card className='project_card' sx={{ maxWidth: 350 }}>
                <CardMedia
                    sx={{ height: 180 }}
                    image={Logo}
                    title=""
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" fontSize="18px" fontWeight="bold" color="#E1F639">
                        Project 2
                    </Typography>
                    <Typography variant="body2" color="azure" fontSize="11px">
                        Project description
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" className="project_btn">Project Demo</Button>
                    <Button variant="outlined" className="project_btn">Github Repo</Button>
                </CardActions>
            </Card>
            <Card className='project_card' sx={{ maxWidth: 350 }}>
                <CardMedia
                    sx={{ height: 180 }}
                    image={Logo}
                    title=""
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" fontSize="18px" fontWeight="bold" color="#E1F639">
                        Project 3
                    </Typography>
                    <Typography variant="body2" color="azure" fontSize="11px">
                        Project description
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" className="project_btn">Project Demo</Button>
                    <Button variant="outlined" className="project_btn">Github Repo</Button>
                </CardActions>
            </Card>
            <Loader type='ball-scale-ripple' />
        </div>
    )
}

export default Projects;