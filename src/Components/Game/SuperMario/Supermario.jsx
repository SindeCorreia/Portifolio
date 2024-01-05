import React, { useState, useEffect } from "react";
import Clouds from "./Images/clouds.png";
import MarioImage from "./Images/mario.gif";
import PipeImage from "./Images/pipe.png";
import GameOver from "./Images/game-over.png";
import "./Supermario.css";

function Supermario() {
  const [isJumping, setIsJumping] = useState(false);

  const jump = () => {
    setIsJumping(true);
    setTimeout(() => {
      setIsJumping(false);
    }, 500);
  };

  const handleKeyDown = () => {
    jump();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const pipe = document.querySelector('.pipe');
    const mario = document.querySelector('.mario')

    const loop = setInterval(() => {
      const pipePosition = pipe.offsetLeft;
      const marioPosition =+window.getComputedStyle(mario).bottom.replace("px","");

      if (pipePosition <= 120 && pipePosition > 0 && marioPosition<=80){
        pipe.style.animation="none"
        pipe.style.left=`${pipePosition}px`

        mario.style.animation="none" ;
        mario.style.bottom=`${marioPosition}px`;
        mario.src=GameOver ;
        mario.style.width="75px";
        mario.style.marginLeft="50px";
        clearInterval(loop)
      }
    },10);

    return () => {
      clearInterval(loop);
    };
  }, []); 

  return (
    <div className={`GameMaroioBoard ${isJumping ? "jump" : ""}`}>
      <div className="game-board">
        <img src={Clouds} alt="clouds" className="clouds" />
        <img
          src={MarioImage}
          alt=""
          className={`mario ${isJumping ? "jump" : ""}`}
        />
        <img src={PipeImage} alt="hurdle" className="pipe" />
      </div>
    </div>
  );
}

export default Supermario; 
