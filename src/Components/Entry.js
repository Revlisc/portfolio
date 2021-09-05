import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import '../css/Entry.css';

const Entry = ({title, time, company, summary, education}) => {
    
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
                
                <Col className='entryBox' md={{span: 3, offset: 1}} >
                    <h4 className='entryTitle'>{title}</h4>
                    <p className='entryTime'>{time}</p>
                </Col>
                <Col xs={2} className='iconbox'>
                        
                        <i className={education ? 'fa fa-pencil timeline-icon' : 'fa fa-briefcase timeline-icon'} />
                    
                </Col>
                <Col className='entrySecondBox'>
                    <h4 className='entryCompany'>{company}</h4>
                    <p className='entrySummary'>{summary}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Entry;