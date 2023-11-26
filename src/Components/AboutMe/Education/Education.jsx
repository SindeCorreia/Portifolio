
import React from 'react';
import Cv from '../Contact/Cv.png';
import "./Education.css";


import "./Education.css"

function Education({ onButtonClick, imagemVisivelcv, naoimagemVisivelcv}) {

    return (
        <div className='Educationfather'>     

            <h1 
                className={`EducationInformation ${imagemVisivelcv ?"none":""}`} 
                onMouseEnter={onButtonClick}
                onMouseLeave={naoimagemVisivelcv}
            >
                Web Development, Wild Code School, Lisbon
            </h1>
            {imagemVisivelcv && <img src={Cv} className='CvImage' alt="Imagem" />}

            <p className={` ${imagemVisivelcv ?"none":""}`}>FEBRUARY 2023 — MAY 2023</p> 
            <p className={` ${imagemVisivelcv ?"none":""}`}>This is a three-month Full-stack Web development intensive training focused on JavaScript, HTML, and more technologies.</p>
            <h1 className="EducationInformation">Environmental Engineering (Unfinished), Instituto Superior de Agronomia, Lisbon</h1>
            <p>SEPTEMBER 2018 — JUNE 2021</p> 
        </div>
    )
}

export default Education;



/* Education Component
import Cv from "../Contact/Cv.png";
import React from 'react';

function Education({ onButtonClick, imagemVisivelcv, naoimagemVisivelcv }) {
  return (
    <div>
      <button
        onMouseEnter={onButtonClick}
        onMouseLeave={naoimagemVisivelcv}
      >
        Education
      </button>
      {imagemVisivelcv && <img src={Cv} alt="Imagem" />}
    </div>
  );
};
export default Education;*/

