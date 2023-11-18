import {Link} from "react-router-dom"
import React from 'react';
import './Project.css';

function Project() {
  const cardsData = [
    {
      title: 'Shilfter',
      image: 'https://via.placeholder.com/150',
      topText: 'Shilfter',
      routes:"/Shilfter",
      url:"https://github.com/SindeCorreia/Quiz",
      button1Text: 'PLAY',
      button2Text: 'DETAILS',
      description: 'I have used React to develop a responsive application that simulated a store with different products that could be added, searched, and wait-listed.',
    },
    {
      title: 'Calorie Tracker App',
      image: 'https://via.placeholder.com/150',
      topText: 'Calorie Tracker App',
      url:"https://github.com/orgs/NutriPall/repositories",
      routes:"/CalorieTracker ",
      button1Text: 'PLAY',
      button2Text: 'DETAILS',
      description: 'This application included an API integration to fetch the macro-nutrients in all ingredients and build recipes. The user would be able to see all details after choosing the recipes (calories, recipes).',
    },
    {
      title: 'Delivery Website',
      image: 'https://via.placeholder.com/150',
      topText: 'Delivery Website',
      url:"https://github.com/SindeCorreia/Quiz",
      routes:"/DeliveryWebsite",
      button1Text: 'PLAY',
      button2Text: 'DETAILS',
      description: 'This delivery website allowed customers to order food after they log in or create their account with an encrypted password. I have used SQL and React.',
    },

]
return (
  <div>
    <div className="card-container">
      {cardsData.map((card, index) => (
        <div key={index} className="card">
          <div className="Imgtext">
          <img src={card.image} alt="Card" className="card-image" />  
           <p className="card-description">{card.description}</p>
           </div>
          <div className="card-content">
            <h2>{card.topText}</h2>
            <div className="button-container">
            <Link to={card.routes}><button className="Play-button">{card.button1Text}</button></Link>
             <a href={card.url} rel="noopener noreferrer" target="_blank"><button className="Code-button">{card.button2Text}</button></a> 
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

export default Project;

 
