import React, { useState } from 'react';
import certificate from "./Certificado.png"
import "./Education.css"

function Education() {
    const [showCertificate, setShowCertificate] = useState(false);

    return (
        <div>
            <h1 
                className="EducationInformation" 
                onMouseEnter={() => setShowCertificate(true)} 
                onMouseLeave={() => setShowCertificate(false)}
            >
                Web Development, Wild Code School, Lisbon
            </h1>
            {showCertificate && <img src={certificate} alt="Certificate" className="CertificateImage" />}
            <p>FEBRUARY 2023 — MAY 2023</p> 
            <p>This is a three-month Full-stack Web development intensive training focused on JavaScript, HTML, and more technologies.</p>
            <h1 className="EducationInformation">Environmental Engineering (Unfinished), Instituto Superior de Agronomia, Lisbon</h1>
            <p>SEPTEMBER 2018 — JUNE 2021</p> 
        </div>
    )
}

export default Education;
