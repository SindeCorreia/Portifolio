import React from 'react';
import './RandomChoise.css';
import Avatar from './Sinde_profile.jpg';
function RandomChoise  () {
  return (
    <div>
        <div className='RandomChoise' > 
        <div className='wheel'>
            <img src={Avatar} className='Avatar' alt="profile" />
        </div>
        </div>
    </div>
  );
};
export default RandomChoise;
