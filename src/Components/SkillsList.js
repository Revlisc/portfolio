
import React from 'react';
import '../css/SkillsList.css';
import Skill from './Skill.js'

const SkillsList = () => {
    return (
        <div className='skillslist'>
            <h3>Skills and Abilities</h3>
            <p>
                I am a goal-oriented, team-first problem solver well-versed in coding and research. 
                My areas of expertise are in front and backend app development,
                working with multidicipinary teams, lab-based research methods, as well as life and computer science. Here are some 
                highlights of my technical skills:
            </p>
            <div>
                <ul className='list'>
                    <li ><Skill text='Javascript' percent={70} /></li>
                    <li><Skill text='Java' percent={65} style={{width: '70'}}/></li>
                
                    <li><Skill text='Python' percent={40} style={{width: '70'}}/></li>
                    <li><Skill text='HTML' percent={80} style={{width: '70'}}/></li>
                
                    <li><Skill text='CSS' percent={70} style={{width: '70'}}/></li>
                    <li><Skill text='React' percent={70} style={{width: '70'}}/></li>
                
                    <li><Skill text='React Native' percent={60} style={{width: '70'}}/></li>
                    <li><Skill text='Redux' percent={50} style={{width: '70'}}/></li>
                
                    <li><Skill text='Fume Hood Techniques' percent={75} style={{width: '70'}}/></li>
                    <li><Skill text='Laboratory Specimen Processing' percent={90} style={{width: '70'}}/></li>
                </ul>
                
            </div>
        </div>
    )
}

export default SkillsList;