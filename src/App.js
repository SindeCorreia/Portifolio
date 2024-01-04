import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Teste from './Components/teste';
import Navbar from './Components/NavBar/NavBar';
import Feedback from './Components/Feedback/Feedback';
import Help from './Components/Help/Help';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';

function App() {
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
}

export default App;
