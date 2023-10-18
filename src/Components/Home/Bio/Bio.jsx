import React from "react";
import "./Bio.css";
import GitHub from "./GitHub/GitHub";
import Linkedin from "./Linkedin/Linkedin";
function Bio () {
return(
    <div >
        <div className="description">
            <h1>Sinde Jorge Jesus Correiaa</h1>
            <h1>Web developer Full-stack </h1>
            <p>I have recently completed an intensive </p> 
            <p>program in coding, I am looking forward to </p>
            <p>exploring job opportunities within the </p>
            <p>front-end and full-stack areas</p>     
        </div>
            <div className="Link">
                <div className="GitHub">
                    <a href="https://github.com/SindeCorreia" target="_blank"><GitHub/></a>
                </div>
                <div className="Linkedin">
                    <a href="https://www.linkedin.com/in/sinde-correia" target="_blank"><Linkedin/></a>
                </div>
            </div>
    </div>
    )
 }
 export default Bio;