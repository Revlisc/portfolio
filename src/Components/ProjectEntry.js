
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
//import diceroll from '../image/diceRoll.PNG';
import '../css/ProjectEntry.css';

const ProjectEntry = ({name, date, source, imgsrc, text}) => {
    return (
        <Container>
            <Row className="project-entry-row">
                <Col sm={6}>
                    <h3><a href={source}>{name}</a></h3>
                </Col>
                <Col sm={6}>
                    <h4>{date}</h4>
                </Col>
            </Row>
            <Row className="project-entry-row">
                <Col>
                    
                    <img src={imgsrc} alt="screenshot of project" className='project-img'/>
                </Col>
            </Row>
            <Row className="project-entry-row">
                <Col xs={12}>
                    <p>{text}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default ProjectEntry;