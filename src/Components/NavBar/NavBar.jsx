import React from "react";
import "./NavBar.css";
import Homeblack from "./NavbarImg/Homeblack.png";
import Homegray from "./NavbarImg/Homegray.png";
import magnifierblack from "./NavbarImg/magnifierblack.png";
import magnifiergray from "./NavbarImg/magnifiergray.png";

function Navbar() {
  return (
    <div>
      <nav className="Navbardark">
        <div className="Navbar-left">
          <a smooth to="/#house" id="houselink">
            <img src={Homegray} alt="" id="homeimg" />
            Home
          </a>
        </div>
        <div className="Navbar-right">
          <a smooth to="/#Aboutme">
            About me
          </a>
          <a smooth to="/#Project">
            Project
          </a>
          <a smooth to="/#game">
            Game
          </a>
          <a smooth to="/#skill">
            Skill
          </a>
          <div className="after">
            <a smooth to="/magnifier">
              <img src={magnifiergray} alt="" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
