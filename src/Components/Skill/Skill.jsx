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
            onMouseOver={() => showSkillDescription("css")}
            onMouseOut={hideSkillDescription}
          />
          <img
            src={GitGitHubImg}
            className="skillimg"
            onMouseOver={() => showSkillDescription("git")}
            onMouseOut={hideSkillDescription}
          />
          <img
            src={Htmlimg}
            className="skillimg"
            onMouseOver={() => showSkillDescription("html")}
            onMouseOut={hideSkillDescription}
          />
          <img
            src={JavaScriptimg}
            className="skillimg"
            onMouseOver={() => showSkillDescription("js")}
            onMouseOut={hideSkillDescription}
          />
        </div>
        <div className="Skill2">
          <img
            src={MySqlimg}
            className="skillimg"
            onMouseOver={() => showSkillDescription("mysql")}
            onMouseOut={hideSkillDescription}
          />
          <img
            src={Nodeimg}
            className="skillimg"
            onMouseOver={() => showSkillDescription("node")}
            onMouseOut={hideSkillDescription}
          />
          <img
            src={python}
            className="skillimg"
            onMouseOver={() => showSkillDescription("python")}
            onMouseOut={hideSkillDescription}
          />
          <img
            src={Reactimg}
            className="skillimg"
            onMouseOver={() => showSkillDescription("react")}
            onMouseOut={hideSkillDescription}
          />
        </div>
      </div>
      <div className="SkillDescription">
        {currentSkill && (
          <h1 id={`${currentSkill}Description`}>
            {currentSkill} - Descrição da habilidade
          </h1>
        )}
      </div>
    </div>
  );
}

export default Skill;
