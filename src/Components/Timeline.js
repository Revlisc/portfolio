import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Entry from './Entry.js';

import '../css/Timeline.css';

const Timeline = () => {
    return (
        <Container className='timeline'>
            <Row>
                <h2 className='resumeSectionHeader'>Experience</h2>
            </Row>
            <Row className='timelineRow'>
                <Entry 
                    title={'Student'} 
                    time={'April 2021 - October 2021'} 
                    company={'Nucamp'} 
                    summary={[
                        "Utilized and rapidly mastered languages and frameworks of front and backend including Javascript, CSS, HTML, React, React Native, MongoDb, NodeJS, Redux, and jQuery.", <br/>,
                        "Completed course-long projects as well as personal side projects throughout the courses", <br/>,
                        "Collaborated in groups as well as individually to complete projects in multidiciplinary environments"
                    ]} 
                />
            </Row>
            <Row className='timelineRow'>
                <Entry 
                    title={'Sales Associate'} 
                    time={'Nov 2020 - Aug 2021'} 
                    company={'Uniqlo'} 
                    summary={[
                        "Assisted in meeting daily sales goals of up to $60,000 by promoting target items and adapting to over forty guests’ needs per hour", <br/>,
                        "Anticipated guest’s needs and provided high-quality service by following company policies to ensure a positive shopping experience while multitasking in a fast-paced environment.", <br/>,
                        "Swiftly and effectively resolved conflict through great customer service and communication leading to customer satisfaction and developing lasting customer relationships.", <br/>,
                        "Troubleshooted and supported guests with our app on a their devices leading to increased customer satisfaction"
                    ]} 
                />
            </Row>
            <Row>
                <Entry 
                    title={'Research Assistant'} 
                    time={'Jun 2019 - Aug 2020'} 
                    company={'University of Washington'} 
                    summary={[
                        "Demonstrated ability in collaborative environment in a multidisciplinary team of over twenty individuals", <br/>,
                        "Driven to be self-starter and results-oriented by working independently weeks ahead of schedule", <br/>,
                        "Showcased knowledge of experimental design by independently producing over twenty products per quarter as metrics of meeting objectives", <br/>,
                        "Proven ability to conduct data entry by keeping up to date, detailed reports of sixteen samples concurrently"
                        
                    ]} 
                />
            </Row>
            <Row>
                <Entry 
                    title={'Student'} 
                    time={'Sept 2017 - Aug 2020'} 
                    company={'University of Washington'} 
                    summary={[
                        "Developed strong proficiency in technical skills with languages including R, python, Excel, and java while troubleshooting errors and learning to solve with them", <br/>,
                        "Demonstrated proficiency with statistical analysis by routinely receiving A’s  and utilizing tests in major classes", <br/>,
                        "Showcased ability to work under pressure with short deadlines by successfully maintaining high GPA"
                    ]} 
                />
            </Row>
            <Row>
                <Entry 
                    title={'Parcel Clerk - Summer Work'} 
                    time={'Jul 2018 - Aug 2018'} 
                    company={'Fred Meyer'} 
                    summary={[
                        "Performed strong verbal communication skills in fast-paced environment to promote customer satisfaction with over 300 customers daily", <br/>,
                        "Showcased ability to coordinate and manage multiple tasks at once by maintaining three store entrances"
                    ]} 
                />
            </Row>
            <Row>
                <h2 className='resumeSectionHeader'>Education</h2>
            </Row>
            <Row>
                <Entry 
                    title={'Bachelor of Science'} 
                    time={'Sept 2017 - Aug 2020'} 
                    company={'University of Washington'} 
                    summary={[
                        "Completed research in the Department of Biology, collaborated on multiple projects, member of Beta Beta Beta Honor Society"
                    ]} 
                />
            </Row>
            
        </Container>
    )
}

export default Timeline;