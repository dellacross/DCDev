import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './pages/Projects';
import Career from './pages/Career';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/career' element={<Career />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
