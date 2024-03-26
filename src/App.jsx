import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import GuestList from './components/GuestList';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<GuestList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
