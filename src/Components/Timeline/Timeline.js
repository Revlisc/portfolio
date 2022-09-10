import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Entry from '../Entry/Entry.js';

import './Timeline.css';

const Timeline = () => {
    
    
        return (
            <Container className='timeline'>
                <Row>
                    <h2 className='resumeSectionHeader'>Experience</h2>
                </Row>
                <Row className='timelineRow'>
                    
                    <Entry 
                        title={'Software Engineer'} 
                        time={'January 2022 - September 2022'} 
                        company={'Rev Tech'} 
                        summary={[
                            "At REV Tech, I began my career in tech serving as a software development engineer on the applications development team. ", <br/>, 
                            "As an engineer, I was able to partake in the design, development, and production of various apps both for internal and clients use. I greatly expanded upon my knowledge of the development cycle, programming, and software design", <br/>,
                            "Notable clients include the European Commission, Providence Health & Services, Warrior Games, and the Cities of Seattle, Denver, New York, and San Diego. "
                        ]} 
                    />
                </Row>
                <Row className='timelineRow'>
                    
                    <Entry 
                        title={'Specialist'} 
                        time={'October 2021 - December 2021'} 
                        company={'Apple'} 
                        summary={[
                            "- Furthered strong interest in technology to educate, advise, and help customers set up their devices from a range of over twenty products. ", <br/>, 
                            "- Employed strong communicative and problem-solving abilities to rapidly assess and provide solutions for hundreds of customers totaling in over $20,000 of individual sales per day. "
                        ]} 
                    />
                </Row>
                <Row className='timelineRow'>
                    
                    <Entry 
                        title={'Student'} 
                        time={'April 2021 - October 2021'} 
                        company={'Nucamp'} 
                        summary={[
                            "- Utilized and rapidly mastered languages and frameworks of front and backend including Javascript, CSS, HTML, React, React Native, MongoDb, NodeJS, Redux, and jQuery.", <br/>,
                            "- Completed course-long projects as well as personal side projects throughout the courses", <br/>,
                            "- Collaborated in groups as well as individually completed projects in multidisciplinary environments"
                        ]} 
                    />
                </Row>
                <Row className='timelineRow'>
                    <Entry 
                        title={'Sales Associate'} 
                        time={'Nov 2020 - Aug 2021'} 
                        company={'Uniqlo'} 
                        summary={[
                            "Troubleshooted and supported guests with our app on their device, led in customer service expectations, and contributed to sales' goals of $60,000 per day while adapting to over forty guests' needs per hour."
                            
                        ]} 
                    />
                </Row>
                <Row className='timelineRow'>
                    <Entry 
                        title={'Research Assistant'} 
                        time={'Jun 2019 - Aug 2020'} 
                        company={'University of Washington'} 
                        summary={[
                            "- Demonstrated ability in collaborative environment in a multidisciplinary team of over twenty individuals", <br/>,
                            "- Driven to be self-starter and results-oriented by working independently weeks ahead of schedule", <br/>,
                            "- Showcased knowledge of experimental design by independently producing over twenty products per quarter as metrics of meeting objectives", <br/>,
                            "- Proven ability to conduct data entry by keeping up to date, detailed reports of sixteen samples concurrently"
                            
                        ]} 
                    />
                </Row>
                <Row className='timelineRow'>
                    <Entry 
                        title={'Student'} 
                        time={'Sept 2017 - Aug 2020'} 
                        company={'University of Washington'} 
                        summary={[
                            "Through coursework, I was able to gain proficiency in languages including R, python, Excel, and java as well as demonstrate my ability to work in various laboratory settings with varying research practices.",
                            " I have a proven record in my ability to work under pressure with short deadlines by successfully maintaining high GPA"
                        ]} 
                    />
                </Row>
                
                <Row>
                    <h2 className='resumeSectionHeader'>Education</h2>
                </Row>
                <Row className='timelineRow'>
                    <Entry 
                        title={'Master of Computer Science'} 
                        time={'Expected Autumn 2022 - Autumn 2024'} 
                        company={'Arizona State University'} 
                        summary={[
                            "Concentration on Big Data Systems."
                        ]} 
                        education
                    />
                </Row>
                <Row className='timelineRow'>
                    <Entry 
                        title={'Bachelor of Science'} 
                        time={'Sept 2017 - Aug 2020'} 
                        company={'University of Washington'} 
                        summary={[
                            "Completed research in the Department of Biology, collaborated on multiple projects, member of Beta Beta Beta Honor Society."
                        ]} 
                        education
                    />
                </Row>
                
            </Container>
        )
}

export default Timeline;