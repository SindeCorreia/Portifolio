import {Link} from "react-router-dom"
import React from 'react';
import './Project.css';
import Shilfter from "./Shilfter.png"
import Tracker from "./Tracker.png"
import Portifolio from "./Portofolio.png"



function Project() {
  const cardsData = [
    {
      title: 'Shilfter',
      image:Shilfter,
      topText: 'Shilfter',
      routes:"/Shilfter",
      url:"https://github.com/SindeCorreia/Quiz",
      button1Text: 'PLAY',
      button2Text: 'DETAILS',
      description: 'I have used React to develop a responsive application that simulated a store with different products that could be added, searched, and wait-listed.',
      hidePlayButton: true,

    },
    {
      title: 'Calorie Tracker App',
      image: Tracker,
      topText: 'Calorie Tracker App',
      url:"https://github.com/orgs/NutriPall/repositories",
      routes:"/CalorieTracker ",
      button1Text: 'PLAY',
      button2Text: 'DETAILS',
      description: 'This application included an API integration to fetch the macro-nutrients in all ingredients and build recipes. The user would be able to see all details after choosing the recipes (calories, recipes).',
      hidePlayButton: true,
    },
    {
      title: 'Portifolio',
      image: Portifolio,
      topText: 'Portifolio',
      url:"https://github.com/SindeCorreia/Portifolio",
      button2Text: 'DETAILS',
      description: 'Essa aplicação react Inclui com informaçoes sobre sinde correia como projectos ,jogos ...A processo de criação dessa app e os game e projectos includos nela fez utilização de uma vas linguagem   .',
      hidePlayButton: true,
    },

]
return (
  <div>
    <div className="card-container">
      {cardsData.map((card, index) => (
        <div key={index} className="card">
          <div className="Imgtext">
          <img src={card.image} alt="Card" id="imageproject" />  
           <p className="card-description">{card.description}</p>
           </div>
          <div className="card-content">
            <h2>{card.topText}</h2>
            <div className="button-container">
            {!card.hidePlayButton && <Link to={card.routes}><button className="Play-button">{card.button1Text}</button></Link>}
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

//{
  //title: 'Delivery Website',
  //image: Portifolio,
  //topText: 'Delivery Website',
  //url:"https://github.com/SindeCorreia/Quiz",
  //routes:"/DeliveryWebsite",
  //button1Text: 'PLAY',
  //button2Text: 'DETAILS',
  //description: 'This delivery website allowed customers to order food after they log in or create their account with an encrypted password. I have used SQL and React.',
//}



 
