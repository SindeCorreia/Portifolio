import React from "react" ;
import "./NavBar.css";
import Homeblack from "./NavbarImg/Homeblack.png";
import Homegray from "./NavbarImg/Homegray.png";
import magnifierblack from "./NavbarImg/magnifierblack.png";
import magnifiergray from "./NavbarImg/magnifiergray.png";


function Navbar (){
return (
    <div>
        <nav className="Navbardark">
            <div className="Navbar-left">
                <a href="/#house" id="houselink"><img src={Homegray} alt="" id="homeimg"/>Home</a>
                </div>
            <div className="Navbar-right">
                <a href="/#Aboutme">About me</a>
                 <a href="/#Project">Project</a>
                <a href="/#game">Game</a>
                <a href="/#skill">Skill</a>
                <div className="after">
                    <a href="/magnifier"><img src={magnifiergray} alt=""/></a>
                </div> 
            </div>
        </nav>
</div>
)
}
export default Navbar;