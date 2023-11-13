import React, { useState } from "react";
import Theme from "./ThemeButton/ThemeButton";
import "./Footer.css";
import Whatapp from "./whatapp.png";
import Instagram from "./instagram.png";
import Help from "./Help.png";
import Feedback from "./feedback.png";
import CopyRight from "./copyright-symbol.png";

function Footer() {
  const [currentFooter, setCurrentFooter] = useState(null);
  const [showFoot, setShowFoot] = useState(false);

  const handleMouseEnter = () => {
    setCurrentFooter("Precisa de ajuda?");
    setShowFoot(true);
  };

  const handleMouseLeave = () => {
    setCurrentFooter(null);
    setShowFoot(false);
  };

  return (
    <footer className="footer">
      {showFoot && <div>{currentFooter}</div>}
      <img src={CopyRight} alt="CopyRight" className="footerimg" />
      CopyRight 2023
      <a href="/feedback">
        <img src={Feedback} alt="Feedback" className="footerimg" />
      </a>
      <a href="/">
        <img src={Whatapp} alt="Whatapp" className="footerimg" />
      </a>
      <a href="https://www.instagram.com/ani_matrix1/">
        <img src={Instagram} alt="Instagram" className="footerimg" />
      </a>
      <Theme />
      <a href="/help" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img src={Help} alt="Whatapp" className="footerimg" />
      </a>
    </footer>
  );
}

export default Footer;
