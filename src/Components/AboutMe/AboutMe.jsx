import React from "react";
import "./AboutMe.css";
import Education from "./Education/Education";
import Contact from "./Contact/Contact"
function AboutMe  () {
return(
    <div>
        <div className="AboutMe">
            <div className="Bio">
                <Education/>
            </div>
            <div className="Random">
                <Contact/>
            </div>
        </div>
        <div>
        </div>
    </div>
)
}
 export default AboutMe;