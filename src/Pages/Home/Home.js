import React from 'react';
// import Typical from 'react-typical'
import './Home.css';
import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {
    return(
        <Container className={'hometext container-fluid'} id='homepage'>
            <Row>
                
                    <h1 className='openingline'>Hi, I'm Dale!</h1>
                    <Col xs={{span: 8, offset: 2}} md={{span:4, offset:4}}>
                        <h3 className='motto'>I'm a full-stack software engineer with an interest in Big Data.</h3>
                    </Col>
            </Row>
            <Row>
                <Col xs={{span:8, offset:2}} md={{span:6, offset:3}}>
                    <h3 className='subline'>My multifaceted background has given me a diverse viewpoint of data and my love of collaborative problem-solving has led to where I am today.</h3>
                </Col>
            </Row>
            
            <Row className='iconslinks'>
                <a href='https://github.com/Revlisc' alt='github address Revlisc' ><i className={'fa-github fab hicon'} /></a>
                <a href='https://www.linkedin.com/in/dalejsimmons/' alt='my linkedin profile' ><i className="fab fa-linkedin-in hicon" /></a>
                <a href='https://docs.google.com/document/d/12E_qw47InujI5Ok3ipZsGUgV1Mn22eCba83HGp_5s1M/view?usp=sharing' alt='resume' ><i class="fas fa-solid fa-file hicon" /></a>
            </Row>
            
        </Container>
    )
}

export default Home;