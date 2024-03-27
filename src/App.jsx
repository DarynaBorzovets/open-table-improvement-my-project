import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import GuestList from './components/GuestList';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import VIPList from './components/VIPList'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<GuestList />} />
          <Route path="/VIPList" element={<VIPList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
