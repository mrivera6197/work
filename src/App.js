import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route, Link } from "react-router"
import Home from './components/Home';
import Work from './components/Work';
import About from  './components/About'
import Contact from "./components/Contact"
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#A2B575"
      }, 
      secondary: {
        main: "#A2B575"
      }
    }, 
    typography: {
      fontSize: 16,
    }
  })

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <NavBar/>

      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/work" Component={Work}/>
        <Route path="/about" Component={About}/>
        <Route path="/contact" Component={Contact}/>

      </Routes>
     
    </div>
    </ThemeProvider>
  );
}

export default App;
