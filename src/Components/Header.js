import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../css/Header.css';


const Header = () => {
    return (
        <Navbar bg='dark' variant='dark' expand="md">
            <LinkContainer to="/">
                <Navbar.Brand className='nav-title'>Dale Simmons</Navbar.Brand>
            </LinkContainer> 
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">       
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

{/* <div className='navContainer'>
            <nav className="nav">
                <div className='navbox m-auto'>
                    <NavLink to='/' className='link'>Home</NavLink>
                    <NavLink to='/about' className='link'>About</NavLink>
                    <NavLink to='/projects' className='link'>Projects</NavLink>
                    <NavLink to='/resume' className='link'>Resume</NavLink>
                    <NavLink to='/contact' className='link'>Contact</NavLink>   
                </div>
            </nav>
        </div> */}