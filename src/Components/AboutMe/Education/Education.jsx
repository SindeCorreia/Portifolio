
import React from 'react';
import Cv from '../Contact/Cv.png';
import Dowload from "./Dowload.png"
import WIldcode from "./wildcode.png"
import "./Education.css";
import I from './i.png';

function Education({ onButtonClick,  naoimagemVisivelcv}) {

    return (
        <div className='Educationfather'>     

            <h1 
                className={"EducationInformation" } 
                
            >
                Web Development, Wild Code School, Lisbon 
                <img onMouseEnter={onButtonClick}
                onMouseLeave={naoimagemVisivelcv} src={I} alt="" className='Iicon'/>
            </h1>

            <p >FEBRUARY 2023 — MAY 2023</p> 
            <p >This is a three-month Full-stack Web development intensive training focused on JavaScript, HTML, and more technologies.</p>
            <h1 className="EducationInformation">Environmental Engineering (Unfinished), Instituto Superior de Agronomia, Lisbon</h1>
            <p>SEPTEMBER 2018 — JUNE 2021</p> 
            <div className='downloadpdf'>
              <a href={process.env.PUBLIC_URL + '/Sinde_Correia_Web_Developer.pdf'} target="blank" className='linkimgdownloadcv'> <img src={Dowload} alt="CURRICULUM" id="imgdownloadcv"/>DOWNLOAD RESUME </a>
              <a href={process.env.PUBLIC_URL + '/CertificadoSinde.pdf'} download="CertificadoSinde.pdf" className='linkWIldcode'> <img src={WIldcode} alt="Certificado" id="imgdownloadwild" />DOWNLOAD CERTIFICADE  </a>
            </div>
        </div>
    )
}
export default Education;