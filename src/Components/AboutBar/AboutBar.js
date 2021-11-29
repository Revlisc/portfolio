import React from 'react';
import './About.css'

const AboutBar = ({icon, title, text}) => {
    return (
        <div >
            <div className='aboutIcon' >{icon}</div>
            <h3 className='barTitle'>{title}</h3>
            <p className='barText'>
                {text}
            </p>
        </div>
    )
}

export default AboutBar;