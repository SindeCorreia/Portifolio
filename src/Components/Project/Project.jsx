import React from "react";
import WildCodeSchool from "./WildCodeSchool/WildCodeSchool";
import SelfTaught from "./SelfTaught/SelfTaught";
import InformationProject from "./InformationProject/InformationProject";
import "./Project.css";
function Project  () {
return(
    <div className="Allproject">
        <div className="Project"> 
            <WildCodeSchool/>
            <SelfTaught/>
        </div>
       <div className="InformationProject">
        <InformationProject/>
        </div>
    </div>
    )
 }
 export default Project;