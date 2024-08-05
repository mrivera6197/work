import './App.css';
import { Routes, Route } from "react-router"
import Landing from './components/Landing'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DarkModeProvider } from './hooks/DarkModeProvider';


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
      <DarkModeProvider>
      <Routes>
        <Route path="/" Component={Landing}/>        
      </Routes>
      </DarkModeProvider>
    </ThemeProvider>
  );
}

export default App;
