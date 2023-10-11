import { BrowserRouter , Routes , Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Game from "./Components/Game/Game";
import Project from './Components/Project/Project';
import Aboutme from './Components/AboutMe/AboutMe';
import Skill from './Components/Skill/Skill';
import Feedback from'./Components/Feedback/Feedback';
import Help from'./Components/Help/Help';
import Home from './Components/Home/Home'

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <BrowserRouter>
       <Routes>
         <Route path="/game" element={<Game />} />
         <Route path="/Project" element={<Project />} />
         <Route path="/Aboutme" element={<Aboutme />} />
         <Route path="/Project" element={<Project />} />
         <Route path="/Skill" element={<Skill />} />
         <Route path="/feedback" element={<Feedback />} />
         <Route path="/magnifier" element={<Help />} />
         <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )}


export default App;
