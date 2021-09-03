import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';

import '../css/Resume.css';
import Timeline from '../Components/Timeline';

const Resume = () => {
    return(
        <Container className='container-fluid'>
            <Row >
                
                <h1 className='resumeHeader' >My Journey So Far</h1>
                
            </Row>
            <Row >
                <h4>Here is a collection of my education and work experience</h4>
            </Row>
            <Row>
                <Timeline />
            </Row>
        </Container>
    )
}

export default Resume;