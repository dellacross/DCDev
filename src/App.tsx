import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Career from './pages/Career';
import Projects from './pages/Projects';
import Educational from './pages/Educational';
import Redirection from './hooks/Redirection';

function App() {
  return (
    <BrowserRouter>
      <Redirection />
      <Routes>
        <Route path='/career' element={<Career />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/educational' element={<Educational />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
