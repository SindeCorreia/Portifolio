import React, { useState } from 'react';
import "./ThemeButton.css"; 

function ThemeButton() {
  const [navColor, setNavColor] = useState(false);

  const switchNavColor = () => {
    setNavColor(!navColor);
  };
  
  return (
    <div className="">
      <label className="switch">
        <input type="checkbox" onClick={switchNavColor} />
        <span className="slider round"></span>
      </label>
      <div className={navColor ? 'NavbarLight' : 'Navbar'}>
      </div>
    </div>
  );
};

export default ThemeButton;










