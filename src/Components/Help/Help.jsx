import React from "react";
import "./Help.css";
import { useLocation } from 'react-router-dom';

function Routesnavabar() {
    const location = useLocation();
    console.log(location.pathname);}
function Help  () {
return(
    <div>
        <h1>Help</h1>
    </div>
    )
 }
 export default Help;