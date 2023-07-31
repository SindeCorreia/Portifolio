import React from "react";
import Bio from "./Bio/Bio"
import Random from "./RandomChoise/RandomChoise"
import Aboutme from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer'
import './Home.css';
function Home () {
return(
    <div>
        <div className="home">
            <div className="Bio">
                <Bio/>
            </div>
            <div className="Random">
                <Random/>
            </div>
        </div>
        <div><Footer/> </div>
        <div>
        <Aboutme/>
        </div>
    </div>
    )
 }
 export default Home;