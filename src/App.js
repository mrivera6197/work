import './App.css';
import { Routes, Route } from "react-router"
import Landing from './components/Landing'
import { DarkModeProvider } from './hooks/DarkModeProvider';

function App() {
  return (
    <DarkModeProvider>
      <Routes>
        <Route path="/" Component={Landing}/>        
      </Routes>
    </DarkModeProvider>
  );
}

export default App;
