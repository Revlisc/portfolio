
import React from 'react';
import './SkillsList.css';


const Skill = ({text}) => {
    return (
        <div className='skill '>
            <p className='skillText'>{text}</p> 
        </div>
    )
}

export default Skill;