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
                        time={'November 2022 - Present'} 
                        company={'GenesisCare'} 
                        summary={[
                            "- Developed scalable and user-friendly full stack software solutions used by hundreds of providers across the world using .NET and JavaScript frameworks. ", <br/>, 
                            "- Conducted code reviews and knowledge transfer sessions to teach best practices while improving code quality and maintainability.", <br/>,
                            "- Wrote and maintained technical documentation for internal software products including installation guides, training materials, and product documentation. ", <br/>,
                            "- Collaborated with a team of eight to update existing applications and modernize existing applications for treatment centers across the US decreasing time spent in documentation by 50%.", <br/>,
                            
                            ]} 
                    />
                </Row>
                
                <Row className='timelineRow'>
                    <Entry 
                        title={'Software Engineer'} 
                        time={'January 2022 - September 2022'} 
                        company={'Rev Tech'} 
                        summary={[
                            "- Demonstrated ability to successfully develop software solutions for diverse clientele, simultaneously balancing up to four concurrent projects in multiple frameworks and languages within Agile development cycles.  ", <br/>, 
                            "- Solved internal onboarding and inventory management system issues in first month by designing and implementing an application on Power Platform reducing onboarding time by 50% and used for 100% of new hires since release.", <br/>,
                            "- Adapted Seattle Office of Sustainability & Environment energy metric tracking fullstack web application to implement more than ten new features and fix downed systems using C# and ASP.NET/MVC while tracking tickets with Jira. ", <br/>,
                            "- Coordinated needs of two stakeholder groups to design and build the front-end of inventory management system for Providence Health & Services utilizing React and integrating REST API using .NET and C#.", <br/>,
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

{
    /*
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
                        title={'Sales Associate'} 
                        time={'Nov 2020 - Aug 2021'} 
                        company={'Uniqlo'} 
                        summary={[
                            "Troubleshooted and supported guests with our app on their device, led in customer service expectations, and contributed to sales' goals of $60,000 per day while adapting to over forty guests' needs per hour."
                            
                        ]} 
                    />
                </Row>
    */
}