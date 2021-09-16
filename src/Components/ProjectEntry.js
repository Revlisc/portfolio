
import React, { useState } from 'react';
import { Modal, Button, ModalBody, ModalTitle, ModalFooter } from 'react-bootstrap';

import '../css/ProjectEntry.css';


const ProjectEntry = ({name, date, source, imgsrc, text, tech}) => {
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };
    
    const hideModal = () => {
        setIsOpen(false);
    };

    
    return (
       
        <div>
            <div className='project-image-wrap mx-auto'>
                <img src={imgsrc} alt="screenshot of project" className='project-img'/>
                
                <p className='modalHover'>
                    <h3>{name}</h3>
                    <Button  className='projectModalBtn mx-auto btn' onClick={showModal}>
                        +
                    </Button>
                </p>
            </div>
            <Modal
                size="lg"
                show={isOpen}
                onHide={hideModal}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header >
                <ModalTitle id="contained-modal-title-vcenter">
                    <h3>{name}</h3>
                    <h5>{date}</h5>
                </ModalTitle>
                </Modal.Header>
                <ModalBody>
                    <img src={imgsrc} alt="screenshot of project" className='project-img-modal'/>
                    <p>
                        {text}
                    </p>
                    <h4>{tech}</h4>
                </ModalBody>
                <ModalFooter>
                <Button ><a href={source} >View code</a></Button>
                <Button onClick={hideModal}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>

    )
}

export default ProjectEntry;

/*
<Container>
            <Row className="project-entry-row">
                <Col sm={6}>
                    <h3><a href={source}>{name}</a></h3>
                </Col>
                <Col sm={6}>
                    <h4>{date}</h4>
                </Col>
            </Row>
            <Row className="project-entry-row">
                <Col>
                    
                    <img src={imgsrc} alt="screenshot of project" className='project-img'/>
                </Col>
            </Row>
            <Row className="project-entry-row">
                <Col xs={12}>
                    <p>{text}</p>
                </Col>
            </Row>
        </Container>
*/