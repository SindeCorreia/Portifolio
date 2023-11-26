import React, { useState } from 'react';
import "./ThemeButton.css"; 
const ThemeButton = () => {
  const [temaClaro, setTemaClaro] = useState(true);

  const toggleTema = () => {
    setTemaClaro((prevTemaClaro) => !prevTemaClaro);
    updateNavColor();
  };

  const updateNavColor = () => {
    const root = document.documentElement;
    const body = document.body;
    const navColorVariable = '--nav-color';
    const bodyColor1Variable = '--body-color1';
    const bodyColor2Variable = '--body-color2';

    root.style.setProperty(navColorVariable, temaClaro ? '#010e1b' : 'white');
    root.style.setProperty(bodyColor1Variable, temaClaro ? '#001469' : 'white');
    root.style.setProperty(bodyColor2Variable, temaClaro ? 'rgb(42, 90, 145)' : 'white');
  };
  return (
    <div className={temaClaro ? 'app claro' : 'app escuro'}>
      <label className="switch">
        <input type="checkbox" onChange={toggleTema} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ThemeButton;

