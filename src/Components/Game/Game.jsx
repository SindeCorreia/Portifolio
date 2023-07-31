import React from "react";
import "./Game.css";
import Game1 from "./Game1/Game1";
import Game2 from "./Game2/Game2";
import Game3 from "./Game3/Game3";
import Game4 from "./Game4/Game4";
import Game5 from "./Game5/Game5";
import Game6 from "./Game6/Game6";
function Game () {
return(
    <div className="game">
        <div className="gameup">
            <Game1/>
            <Game2/>
            <Game3/>
        </div>
        <div className="gamedown">
            <Game4/>
            <Game5/>
            <Game6/>
        
        </div>
    </div>
    
    )
 }
 export default Game;