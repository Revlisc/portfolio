import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import '../css/Entry.css';

const Entry = ({title, time, company, summary}) => {
    
    /*
    .fa-briefcase:before {
    content: "\f0b1";
}

.timeline-icon {
    height: 2rem;
    width: 2rem;
    line-height: 4.8rem;
    background: #575454;
    border-radius: 50%;
    text-align: center;
    color: #FFFFFF;
    position: absolute;
   
}
<div className='timeline-icon'>
                    <i className='fa fa-briefcase' />
                </div>
    */
    return (
        <Container className='entry'>
            <Row>
                
                <Col  md={6} className='entryBox'>
                    <h4 className='entryTitle'>{title}</h4>
                    <p className='entryTime'>{time}</p>
                </Col>
                <Col  md={6}>
                    <h4 className='entryCompany'>{company}</h4>
                    <p className='entrySummary'>{summary}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Entry;