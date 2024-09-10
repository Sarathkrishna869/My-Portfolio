import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import ProjectInfo from './components/ProjectInfo';
import './index.css';
function App() {
  return (
    <BrowserRouter basename='/My-Portfolio'>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/project/:id" element={<ProjectInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
