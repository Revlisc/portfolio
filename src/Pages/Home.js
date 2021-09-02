import React from 'react';
import Typical from 'react-typical'
import '../css/Home.css';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    return(
        <div className={'hometext'} >
            <h1 className='openingline'>Hi, I'm Dale</h1>
            <h3 className='ima'>
                I'm a {' '}
                <Typical
                    steps={['Developer', 3500, 'Scientist', 3500, 'Team Member', 3500]}
                    loop={Infinity}
                    className='typewriter'
                />
                
            </h3>
            <div className='iconslinks'>
                <a href='https://github.com/Revlisc' alt='github address Revlisc' ><i className={'fa-github fab'} /></a>
                <a href='https://www.linkedin.com/in/dalejsimmons/' alt='my linkedin profile' ><i className="fab fa-linkedin-in" /></a>
                <a href='mailto:dalesimmons0210@gmail.com' alt='email contact' ><i class="fas fa-envelope" /></a>
            </div>
        </div>
    )
}

export default Home;