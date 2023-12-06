import React from 'react';
import { Link } from 'react-router-dom';
import SuperMariopng from "./SuperMario.jpg"
import Quiz from "./quizz.jpg"
import Simon from "./Simon.png"
import Target from "./Target Shooting.png"
import Cups from "./Cups and Balls.jpg"
import Iasinde from "./IAsinde.jpg"
import './Game.css';

function Game() {
  const cardsGame = [
    {
      title: 'SuperMario',
      image: SuperMariopng,
      topText: 'SuperMario',
      url:"https://github.com/SindeCorreia/Mariogame",
      routes:"/Mario",
      button1Text: 'PLAY',
      button2Text: 'DETAILS',
      description: " Welcome to Super Mario Jumper, a thrilling homage to the classic Super Mario Bros. Control Mario, jump skillfully, and conquer obstacles. Developed with CSS, HTML, and JavaScript, this game embodies standard web technologies.",
    },
    {
      title: 'Simon',
      image: Simon,
      topText: 'Simon',
      url:"https://github.com/SindeCorreia/Simon",
      routes:"/Simon",
      button1Text: 'PLAY',
      button2Text: 'DETAILS',
      description: 'Welcome to Simon Memory Challenge, an immersive game inspired by the electronic classic Simon. Challenge your memory and observation skills in this online version, experiencing captivating colorful sequences.Developed with JSX,CSS',

    },
    {
      title: 'Cups and Balls',
      image: Cups,
      topText: 'Cups and Balls',
      url:"https://github.com/SindeCorreia/Cups-and-Balls",
      routes:"/Cups",
      button1Text: 'PLAY',
      button2Text: 'DETAILS',
      description: 'Welcome to "Cups and Bars", a simple and engaging game that challenges your observation and memory skills!.'
    },
    {
      title: 'Target Shooting',
      image: Target,
      topText: 'Target Shooting',
      url:"https://github.com/SindeCorreia/Target-Shooting",
      routes:"/Target",
      button1Text: 'PLAY',
      button2Text: 'DETAILS',
      description: 'Welcome to Target Shooting, a captivating aiming game where you point and shoot with the mouse. Developed using Python, CSS, and HTML, this game provides an exciting experience, challenging your precision skills',

    },
    {
      title: 'Adventure Programmer',
      image:Iasinde,
      topText: 'Adventure Programmer',
      url:"https://github.com/SindeCorreia/Adventure-Programmer",
      routes:"/Adventure",
      button1Text: 'PLAY',
      button2Text: 'DETAILS',
      description: 'In the "Adventure Programmer" game, explore 2D virtual environments, solving logic puzzles and deciphering algorithms to reverse the damage caused by the Acifneb virus. Digital rescue is crucial, and only you have the skills to save the age of automation.',

    },
    {
      title: 'Quiz',
      image: Quiz,
      topText: 'Quiz',
      url:"https://github.com/SindeCorreia/Quiz",
      routes:"/Quiz",
      button1Text: 'PLAY',
      button2Text: 'DETAILS',
      description: 'Welcome to our exciting General Culture Quiz, where we will test your knowledge on different areas.Prepare for stimulating and fun challenges as you enhance your understanding of these essential topics. Lets start!',

    }, 
  ];

  return (
    <div>
      <div className="card-containerr">
        {cardsGame.map((card, index) => (
          <div key={index} className="card">
            <div className="Imgtext">
            <img src={card.image} alt="Card" className="card-image" />  
             <p className="card-description">{card.description}</p>
             </div>
            <div className="card-content">
              <h2>{card.topText}</h2>
              <div className="button-container">
           <Link to={card.routes}> <button className="Play-button">{card.button1Text}</button> </Link>
            <Link to={card.url} rel="noopener noreferrer" target="_blank"><button className="Code-button">{card.button2Text}</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Game;