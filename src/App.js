import { BrowserRouter , Routes , Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Feedback from'./Components/Feedback/Feedback';
import Help from'./Components/Help/Help';
import Home from './Components/Home/Home'

function App() {
  return (
    <div className="App">
      
      <div id='NavBar'><Navbar/></div>  
      <BrowserRouter>
       <Routes>
         <Route path="/feedback" element={<Feedback />} />
         <Route path="/magnifier" element={<Help />} />
         <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )}


export default App;
