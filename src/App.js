import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
      <BrowserRouter>
        <Switch>
          <Route path="/" element={<Home />} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
