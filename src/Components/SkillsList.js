
import React from 'react';
import '../css/SkillsList.css';
import Skill from './Skill.js'

const SkillsList = () => {
    return (
        <div className='skillslist mx-auto'>
            <h3 >Skills and Abilities</h3>
            <p className='skillslist'>
                I am a goal-oriented, team-first problem solver well-versed in coding and research. 
                My areas of expertise are in front and backend app development,
                working with multidicipinary teams, lab-based research methods, as well as life and computer science. Here are some 
                highlights of my technical skills:
            </p>
            <div>
                <ul className='list mx-auto'>
                    <li ><Skill text='Javascript'  /></li>
                    <li><Skill text='Java' /></li>
                
                    <li><Skill text='Python' /></li>
                    <li><Skill text='HTML' /></li>
                
                    <li><Skill text='CSS' /></li>
                    <li><Skill text='React' /></li>
                
                    <li><Skill text='React Native' /></li>
                    <li><Skill text='Redux'/></li>
                
                    <li><Skill text='Fume Hood' /></li>
                    <li><Skill text='Lab Skills' /></li>
                </ul>
                
            </div>
        </div>
    )
}

export default SkillsList;