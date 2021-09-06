import { date } from 'check-types';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ProjectEntry = ({name, date, source, imgsrc, text}) => {
    return (
        <Container>
            <Row>
                <Col sm={6}>
                    {name}
                </Col>
                <Col sm={6}>
                    {date}
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href={source}  />
                    <img src={imgsrc} alt="screenshot of project" />
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    {text}
                </Col>
            </Row>
        </Container>
    )
}

export default ProjectEntry;