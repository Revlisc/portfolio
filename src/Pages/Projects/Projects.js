import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import ProjectEntry from '../../Components/ProjectEntry/ProjectEntry';
import social from '../../image/social.png'
import glowart from '../../image/step3tutorial.jpg'
import desktopstudy from '../../image/desktopstudy.png';
import portfolioimg from '../../image/portfolioimg.png';
import weatherApp from '../../image/weatherApp.png';
import studyAppMobile from '../../image/studyAppMobile.png';


import './Projects.css';

const Projects = () => {
    return(
        <Container id='projectspage' className='projectspage container-fluid'>
            <Row><h1 className='projects-header'>Projects</h1></Row>
            <Row classname='projectRow '> 
                
                <Col lg={3} md={6} xs={12} className='entryPic '>
                    <ProjectEntry
                        name='Social'
                        date='Autumn 2021'
                        source='https://github.com/Revlisc/socialApp'
                        imgsrc={social}
                        
                        text={["In an exercise to hone my knowledge of the MERN stack, I am in the process of developing a full-stack social media app.",
                            " Since I began learning JavaScript, making a social media app has always been in the back of my mind, and now its a reality!",
                            " So far, you can either make an account or login with your google account or email with JWT, create, like, comment on, or delete posts if you made them.",
                            " Future features will include a profile page, friends, a chat portion, and a search by hashtags feature. Stay tuned for updates!" 
                        ]}
                        tech={[
                            <i className="fab fa-react"> React</i>, ' | ',
                            <i className="fab fa-node"> NodeJS</i>, ' | ',
                            <i className="fab fa-mdb"> MongoDB</i>, ' | ',
                            <i> Express </i>, ' | ',
                            <i> mongoose </i>, ' | ',

                        ]}
                    />
                </Col>
                <Col lg={3} md={6} xs={12} className='entryPic '>
                    <ProjectEntry
                        name='Glow Art Vibes'
                        date='Autumn 2021'
                        source='https://revlisc.github.io/glowArtLanding/'
                        imgsrc={glowart}
                        
                        text={["A project I built over the course of a week for my first hackathon I participated in. ",
                            "We were tasked with creating an art app that would allow for a user to draw, and add any creative abilities to it as we saw fit.",
                            " We decided we wanted to make a pixel art app with the capability to upload an image to recreate and extract the colors for use.",
                            " I worked on the grid, color extractor logic, the file upload logic, routing, some landing page styling, and color palette logic." 
                        ]}
                        tech={[
                            <i className="fab fa-react"> React</i>, ' | ',
                            <i className="fab fa-js"> JavaScript</i>, ' | ',
                            <i className="fab fa-sass"> Sass</i>,
                        ]}
                    />
                </Col>
                <Col lg={3} md={6} xs={12} className='entryPic '>
                    <ProjectEntry
                        name='StudyApp Mobile'
                        date='Autumn 2021'
                        source='https://github.com/Revlisc/studyApp'
                        imgsrc={studyAppMobile}
                        className='mobile-img'
                        text={["As a project to better my skills in React Native, A friend and I transitioned the StudyApp originally built for ",
                            "web into a mobile app using React Native. This app maintains the same functionality as what was found in the web version.",
                            " I worked on the sign in pages, review capability, navigation throughout the app, as well as the homescreen." 
                        ]}
                        tech={[
                            <i className="fab fa-react"> React Native</i>, ' | ',
                            <i className="fab fa-js"> JavaScript</i>, ' | ',
                            <i className="fab fa-html5"> HTML</i>, ' | ',
                            <i class="fab fa-css3-alt"> CSS</i>,
                        ]}
                    />
                </Col>
                
                
                
                
            </Row>
            
        </Container>
    )
}

export default Projects;