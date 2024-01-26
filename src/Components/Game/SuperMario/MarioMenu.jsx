import React from 'react';
import Clouds from "./Images/clouds.png";
import "./MarioMenu.css";

function MarioMenu() {
  return (
    <div className={"GameMaroioBoard"}>
      <div className="game-board">
      <img src={Clouds} alt="clouds" className="clouds" />
        <div className='container' >
           <a href="/MarioMenu/Mario" className='containerbutton'>Play</a> 
            <a href="/MarioMenu/Table" className='containerbutton'>Table</a>
            <a href="/MarioMenu/Information" className='containerbutton'>Credits</a>     
        </div>
      </div>
    </div>
  );
}

export default MarioMenu;
