import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../css/Header.css';


const Header = () => {
    return (
        <Navbar bg='dark' variant='dark' expand="md">
            <LinkContainer exact to="/">
                <Navbar.Brand className='nav-title active'>Dale Simmons</Navbar.Brand>
            </LinkContainer> 
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">  
                    <LinkContainer exact to="/">
                        <Nav.Link className='link homelink' activeClassName='active'>Home</Nav.Link>
                    </LinkContainer>     
                    <LinkContainer to="/about">
                        <Nav.Link className='link'>About Me</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/projects">
                        <Nav.Link className='link'>Projects</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/resume">
                        <Nav.Link className='link'>Resume</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                        <Nav.Link className='link'>Contact Me</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;
