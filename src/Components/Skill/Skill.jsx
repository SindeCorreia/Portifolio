/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import cssimg from "./Css.png";
import GitGitHubImg from "./GitGitHub.png";
import Htmlimg from "./html.png";
import JavaScriptimg from "./Javascript.png";
import MySqlimg from "./MySQL.png";
import Nodeimg from "./NodeJs.png";
import python from "./Python.png";
import Reactimg from "./React.png";
import "./Skill.css";

function Skill() {
  const [currentSkill, setCurrentSkill] = useState(null);

  const showSkillDescription = (skill) => {
    setCurrentSkill(skill);
  };

  const hideSkillDescription = () => {
    setCurrentSkill(null);
  };

  return (
    <div className="Ability">
      <div className="Skill">
        <div className="Skill1">
          <img
            src={cssimg}
            className="skillimg"
            onMouseOver={() => showSkillDescription(<>CSS is a style language used to control the visual presentation of HTML pages. Knowledge:<br/><strong className="know">knowledge</strong>:Good. </>)}
            onMouseOut={hideSkillDescription}
          />
          <img
            src={GitGitHubImg}
            className="skillimg"
            onMouseOver={() => showSkillDescription(<>GitHub is a code hosting platform using the Git version control system.<br/><strong className="know">knowledge</strong>:good.</>)}
            onMouseOut={hideSkillDescription}
          />
          <img
            src={Htmlimg}
            className="skillimg"
            onMouseOver={() => showSkillDescription(<>HTML is the standard language for creating and structuring content on web pages.<br/><strong className="know">knowledge</strong>:good.</>)}
            onMouseOut={hideSkillDescription}
          />
          <img
            src={JavaScriptimg}
            className="skillimg"
            onMouseOver={() => showSkillDescription(<>JavaScript is a high-level, dynamic programming language.<br/><strong className="know">knowledge</strong>:good.</>)}
            onMouseOut={hideSkillDescription}
          />
        </div>
        <div className="Skill2">
          <img
            src={MySqlimg}
            className="skillimg"
            onMouseOver={() => showSkillDescription(<>MySQL is a relational database management system .<br/><strong className="know">knowledge</strong>:middle.</>)}
            onMouseOut={hideSkillDescription}
          />
          <img
            src={Nodeimg}
            className="skillimg"
            onMouseOver={() => showSkillDescription(<>Node.js is a runtime environment that allows the execution of JavaScript code on the server side.<br/><strong className="know">knowledge</strong>:middle.</>)}
            onMouseOut={hideSkillDescription}
          />
          <img
            src={python}
            className="skillimg"
            onMouseOver={() => showSkillDescription(<>Python is a high-level, interpreted, general-purpose programming language.<br/><strong className="know">knowledge</strong>:middle.</>)}
            onMouseOut={hideSkillDescription}
          />
          <img
            src={Reactimg}
            className="skillimg"
            onMouseOver={() => showSkillDescription(<>React is a JavaScript library maintained by Facebook for building interactive user interfaces.<br/><strong className="know">knowledge</strong>:Good.</>)}
            onMouseOut={hideSkillDescription}
          />
        </div>
      </div>
      <div className="SkillDescription">
        {currentSkill && (
          <h1 id={`${currentSkill}Description`}>
            {currentSkill} 
          </h1>
        )}
      </div>
    </div>
  );
}

export default Skill;
