import React, { useState } from 'react';
import "./AboutMe.css";
import { useMediaQuery } from "@react-hook/media-query";
import Education from './Education/Education';
import Contact from './Contact/Contact';

const AboutMe = () => {
  const [imagemVisivel, setImagemVisivel] = useState(false);


  const mostrarImagem = () => {
    setImagemVisivel(true);
  };

  const naomostrarImagem = () => {
    setImagemVisivel(false);
  };

  const [showEducation, setshowEducation] = useState(true);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const alternarComponente = () => {
    setshowEducation(!showEducation);
  };
  return (
  <div>
    {isMobile ? (
      <div className="AboutMe"> 
      <div className="Bio"> 
      <button onClick={alternarComponente}>Trocar Componente</button>
      {showEducation ? <Education /> : <Contact />}
      </div>
      </div>
    ) :(
    
    <div className='AboutMe'>
        <div className="Bio"> 
             <Education onButtonClick={mostrarImagem}  naoimagemVisivelcv={naomostrarImagem} />
        </div>
        <div className="Random">  
            <Contact imagemVisivel={imagemVisivel}  />
        </div>
    </div>)}
    </div>
  );
};

export default AboutMe;

  

