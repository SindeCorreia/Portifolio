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
            <div className="Game1"><Game1/></div>
            <div className="Game2"><Game2/></div>
            <div className="Game3"><Game3/></div>
        </div>
        <div className="gamedown">
            <div className="Game4"><Game4/></div>
            <div className="Game5"><Game5/></div>
            <div className="Game6"><Game6/></div>
        
        </div>
    </div>
    
    )
 }
 export default Game;