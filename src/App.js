import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Teste from './Components/teste';
import Navbar from './Components/NavBar/NavBar';
import Feedback from './Components/Feedback/Feedback';
import Help from './Components/Help/Help';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App"> 
        <Navbar />
        <Route path="/oo" component={Feedback} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
