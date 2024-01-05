
import { Route, Routes ,  } from 'react-router-dom';
import React from 'react';
import Navbar from './Components/NavBar/NavBar';
import Feedback from './Components/Feedback/Feedback';
import Help from './Components/Help/Help';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/Help" element={<Help />} />
        </Routes>
      <Footer />
    </div>
  );
};

export default App;

