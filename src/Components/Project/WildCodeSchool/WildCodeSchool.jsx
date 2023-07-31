import React from "react";
import "./WildCodeSchool.css";
import Chess from "./Chess/Chess";
import Delivery from "./Delivery/Delivery";
import Nutripal from "./Nutripal/Nutripal";
import Shilfter from "./Silfter/Shilfter";
function WildCodeSchool () {
return(
    <div>
        <h1>WildCodeSchool</h1>
        <Chess/>
        <Delivery/>
        <Nutripal/>
        <Shilfter/>
    </div>
    )
 }
 export default WildCodeSchool;