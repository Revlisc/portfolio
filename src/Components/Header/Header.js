import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        // <Navbar bg='dark' variant='dark' expand="md" sticky='top'>
            
        //         <Navbar.Brand className='nav-title active' href='#homepage'>Dale Simmons</Navbar.Brand>
            
        //     <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="mx-auto">  
                    
        //                 <Nav.Link ><Link activeClass="active" className='link homelink' to="homepage" spy={true}  duration={500} >Home</Link></Nav.Link>
                         
                    
        //                 <Nav.Link ><Link activeClass="active" className='link' to="aboutpage" spy={true}  duration={500} >About Me</Link></Nav.Link>
                    
                    
        //                 <Nav.Link ><Link activeClass="active" className='link ' to="projectspage" spy={true}  duration={500} >Projects</Link></Nav.Link>
                    
        //                 <Nav.Link ><Link activeClass="active" className='link' to="resumepage" spy={true}  duration={500} >Resume</Link></Nav.Link>
                    
        //                 <Nav.Link ><Link activeClass="active" className='link' to="contactpage" spy={true}  duration={500} >Contact</Link></Nav.Link>
                    
        //         </Nav>
        //     </Navbar.Collapse>
        // </Navbar>
        <header>
                <div className="hidden justify-between items-center lg:w-auto lg:order-1">
                    <ul className="list-none flex mt-4 font-medium flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <Link activeClass="active" className='link list-none border border-red border-lg' to="projectspage" spy={true}  duration={500} >Projects</Link>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About Me</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Projects</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Resume</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                        </li>
                    </ul>
                </div>
        </header>
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