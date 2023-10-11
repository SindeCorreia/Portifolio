import React from 'react';
import './Contact.css';
import Profile from './SindeCorreia.jpg'
function Contact  () {
  return (
    <div>
        <div className='Details' >
          <div  id='information'>
            <img src={Profile} className='Profile' alt="profile" /> 
              <div id='MeansOfContact'>    
                <p>Lisbon</p>
                <p>Portugal</p> 
                <p>+351 930630601</p> 
                <p>sindecorreia@gmail.com </p> 
              </div> 
          </div> 
              <div className='worksExperience'>
                <h1> Professional experience</h1>
                <h3> Shop Assistant </h3>
                <h4>NOS |mar. de 2022 - feb. de 2023</h4>
                <h3> Comercial </h3>
                <h4>Link | Jun. de 2021 - set. de 2021 - Fins de semana</h4>
                <h3> Monitor </h3>
                <h4>Dinamic | Every summer since</h4>
          </div>
        </div>
    </div>
  );
};
export default Contact;
