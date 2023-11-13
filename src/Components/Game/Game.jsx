import React from 'react';
import SuperMariopng from "./SuperMario.jpg"
import Quiz from "./quizz.jpg"
import Simon from "./Simon.png"
import Target from "./Target Shooting.png"
import Cups from "./Cups and Balls.jpg"

import './Game.css';

function Game() {
  const cardsGame = [
    {
      title: 'SuperMario',
      image: SuperMariopng,
      topText: 'SuperMario',
      url:"https://github.com/SindeCorreia/Mariogame",
      button1Text: 'PLAY',
      button2Text: 'CODE',
      description: 'Todo o texto associado a essa imagem tem como objetivo fazer uma explicação mais precisa possível sobre o assunto. Qualquer dúvida, clique no help no canto da tela.',
    },
    {
      title: 'Simon',
      image: Simon,
      topText: 'Simon',
      url:"https://github.com/SindeCorreia/Simon",
      button1Text: 'PLAY',
      button2Text: 'CODE',
      description: 'Todo o texto associado a essa imagem tem como objetivo fazer uma explicação mais precisa possível sobre o assunto. Qualquer dúvida, clique no help no canto da tela.',

    },
    {
      title: 'Target Shooting',
      image: Target,
      topText: 'Target Shooting',
      url:"https://github.com/SindeCorreia/Target-Shooting",
      button1Text: 'PLAY',
      button2Text: 'CODE',
      description: 'Todo o texto associado a essa imagem tem como objetivo fazer uma explicação mais precisa possível sobre o assunto. Qualquer dúvida, clique no help no canto da tela.',

    },
    {
      title: 'Adventure Programmer',
      image: 'https://via.placeholder.com/150',
      topText: 'Adventure Programmer',
      url:"https://github.com/SindeCorreia/Adventure-Programmer",
      button1Text: 'PLAY',
      button2Text: 'CODE',
      description: 'Todo o texto associado a essa imagem tem como objetivo fazer uma explicação mais precisa possível sobre o assunto. Qualquer dúvida, clique no help no canto da tela.',

    },
    {
      title: 'Quiz',
      image: Quiz,
      topText: 'Quiz',
      url:"https://github.com/SindeCorreia/Quiz",
      button1Text: 'PLAY',
      button2Text: 'CODE',
      description: 'Todo o texto associado a essa imagem tem como objetivo fazer uma explicação mais precisa possível sobre o assunto. Qualquer dúvida, clique no help no canto da tela.',

    },
    {
      title: 'Cups and Balls',
      image: Cups,
      topText: 'Cups and Balls',
      url:"https://github.com/SindeCorreia/Cups-and-Balls",
      button1Text: 'PLAY',
      button2Text: 'CODE',
      description: 'Todo o texto associado a essa imagem tem como objetivo fazer uma explicação mais precisa possível sobre o assunto. Qualquer dúvida, clique no help no canto da tela.'
    }
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
            <button className="Play-button">{card.button1Text}</button>
            <a href={card.url} rel="noopener noreferrer" target="_blank"><button className="Code-button">{card.button2Text}</button></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Game;