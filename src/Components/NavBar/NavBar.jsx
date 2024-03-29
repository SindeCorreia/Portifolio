import React, { useState } from 'react';
import "./NavBar.css";
import { HashLink as Link } from "react-router-hash-link";
import Homegray from "./NavbarImg/Homegray.png";

function Navbar ()  {
    const scrollToOffset = (id) => {
        const element = document.getElementById(id);
        const offset = element.offsetTop - document.querySelector('.Navbardark').offsetHeight + 100;
        window.scrollTo({
          top: offset,
          behavior: 'smooth',
        });
      };
  
  return (
    <div>
      <nav className="Navbardark">
        <div className="Navbar-left">
          <Link to="/#house" id="houselink" onClick={() => scrollToOffset('house')}>
            <img src={Homegray} alt="" id="homeimg" />
            <span id="spanhome"> Home</span>
          </Link>
        </div>
        <div className="Navbar-right">
          <Link to="/#Aboutme" onClick={() => scrollToOffset('Aboutme')}>
            About me
          </Link>
          <Link to="/#Project" onClick={() => scrollToOffset('Project')}>
            Projects
          </Link>
          <Link to="/#game" onClick={() => scrollToOffset('game')}>
            Games
          </Link>
          <Link to="/#skill" onClick={() => scrollToOffset('skill')}>
            Skills
          </Link>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;


{/*const Datasearch = [
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
  ] */}


{/*<div className="magnifier">
            <img src={magnifiergray} alt="magnifiergray" className='magnifiergray' onClick={handleLupaClick}/>
            {mostrarBarraPesquisa && (<input type="text" placeholder="Digite sua pesquisa" className="barra-pesquisa"/>)}
</div>*/}