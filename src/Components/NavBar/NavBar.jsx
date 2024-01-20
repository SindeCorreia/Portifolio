import React, { useState } from 'react';
import "./NavBar.css";
import { HashLink as Link } from "react-router-hash-link";
import Homeblack from "./NavbarImg/Homeblack.png";
import Homegray from "./NavbarImg/Homegray.png";
import magnifierblack from "./NavbarImg/magnifierblack.png";
import magnifiergray from "./NavbarImg/magnifiergray.png";

const Navbar= () => {
    const [mostrarBarraPesquisa, setMostrarBarraPesquisa] = useState(false);

  const handleLupaClick = () => {
    setMostrarBarraPesquisa(!mostrarBarraPesquisa);
  
 const Datasearch = [
  {
      name:"Curriculum ",
      image:"picture",
      link:"www.sindecorreia.pt",
      id:"1",
  },
  {
      name:"Certificate",
      image:"picture",
      link:"www.sindecorreia.pt",
      id:"2",

  },
  {
      name:"Shilfter",
      image:"picture",
      link:"www.sindecorreia.pt",
      id:"3",
  },
  {
      name:"Calory app",
      image:"picture",
      link:"www.sindecorreia.pt",
      id:"4"
  },
  {
      name:"Portifólio",
      image:"picture",
      link:"www.sindecorreia.pt",
      id:"5",
  },
  {
      name:"SuperMario",
      image:"picture",
      link:"www.sindecorreia.pt",
      id:"6",
  },
  {
      name:"Simon",
      image:"picture",
      link:"www.sindecorreia.pt",
      id:"7",
  },
  {
      name:"Cups and Balls",
      image:"picture",
      link:"www.sindecorreia.pt",
      id:"8",
  },
  {
      name:"Target Shooting",
      image:"picture",
      link:"www.sindecorreia.pt",
      id:"9",
  },
  {
      name:"Adventure Programmer",
      image:"picture",
      link:"www.sindecorreia.pt",
      id:"10",
  },
  {
      name:"Quiz",
      image:"picture",
      link:"www.sindecorreia.pt",
      id:"11",
  },
  {
      name:"Help",
      image:"picture",
      link:"www.sindecorreia.pt",
      id:"12",
  },
  {
      name:"Feedback",
      image:"picture",
      link:"www.sindecorreia.pt",
      id:"13",
  },
  {
      name:"whatsapp",
      image:"picture",
      link:"www.sindecorreia.pt",
      id:"14",

  },
  {
      name:"Instagram",
      image:"picture",
      link:"www.sindecorreia.pt",
      id:"15",
  },
  {
      name:"CSS",
      image:"picture",
      link:"www.sindecorreia.pt",
      id:"16",
  },{
      name:"GitHub",
      image:"picture",
      link:"www.sindecorreia.pt",
      id:"17",
  },{
      name:"Git bash",
      image:"picture",
      link:"www.sindecorreia.pt",
      id:"18",
  },{
      name:"HTML",
      image:"picture",
      link:"www.sindecorreia.pt",
      id:"19",
  },{
      name:"JavaScript",
      image:"picture",
      link:"www.sindecorreia.pt",
      id:"20",
  },{
      name:"MySQL",
      image:"picture",
      link:"www.sindecorreia.pt",
      id:"21",
  },{
      name:"Node.js",
      image:"picture",
      link:"www.sindecorreia.pt",
      id:"22",
  },{
      name:"Python",
      image:"picture",
      link:"www.sindecorreia.pt",
      id:"23",
  },{
      name:"React",
      image:"picture",
      link:"www.sindecorreia.pt",
      id:"24",
  },
]
};
  return (
    <div>
      <nav className="Navbardark">
        <div className="Navbar-left">
          <Link smooth to="/#house" id="houselink">
            <img src={Homegray} alt="" id="homeimg" />
           <span id='spanhome'> Home</span>
          </Link>
        </div>
        <div className="Navbar-right">
          <Link smooth to="/#Aboutme">
            About me
          </Link>
          <Link smooth to="/#Project">
            Projects
          </Link>
          <Link smooth to="/#game">
            Games
          </Link>
          <Link smooth to="/#skill">
            Skills
          </Link>
          <div className="magnifier">
            <img src={magnifiergray} alt="magnifiergray" className='magnifiergray' onClick={handleLupaClick}/>
            {mostrarBarraPesquisa && (<input type="text" placeholder="Digite sua pesquisa" className="barra-pesquisa"/>)}
            </div>
        </div>
      </nav>
    </div>
  );
} 
export default Navbar;
