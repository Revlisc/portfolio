import React from 'react';
import Typical from 'react-typical'
import '../css/Home.css';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    return(
        <Container className={'hometext'} >
            <Row>
                <h1 className='openingline'>Hi, I'm Dale</h1>
            </Row>
            <Row>
                <h3 className='ima'>
                    I'm a {' '}
                    <Typical
                        steps={['Developer', 3500, 'Scientist', 3500, 'Team Member', 3500]}
                        loop={Infinity}
                        className='typewriter'
                    />
                    
                </h3>
            </Row>
            <Row className='iconslinks'>
                <Col sm={{span: 2, offset: 4}} className='mx-auto'><a href='https://github.com/Revlisc' alt='github address Revlisc' ><i className={'fa-github fab hicon'} /></a></Col>
                <Col sm={2} className='mx-auto'><a href='https://www.linkedin.com/in/dalejsimmons/' alt='my linkedin profile' ><i className="fab fa-linkedin-in hicon" /></a></Col>
                <Col sm={2} className='mx-auto'><a href='mailto:dalesimmons0210@gmail.com' alt='email contact' ><i class="fas fa-envelope hicon" /></a></Col>
            </Row>
        </Container>
    )
}

export default Home;