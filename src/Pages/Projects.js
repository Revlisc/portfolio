import React from 'react';
import { Container, Row} from 'react-bootstrap';
import ProjectEntry from '../Components/ProjectEntry';
import diceroll from '../image/diceRoll.PNG';
import todolist from '../image/todolist.PNG';

import '../css/Projects.css';

const Projects = () => {
    return(
        <Container>
            <Row><h1 className='projects-header'>Projects</h1></Row>
            <ProjectEntry
                name='Dice Roller'
                date='Summer 2021'
                source='https://github.com/Revlisc/diceRoll'
                imgsrc={diceroll}
                text={["A game I made with React and Redux to calculate points based off of random dice rolls.", <br/>,
                    'Used redux to store user info and the scores, as well as tracking the total number of points rolled.'
                ]}
            />
            <ProjectEntry 
                name="Todo List"
                date="Summer 2021"
                source='https://github.com/Revlisc/todoList'
                imgsrc={todolist}
                text={['A basic todolist made with react that allows the user to create, edit, delete, and check off items by clicking.']}
            />
        </Container>
    )
}

export default Projects;