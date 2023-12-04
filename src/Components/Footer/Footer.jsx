import React, { useState } from "react";
import "./Footer.css";
import Theme from "./ThemeButton/ThemeButton";
import Whatappblack from "./Footerimg/whatappblack.png";
import Whatappgray from "./Footerimg/whatsappgray.png";
import Instagramblack from "./Footerimg/instagramblack.png";
import Instagramgray from "./Footerimg/instagramgray.png";
import Helpblack from "./Footerimg/Helpblack.png";
import Helpgray from "./Footerimg/Helpgray.png";
import Feedbackblack from "./Footerimg/feedbackblack.png";
import Feedbackgray from "./Footerimg/feedbackgray.png";
import CopyRightblack from "./Footerimg/copyleftblack.png";
import CopyRightgray from "./Footerimg/copyleftgray.png";


function Footer() {
  const phoneNumber = '00351930630601'; 
  const message = 'Olá Sinde vim pelo portifólio !Tudo bem contigo';
  const whatsAppLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer className="footer">
      <img src={CopyRightgray} alt="CopyRight" className="footerimg" />
      <span style={{ color: 'gray' }}>CopyLeft 2023</span>
      <a href="/feedback">
        <img src={Feedbackgray} alt="Feedback" className="footerimg" />
      </a>
      <a href={whatsAppLink} target="_blank" rel="noopener noreferrer">
        <img src={Whatappgray} alt="Whatapp" className="footerimg" />
      </a>
      <a href="https://www.instagram.com/ani_matrix1/">
        <img src={Instagramgray} alt="Instagram" className="footerimg" />
      </a>
      <Theme />
      <a href="/help">
        <img src={Helpgray} alt="Whatapp" className="footerimg" />
      </a>
    </footer>
  );
}

export default Footer;
