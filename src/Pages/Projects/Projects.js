import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import ProjectEntry from '../../Components/ProjectEntry/ProjectEntry';
import diceroll from '../../image/diceRoll.PNG';
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
                
                <Col lg={3} md={{span: 6}} xs={12}className='entryPic  '>
                    <ProjectEntry
                        name='Weather App'
                        date='Autumn 2021'
                        source='https://github.com/Revlisc/weatherApp'
                        imgsrc={weatherApp}
                        text={["I developed this app to gain practice in communicating with third-party API's.",
                            "I used the Open Weather Map API to display both the current and upcoming weather, then React to display the chosen data.",
                            "The User types in their chosen city, and the api will fetch the weather icon, temperature, humidity, a written description of their weather conidtions, and what the temperature feels like." 
                        ]}
                        tech={[
                            <i className="fab fa-react"> React</i>, ' | ',
                            <i className="fab fa-js"> JavaScript</i>, ' | ',
                            <i className="fab fa-html5"> HTML</i>, ' | ',
                            <i class="fab fa-css3-alt"> CSS</i>,
                        ]}
                    />
                </Col>
                
                
            </Row>
            <Row classname='projectRowEnd'>
                
                <Col lg={3} md={6} xs={12}className='entryPic  '>
                    <ProjectEntry 
                        name="StudyApp"
                        date="Summer 2021"
                        source='https://github.com/Revlisc/desktopStudy'
                        imgsrc={desktopstudy}
                        text={['A project I made in collaboration that allows a user to login/sign up to an account, create study sets, edit existing sets, review their flashcards, and measure accuracy.']}
                        tech={[
                            <i className="fab fa-react"> React</i>, ' | ',
                            <i className="fab fa-js"> JavaScript</i>, ' | ',
                            <i className="fab fa-html5"> HTML</i>, ' | ',
                            <i class="fab fa-css3-alt"> CSS</i>, 
                        ]}
                    />
                </Col>
                <Col lg={3} md={6} xs={12} className='entryPic '>
                    <ProjectEntry 
                        name="Portfolio"
                        date="Summer 2021"
                        source='https://github.com/Revlisc/portfolio'
                        imgsrc={portfolioimg}
                        text={['A personal site to host a resume, my projects, demonstrate fluency in React, and allow people to get to know me better. ']}
                        tech={[
                            <i className="fab fa-react"> React</i>, ' | ',
                            <i className="fab fa-js"> JavaScript</i>, ' | ',
                            <i className="fab fa-html5"> HTML</i>, ' | ',
                            <i class="fab fa-css3-alt"> CSS</i>, 
                        ]}
                    />
                </Col>

                <Col lg={3} md={6} xs={12} className='entryPic  '>
                    <ProjectEntry
                        name='Dice Roller'
                        date='Summer 2021'
                        source='https://github.com/Revlisc/diceRoll'
                        imgsrc={diceroll}
                        text={["A game I made with React and Redux to calculate points based off of random dice rolls.", <br/>,
                            'I used redux to store user info and the scores, as well as tracking the total number of points rolled.'
                        ]}
                        tech={[
                            <i className="fab fa-react"> React</i>, ' | ',
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