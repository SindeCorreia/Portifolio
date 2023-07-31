import React from "react" ;
import "./NavBar.css";
function Navbar (){
return (
    <div>
        <nav className="Navbar">
            <a href="/">Home</a>
            <a href="/game">Game</a>
            <a href="/Aboutme">About me</a>
            <a href="/Project">Project</a>
            <a href="/skill">Skill</a>
            <a href="/lupa">lupa</a>
            <a href="/works">works</a>
        </nav>
    </div>
)
}
export default Navbar;