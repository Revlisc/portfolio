import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Header.css';


const Header = () => {
    return (
        <div className='navContainer'>
            <nav className="nav">
                <div className='navbox'>
                    <NavLink to='/' className='link'>Home</NavLink>
                    <NavLink to='/about' className='link'>About</NavLink>
                    <NavLink to='/projects' className='link'>Projects</NavLink>
                    <NavLink to='/resume' className='link'>Resume</NavLink>
                    <NavLink to='/contact' className='link'>Contact</NavLink>   
                </div>
            </nav>
        </div>
    )
}

export default Header;