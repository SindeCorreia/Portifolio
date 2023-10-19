import React from "react";
import Bio from "./Bio/Bio"
import Random from "./RandomChoise/RandomChoise"
import Aboutme from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer'
import Project from '../Project/Project'
import Game from '../Game/Game'
import Skill from '../Skill/Skill'
import './Home.css';
function Home () {
return(
    <div>
        <div className="home" id="house">
            <div className="Bio">
                <Bio/>
            </div>
            <div className="Random">
                <Random/>
            </div>
        </div>
        <Footer/>
        <div>
        <div id="Aboutme"><Aboutme/></div>
        <Footer/> 
        <div id="Project"><Project/></div> 
        <Footer/> 
        <div id="game"><Game/></div>
        <Footer/> 
        <div id="skill"><Skill/></div>
        </div>
    </div>
    )
 }
 export default Home;