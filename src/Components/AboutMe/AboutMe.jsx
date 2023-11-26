import React, { useState } from 'react';
import "./AboutMe.css";
import Education from './Education/Education';
import Contact from './Contact/Contact';

const AboutMe = () => {
  const [imagemVisivel, setImagemVisivel] = useState(false);
  const [imagemVisivelcv, setImagemVisivelcv] = useState(false);

  const kkk = () => {
    setImagemVisivelcv(true);
  };

  const mostrarImagem = () => {
    setImagemVisivel(true);
  };

  const naomostrarImagem = () => {
    setImagemVisivel(false);
  };

  const naokkk = () => {
    setImagemVisivelcv(false);
  };

  return (
    <div className='AboutMe'>
        <div className="Bio"> 
             <Education onButtonClick={mostrarImagem} imagemVisivelcv={imagemVisivelcv} naoimagemVisivelcv={naomostrarImagem} />
        </div>
        <div className="Random">  
            <Contact imagemVisivel={imagemVisivel} onButtonClickcv={kkk} nao={naokkk} />
        </div>
    </div>
  );
};

export default AboutMe;

  

