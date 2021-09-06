import React from 'react';
import { Container, Row} from 'react-bootstrap';
import ProjectEntry from '../Components/ProjectEntry';

import '../css/Projects.css';

const Projects = () => {
    return(
        <Container>
            <Row><h1 className='projects-header'>Projects</h1></Row>
            <ProjectEntry
                name='hello'
                date='test'
                source='test'
                imgsrc='https://benjamincongdon.me/projects'
                text='hi there old sport'
            />

        </Container>
    )
}

export default Projects;