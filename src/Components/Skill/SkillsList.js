
import React from 'react';
import './SkillsList.css';
import Skill from './Skill.js'

const SkillsList = () => {
    return (
        <div className='skillslist mx-auto'>
            <h3 >Skills and Abilities</h3>
            <p className='skillslist'>
                I'm a people-first, goal-oriented engineer well-versed in dynamic development teams with experience in front and backend. I'm always
                focused on adding to my skillset and I strive for the unknown, here is a quick highlight of some of my skills so far:
            </p>
            <div>
                <ul className='list mx-auto'>
                    <li ><Skill text='Javascript'  /></li>
                    <li><Skill text='Java' /></li>
                    <li><Skill text='Python' /></li>
                    <li><Skill text='HTML' /></li>
                    <li><Skill text='CSS' /></li>
                    <li><Skill text='React' /></li>
                    <li><Skill text='Redux'/></li>
                    <li><Skill text='NodeJS' /></li>
                    <li><Skill text='MongoDB'/></li>
                    <li><Skill text='Express' /></li>
                    <li><Skill text='Mongoose'/></li>
                    <li><Skill text='C# and .NET' /></li>
                    <li><Skill text='SQL' /></li>
                    <li><Skill text='Jira'/></li>
                </ul>
                
            </div>
        </div>
    )
}

export default SkillsList;