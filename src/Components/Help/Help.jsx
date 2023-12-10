import React, { useState, useEffect } from "react";
import "./Help.css";
import PcAboutme from "./PcAboutme.png";
import PcFeedback from "./PcFeedback.png";
import PcGame from "./PcGame.png";
import PcHome from "./PcHome.png";
import PcProject from "./PcProject.png";
import PhoneAboutme1 from "./PhoneAboutme.png";
import PhoneAboutme2 from "./PhoneAboutme2.png";
import PhoneHome1 from "./PhoneHome1.png";
import PhoneHome2 from "./PhoneHome2.png";
import PhoneSkill from "./PhoneSkill.png";
import PhoneGame from "./PhoneGame.png";
import PhoneProject from "./PhoneProject.png";
import PhoneFeedback from"./PhoneFeedback.png";
import Figma from "./figma.png";

function Help() {
    const [PccurrentIndex, PcsetCurrentIndex] = useState(0);
    const [PhonecurrentIndex, PhonesetCurrentIndex] = useState(0);
  
    const PcimageList = [PcAboutme,PcFeedback,PcGame,PcHome,PcProject];
    const PhoneimageList = [PhoneAboutme1,PhoneAboutme2,  PhoneHome1,  PhoneHome2, PhoneSkill,  PhoneGame,  PhoneProject, PhoneFeedback];
  
    useEffect(() => {
      const phoneInterval = setInterval(() => {
        PhonesetCurrentIndex((prevIndex) =>
          prevIndex === PhoneimageList.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
  
      const pcInterval = setInterval(() => {
        PcsetCurrentIndex((prevIndex) =>
          prevIndex === PcimageList.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
  
      return () => {
        clearInterval(phoneInterval);
        clearInterval(pcInterval);
      };
    }, [PhonecurrentIndex, PccurrentIndex, PcimageList, PhoneimageList]);
  return (
    <div className="help">
        <div className="containerHelptext">
            <h2 className="Helptext">Portfolio of Sinde Correia: Developed with React, Integrated with APIs, and Fully Responsive
                My name is Sinde Correia, and I am delighted to present my portfolio, a digital expression of my work and passion for programming. I built this portfolio using React, a powerful JavaScript library for creating interactive user interfaces.
                Key Features:
                Developed with React: I used the efficiency and flexibility of React to create a dynamic and smooth user experience. React's modular structure allowed me to organize my code effectively and provide intuitive navigation for visitors.
                API Integration: To enhance the user experience, I integrated some relevant APIs into my portfolio. This not only adds dynamic functionalities but also provides visitors access to real-time information.
                Responsiveness: Recognizing the importance of accessibility across all devices, my portfolio is fully responsive. Regardless of the device used, visitors will have a consistent and enjoyable experience.
                Exploring my Portfolio:
                Home Page: An overview of my profile, highlighting my skills and area of expertise.
                Projects: A section dedicated to the projects I have developed, with details about the technology used and their functionality.
                GAME: A section dedicated to the games I have developed, with details about the technology used and their functionality.
                Skills: A section aiming to showcase some competencies that define me as an effective developer and collaborator. Here, I will discuss both my web development skills, also known as hard skills.
                My Commitment:
                I am dedicated to keeping my portfolio updated, reflecting my progress and continuous learning. I value innovation and the constant pursuit of improvement, both in design and functionality.
                Feel free to explore my portfolio and get in touch. I am excited to share my journey and learn from other professionals in the field. Thank you for taking the time to get to know my work.
                Warm regards,
                Sinde Correia 
            </h2>
        </div>
        <div className="Helpimg">
                <div className="PcImage"> <img src={PcimageList[PccurrentIndex]} alt="PcImage" id="PcImagechange"/></div>
                <div className="figaPhone">
                <div className="PhoneImage"><img src={PhoneimageList[PhonecurrentIndex]} alt="PhoneImage" id="PhoneImagechange"/></div>
                <figure className="madefigma">
                  <figcaption >MADE IN FIGMA</figcaption>
                  <img src={Figma} alt="Figma" />
                </figure>
                </div> 
        </div>
    </div>
  );
}

export default Help;
