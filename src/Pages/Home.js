import React from 'react';
import Typical from 'react-typical'
import '../css/Home.css';


const Home = () => {
    return(
        <div className={'hometext'} >
            <h1>Hi, I'm Dale</h1>
            <h3>
                I'm a {' '}
                <Typical
                    steps={['Developer', 3500, 'Scientist', 3500, 'Team Member', 3500]}
                    loop={Infinity}
                    className='typewriter'
                />
                
            </h3>
            <a href='https://github.com/Revlisc' alt='github address Revlisc' ><i className={'fa-github fab'} /></a>
            <a href='https://www.linkedin.com/in/dalejsimmons/' alt='my linkedin profile' ><i className="fab fa-linkedin-in" /></a>
            <a href='mailto:dalesimmons0210@gmail.com' alt='email contact' ><i class="fas fa-envelope" /></a>
        </div>
    )
}

export default Home;