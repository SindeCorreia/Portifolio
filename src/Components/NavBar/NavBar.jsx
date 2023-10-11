import React from "react" ;
import "./NavBar.css";
import homeimg from "./NavbarImg/home.png";
import magnifier from "./NavbarImg/magnifier.png";
function Navbar (){
return (
    <div>
        <nav className="Navbar">
            <div className="Navbar-left">
                <a href="/"><img src={homeimg}/>Home</a>
                </div>
            <div className="Navbar-right">
                <a href="/game">Game</a>
                <a href="/Aboutme">About me</a>
                <a href="/Project">Project</a>
                <a href="/skill">Skill</a>
                <div className="after">
                    <a href="/magnifier"><img src={magnifier}/></a> 
                </div> 
            </div>
        </nav>
</div>

)
}
export default Navbar;