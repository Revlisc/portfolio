import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Header.css';


const Header = () => {
    return (
        <Navbar bg='dark' variant='dark' expand="md" sticky='top'>
            
                <Navbar.Brand className='nav-title active' href='#homepage'>Dale Simmons</Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">  
                    
                        <Nav.Link ><Link activeClass="active" className='link homelink' to="homepage" spy={true}  duration={500} >Home</Link></Nav.Link>
                         
                    
                        <Nav.Link ><Link activeClass="active" className='link' to="aboutpage" spy={true}  duration={500} >About Me</Link></Nav.Link>
                    
                    
                        <Nav.Link ><Link activeClass="active" className='link ' to="projectspage" spy={true}  duration={500} >Projects</Link></Nav.Link>
                    
                        <Nav.Link ><Link activeClass="active" className='link' to="resumepage" spy={true}  duration={500} >Resume</Link></Nav.Link>
                    
                        <Nav.Link ><Link activeClass="active" className='link' to="contactpage" spy={true}  duration={500} >Contact</Link></Nav.Link>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;

/* <Navbar bg='dark' variant='dark' expand="md">
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
        </Navbar> */