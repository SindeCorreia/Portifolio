import { BrowserRouter , Routes , Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Feedback from'./Components/Feedback/Feedback';
import Help from'./Components/Help/Help';
import Home from './Components/Home/Home';
import Mario from './Components/Game/SuperMario/Supermario';
import Adventure from './Components/Game/Adventure/Adventure';
import Quiz from './Components/Game/Quiz/Quiz';
import Simon from './Components/Game/Simon/Simon';
import Target from './Components/Game/Target/Target';
import Cups from './Components/Game/Cups/Cups';
import Shifter from './Components/Project/Silfter/shilfter';
import Delivery from './Components/Project/Delivery/Delivery';
import Calory_Tracker from './Components/Project/Nutripal/Nutripal';



function App() {
  return (
    <div className="App">
      
      <div id='NavBar'><Navbar/></div>  
      <BrowserRouter>
       <Routes>
         <Route path="/feedback" element={<Feedback />} />
         <Route path="/magnifier" element={<Help />} />
         <Route path="/Mario" element={<Mario />} />
         <Route path="/Adventure" element={<Adventure />} />
         <Route path="/Quiz" element={<Quiz />} />
         <Route path="/Simon" element={<Simon />} />
         <Route path="/Target" element={<Target />} />
         <Route path="/Cups" element={<Cups />} />
         <Route path="/Shifter" element={<Shifter />} />
         <Route path="/DeliveryWebsite" element={<Delivery />} />
         <Route path="/CalorieTracker" element={<Calory_Tracker/>} />
         <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
      <Footer/> 
    </div>
  )}


export default App;
