import React from 'react';
import { Row, Container} from 'react-bootstrap';

import './Resume.css';
import Timeline from '../../Components/Timeline/Timeline';

const Resume = () => {
    return(
        <Container className='container-fluid resumepage' id='resumepage'>
            <Row >
                
                <h1 className='resumeHeader' >My Journey So Far</h1>
                
            </Row>
            <Row  className='resumeSubtitle'>
                <h4>Here is a collection of my education and work experience</h4>
            </Row>
            <Row>
                <Timeline />
            </Row>
        </Container>
    )
}

export default Resume;