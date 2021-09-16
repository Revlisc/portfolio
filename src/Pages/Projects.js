import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import ProjectEntry from '../Components/ProjectEntry';
import diceroll from '../image/diceRoll.PNG';
import todolist from '../image/todolist.PNG';
import cafe from '../image/cafe.png';


import '../css/Projects.css';

const Projects = () => {
    return(
        <Container id='projectspage' className='projectspage container-fluid'>
            <Row><h1 className='projects-header'>Projects</h1></Row>
            <Row classname='projectRow'> 
                <Col md={3} xs={12} className='entryPic '>
                    <ProjectEntry
                        name='Dice Roller'
                        date='Summer 2021'
                        source='https://github.com/Revlisc/diceRoll'
                        imgsrc={diceroll}
                        text={["A game I made with React and Redux to calculate points based off of random dice rolls.", <br/>,
                            'Used redux to store user info and the scores, as well as tracking the total number of points rolled.'
                        ]}
                        tech={[
                            <i className="fab fa-react"> React</i>, ' | ',
                            <i className="fab fa-js"> JavaScript</i>, ' | ',
                            <i className="fab fa-html5"> HTML</i>, ' | ',
                            <i class="fab fa-css3-alt"> CSS</i>, ' | ',
                        ]}
                    />
                </Col>
                <Col md={3} xs={12}className='entryPic  '>
                    <ProjectEntry 
                        name="Todo List"
                        date="Summer 2021"
                        source='https://github.com/Revlisc/todoList'
                        imgsrc={todolist}
                        text={['A basic todolist made with react that allows the user to create, edit, delete, and check off items by clicking.']}
                        tech={[
                            <i className="fab fa-react"> React</i>, ' | ',
                            <i className="fab fa-js"> JavaScript</i>, ' | ',
                            <i className="fab fa-html5"> HTML</i>, ' | ',
                            <i class="fab fa-css3-alt"> CSS</i>, ' | ',
                        ]}
                    />
                </Col>
                <Col md={3} xs={12} className='entryPic '>
                    <ProjectEntry
                        name="Restaurant Mock Website"
                        date='Summer 2021'
                        source='https://github.com/Revlisc/bootstrapRestSite'
                        imgsrc={cafe}
                        text={['A project I made to gain skills in css and styling html components. Used bootstrap to assemble the parts, as well as experience with routing and making responsive websites.']}
                        tech={[
                            <i className="fab fa-html5"> HTML</i>, ' | ',
                            <i className="fab fa-css3-alt"> CSS</i>, ' | ',
                            <i className='fab fa-bootstrap'> Bootstrap</i>
                        ]}
                    
                    />
                </Col>
                
            </Row>
        </Container>
    )
}

export default Projects;