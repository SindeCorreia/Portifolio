import React from "react";
import Bio from "./Bio/Bio"
import Random from "./RandomChoise/RandomChoise"
import Aboutme from '../AboutMe/AboutMe';
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
        <div id="Aboutme">
        <h1 className="titles">ABOUT ME</h1>
            <Aboutme/>
        </div> 
        <h1 className="titles">PROJECT</h1>
        <div id="Project">
            <Project/>
        </div> 
        <div id="game">
        <h1 className="titles">GAME</h1>
            <Game/>
        </div>
        <h1 className="titles">SKILL</h1>
        <div id="skill">
            <Skill/>
        </div>   
    </div>
    )
 }
 export default Home;