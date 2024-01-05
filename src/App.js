
import { Link, Route, Routes , Router } from 'react-router-dom';
import React from 'react';
import Navbar from './Components/NavBar/NavBar';
import Feedback from './Components/Feedback/Feedback';
import Help from './Components/Help/Help';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feedback />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;

