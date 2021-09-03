import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Entry from './Entry.js';

import '../css/Timeline.css';

const Timeline = () => {
    return (
        <Container className='timeline'>
            <Row className='timelineRow'>
                <Entry 
                    title={'Sales Associate'} 
                    time={'Nov 2020 - Aug 2021'} 
                    company={'Uniqlo'} 
                    summary={'loren ipsum I am cool'} />
            </Row>
            <Row>
                <Entry title={'Test'} time={'2015-2019'} company={'google'} summary={'loren ipsum I am cool'} />
            </Row>
            <Row>
                <Entry title={'Test'} time={'2015-2019'} company={'google'} summary={'loren ipsum I am cool'} />
            </Row>
            <Row>
                <Entry title={'Test'} time={'2015-2019'} company={'google'} summary={'loren ipsum I am cool'} />
            </Row>
            
        </Container>
    )
}

export default Timeline;