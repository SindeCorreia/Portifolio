import React, { useState } from 'react';
import './Contact.css';
import Profile from './SindeCorreia.jpg';
import Cv from './Cv.png';

function Contact() {
  const [showCv, setShowCv] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  const Jobs = [
    {
      title: "Shop Assistant",
      time: "NOS | mar. de 2022 - feb. de 2023",
      description: "I achieve the sales goal in the half of period for four months straight, I was also in charge of training the new hires",
    },
    {
      title: "Comercial",
      time: "Link | Jun. de 2021 - set. de 2021 - Fins de semana",
      description: "I introduced the scoter approaching close to 300 people per day and achieving a conversion rate of around 11%",
    },
    {
      title: "Monitor",
      time: "Link | Jun. de 2021 - set. de 2021 - Fins de semana",
      description: "During the summers of 2019, 2020, and 2021, I managed several entertainment events for more than 1000 children per day, ages 2 to 12. Payment and treasury management, daily catch-ups with the project coordinator",
    },
  ];

  const handleWorkHover = (index) => {
    setSelectedWork(index);
  };

  const handleWorkLeave = () => {
    setSelectedWork(null);
  };

  return (
    <div>
      <div className='Details'>
        <div id='information' onMouseEnter={() => setShowCv(true)} onMouseLeave={() => setShowCv(false)}>
          <img src={Profile} className='Profile' alt='profile' />
          <div id='MeansOfContact'>
            <p>Lisbon</p>
            <p>Portugal</p>
            <p>+351 930630601</p>
            <p>sindecorreia@gmail.com </p>
          </div>
        </div>
        {showCv && <img src={Cv} className='CvImage' alt='cv' />}
        <div className='worksExperience'>
          <h1> Professional experience</h1>
          {Jobs.map((work, index) => (
            <div key={index}>
              <div>
                <h2 onMouseEnter={() => handleWorkHover(index)} onMouseLeave={handleWorkLeave}>
                  {work.title}
                </h2>
              </div>
              <div>
                <h4>{work.time}</h4>
              </div>
              {selectedWork === index && <p>{work.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
