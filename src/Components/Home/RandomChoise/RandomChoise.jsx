import React from 'react';
import './RandomChoise.css';
import Profile from './Sinde_profile.jpg';
function RandomChoise  () {
  return (
    <div>
        <div className='RandomChoise' >
          <div className='tt'>
            <img src={Profile} className='Profile' alt="profile" />
          </div>
        </div>
    </div>
  );
};
export default RandomChoise;
