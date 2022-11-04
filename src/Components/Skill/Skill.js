
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './SkillsList.css';


const Skill = ({years, text}) => {
    return (
        <Container className='skill' >
            <Row>
                <Col className='years' >
                    <h4 >{years}</h4>
                </Col>
                
            </Row>
            <Row>
                <Col >
                
                    {
                        text.map(x => <li className='listItem'>{x}</li>)
                    }
                
                </Col>
                
            </Row>
        </Container>
    )
}

export default Skill;