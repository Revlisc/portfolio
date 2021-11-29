import React from 'react';

import SkillsList from '../Skill/SkillsList';
import './About.css';
import { Container, Row, Col } from 'react-bootstrap';

import AboutBar from './AboutBar';
import profilePic from '../../image/profilepic.jpg';

const About = () => {
    return(
        <Container className='aboutpage' id='aboutpage'>
            
            <h1 >Let Me Introduce Myself</h1>

            <div>
                <Row>
                    <img className='profilepic mx-auto' src={profilePic} alt='me'/>
                </Row>
                <Row>
                    <Col xs={{span: 10, offset: 1}} md={{span: 8, offset: 2}}>
                    
                    <p className='aboutp'>
                        Hey, I'm Dale! I graduated from the University of Washington in August of 2020 with a degree 
                        in Biology. Towards the end of my degree, I started to teach myself to code with Python to supplement
                        my education. As I built upon my skills, I found a passion for programming. Since I graduated, I've 
                        continued learning computer science; whether it be through coursework, a bootcamp, or self-lead
                        teaching and projects. Since then, I've now learned skills in Java, Python, R, and Javascript, MongoDb, Node.js,
                        Express, React, and React Native. I'm currently looking to get involved in tech as a programmer, especially 
                        somewhere related to biotech or the sciences. I'm always looking to expand my skills and learn new things,
                        and I look forward to connecting soon.

                    </p>
                    </Col>
                </Row>
                <Row className='abtBarContain mx-auto'>
                    <Col xs={6} md={3} className='mx-auto'>
                        <AboutBar 
                            icon={<i className="far fa-lightbulb fa-3x"></i>} 
                            title='Solutions'
                            text='Solving problems and finding the best answer are passions of mine'
                        />
                    </Col>
                    <Col xs={6} md={3} className='mx-auto'>
                        <AboutBar 
                            icon={<i className="far fa-comments fa-3x"></i>} 
                            title='Relatable'
                            text="I'm a good communicator who excels in team-based environments"
                        />
                    </Col>
                    <Col xs={6} md={3} className='mx-auto'>
                        <AboutBar 
                            icon={<i className="fas fa-flask fa-3x"></i>} 
                            title='Data'
                            text='With a background in research, I know the importance of understanding data'
                        />
                    </Col>
                    <Col xs={6} md={3} className='mx-auto'>
                        <AboutBar 
                            icon={<i class="fas fa-project-diagram fa-3x"></i>} 
                            title='Adaptive'
                            text='I quickly adapt and utilize new methods of working and thinking'
                        />
                    </Col>
                    
                </Row>
                <Row >
                    <Col md={8} xs={10} className='mx-auto'> <SkillsList /></Col> 
                </Row>
                <Row>
                    <Col xs={12} sm={8} className='mx-auto' style={{textAlign: 'center'}}>
                        <p>
                            I'm currently seeking full-time positions in software engineering, bioinformatics, 
                            or developer roles. If you think I would make a good fit to your organization or team,
                            please reach out to me at <a href='mailto:dalesimmons0210@gmail.com' alt='email'>dalesimmons0210@gmail.com</a>.
                        </p>
                    </Col>
                    
                </Row>
                <Row className='aboutbtns' xs={12}>
                    <Col xs={{span: 12}} sm={{span: 3}}  className='justify-content-end'><a href="mailto:dalesimmons0210@gmail.com" className={'btn btn-block btn-lg abtbtn'} role='button'>Hire Me</a></Col>
                    <Col xs={{span: 12}} sm={{span: 3}} className='justify-content-start'><a href={'https://docs.google.com/document/d/1Lhe-v6w-rY-eB7edlK1ZVL9SELkeDS9HnlJ_zuvidkc/edit?usp=sharing'} className={'btn btn-lg abtbtn'}>Download Resume</a></Col>
                </Row>
               
            </div>
        </Container>
    )
}

export default About;