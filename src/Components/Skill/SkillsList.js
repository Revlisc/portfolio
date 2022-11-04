
import React from 'react';
import './SkillsList.css';
import Skill from './Skill.js'
import Entry from '../Entry/Entry';
import { Container, Row, Col } from 'react-bootstrap';

const SkillsList = () => {
    return (
        <Container className='skillslist mx-auto'>
            <Row><h3 >Skills and Abilities</h3></Row>
            <Row>
                <Col>
                <p className='skillslist'>
                    I'm a people-first, goal-oriented engineer well-versed in dynamic development teams with experience in front and backend. I'm always
                    focused on adding to my skillset and I strive for the unknown, here is a quick highlight of some of my skills so far:
                </p>
                </Col>
                

            </Row>
            
            <Row>
                <Col md={{span:5, offset:1}} >
                <Skill 
                    years={"2 Years"}
                    text={["Java", "JavaScript", "React", "HTML", "CSS", "Git", "Redux", "Express", "Node.JS"]}
                />
                </Col>
                <Col md={{span:5}} >
                <Skill 
                    years={"1 Year"}
                    text={["C#", ".NET", "ASP.NET", "React Native", "Jira", "Docker", "Kubernetes", "Microservices", "SQL", "Python", "TypeScript", "Power Platform"]}    
                />
                </Col>
            </Row>
        </Container>
    )
}

export default SkillsList;