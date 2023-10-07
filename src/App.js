import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route, Link } from "react-router"
import Home from './components/Home';
import Work from './components/Work';
import About from  './components/About'

function App() {
  return (
    <div className="App">
      <NavBar/>

      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/work" Component={Work}/>
        <Route path="/about" Component={About}/>

      </Routes>
     
    </div>
  );
}

export default App;
