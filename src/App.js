
import { Link, Route, Routes , Router as WouterRouter} from 'wouter';
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
      <WouterRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feedback />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </WouterRouter>
      <Footer />
    </div>
  );
};

export default App;

