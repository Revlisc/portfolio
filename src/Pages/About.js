import React from 'react';
import Profile from '../Components/Profile';
import SkillsList from '../Components/SkillsList';
import '../css/About.css';
import { Container, Row, Col } from 'react-bootstrap';
import myResume from '../files/Dale_Simmons_Resume.pdf';

const About = () => {
    return(
        <Container className='aboutpage'>
            <h1>Let me introduce myself</h1>

            <div>
                
                <Row>
                    <Col xs={{span: 6, offset: 3}}>
                    <p className='aboutp'>
                        Hey, I'm Dale! I graduated from the University of Washington in August of 2020 with a degree 
                        in Biology. Towards the end of my degree, I started to teach myself to code with Python to supplement
                        my degree. As I built upon my skills, I found a passion for programming. Since I graduated, I've been 
                        continuing in my computer science education; whether it be through coursework, a bootcamp, or self-lead
                        teaching and projects, I now have skills in Java, Python, R, and Javscript, as well as experience working
                        with React and React Native. I'm currently looking to get involved in tech as a programmer, especially 
                        somewhere related to biotech or the sciences. I'm always looking to expand my skills and learn new things,
                        and I look forward to connecting soon.

                    </p>
                    </Col>
                </Row>
                <Row >
                    <Col md={{span: 4, offset: 2}} xs={12}> <Profile /></Col>
                    <Col md={{span: 4}} xs={12}> <SkillsList /></Col> 
                </Row>
                <Row className='aboutbtns' xs={12}>
                    <Col xs={{span: 3}} className='justify-content-end'><a href="mailto:dalesimmons0210@gmail.com" className={'btn btn-block btn-info btn-lg'} role='button'>Hire Me</a></Col>
                    <Col xs={{span: 3}} className='justify-content-start'><a href={myResume}  className={'btn btn-info btn-lg'}>Download Resume</a></Col>
                </Row>
               
            </div>
        </Container>
    )
}

export default About;