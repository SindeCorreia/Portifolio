
import { Route, Routes ,  } from 'react-router-dom';
import React from 'react';
import Navbar from './Components/NavBar/NavBar';
import Feedback from './Components/Feedback/Feedback';
import Help from './Components/Help/Help';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Simon from './Components/Game/Simon/Simon';
import Cups from './Components/Game/Cups/Cups';
import Target from './Components/Game/Target/Target';
import Quiz from './Components/Game/Quiz/Quiz';
import Adventure from './Components/Game/Adventure/Adventure';
import Mario from './Components/Game/SuperMario/Supermario'
import MarioMenu from './Components/Game/SuperMario/MarioMenu';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/Simon" element={<Simon />} />
          <Route path="/Cups" element={<Cups />} />
          <Route path="/Target" element={<Target />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/Adventure" element={<Adventure />} />
          <Route path="/MarioMenu/Mario" element={<Mario />} />
          <Route path="/MarioMenu/" element={< MarioMenu />} />
        </Routes>
      <Footer />
    </div>
  );
};

export default App;

