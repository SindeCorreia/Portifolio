import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import Homeblack from "./NavbarImg/Homeblack.png";
import Homegray from "./NavbarImg/Homegray.png";
import magnifierblack from "./NavbarImg/magnifierblack.png";
import magnifiergray from "./NavbarImg/magnifiergray.png";

function Navbar() {
  return (
    <div>
      <nav className="Navbardark">
        <div className="Navbar-left">
          <Link smooth to="/#house" id="houselink">
            <img src={Homegray} alt="" id="homeimg" />
            Home
          </Link>
        </div>
        <div className="Navbar-right">
          <Link smooth to="#Aboutme">
            About me
          </Link>
          <Link smooth to="/#Project">
            Project
          </Link>
          <Link smooth to="/#game">
            Game
          </Link>
          <Link smooth to="/#skill">
            Skill
          </Link>
          <div className="after">
            <Link smooth to="/magnifier">
              <img src={magnifiergray} alt="" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
