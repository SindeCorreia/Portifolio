import React from "react";
import CSS from "./CSS/CSS";
import GitGitHub from "./GitGitHub/GitGitHub";
import HTML from "./HTML/HTML";
import JavaScript from "./JavaScript/JavaScript";
import MySQL from "./MySQL/MySQL";
import Python from "./Python/Python";
import NodeJs from "./NodeJs/NodeJs";
import ReactLearn from "./ReactLearn/ReactLearn"
import "./Skill.css";
function Skill  () {
return(
    <div className="skill">
        <CSS/>
        <GitGitHub/>
        <HTML/>
        <JavaScript/>
        <MySQL/>
        <Python/>
        <NodeJs/>
        <ReactLearn/>

    </div>
    )
 }
 export default Skill;