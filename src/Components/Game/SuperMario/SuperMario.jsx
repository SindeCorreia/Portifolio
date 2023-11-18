import React, { useState, useEffect, useRef } from "react";
import Clouds from "./Images/clouds.png";
import MarioImage from "./Images/mario.gif";
import PipeImage from "./Images/pipe.png"; 
import GameOverImage from "./Images/game-over.png"; 
import "./Supermario.css";

function Supermario() {
  const [isJumping, setIsJumping] = useState(false);
  const [pipePosition, setPipePosition] = useState(0);
  const [marioPosition, setMarioPosition] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const pipeRef = useRef(null);
  const marioRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === " ") {
        setIsJumping(true);
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === " ") {
        setIsJumping(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const loop = setInterval(() => {
      // Replace pipeRef and marioRef with the correct references to your DOM elements
      const pipePosition = pipeRef.current ? pipeRef.current.offsetLeft : 0;
      const marioPosition = marioRef.current
        ? +window.getComputedStyle(marioRef.current).bottom.replace("px", "")
        : 0;

      console.log(marioPosition);

      // Add logic for updating positions and checking game over conditions
      // ...

    }, 1000);

    return () => clearInterval(loop);
  }, []);

  useEffect(() => {
    const loop = setInterval(() => {
      if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        setPipePosition(pipePosition);
        setMarioPosition(marioPosition);
        setIsGameOver(true);
        clearInterval(loop);
      }
    }, 10);

    document.addEventListener("keydown", jump);

    return () => {
      clearInterval(loop);
      document.removeEventListener("keydown", jump);
    };
  }, [pipePosition, marioPosition]);

  const jump = () => {
    // Implement jump logic here
  };

  return (
    <div className={`game-board ${isGameOver ? "game-over" : ""}`}>
      <img src={Clouds} alt="clouds" className="clouds" />
      <img
        src={isGameOver ? GameOverImage : MarioImage}
        alt={isGameOver ? "Game Over" : "SuperMario"}
        className={`mario ${isGameOver ? "game-over" : ""}`}
        ref={marioRef}
        style={{
          bottom: `${marioPosition}px`,
          animation: "none",
          width: isGameOver ? "75px" : "auto",
          marginLeft: isGameOver ? "50px" : "auto",
        }}
      />
      <img
        src={PipeImage}
        alt="hurdle"
        className="pipe"
        ref={pipeRef}
        style={{
          animation: "none",
          left: `${pipePosition}px`,
        }}
      />
    </div>
  );
}

export default Supermario;
