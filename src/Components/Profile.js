import React from 'react';
import '../css/Profile.css'

const Profile = () => {
    return (
        <div className=''>
            <h3>Profile</h3>
            <p>
                I'm currently seeking full-time positions in software engineering, bioinformatics, 
                or developer roles. If you think I would make a good fit to your organization or team,
                please reach out to me at <a href='mailto:dalesimmons0210@gmail.com' alt='email'>dalesimmons0210@gmail.com</a>.
            </p>
            <h4>Interests</h4>
            <div>  
                <ul>
                    <li>Interactive Web and Mobile App Development</li>
                    <li>Conservation and Scientific Outreach</li>
                    <li>Biological and Life Sciences</li>
                    <li>Data Science</li>
                    <li>Research, especially related to Machine Learning or Biotech</li>
                </ul>    
            </div>  
            
        </div>
    )
}

export default Profile;