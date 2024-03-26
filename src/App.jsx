import './index.css';
import GuestList from './components/GuestList';
import VIPList from './components/VIPList'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
const App = () => {
  return (
       <>
       <Navbar/>
       <HomePage/>
        <GuestList/>
        <VIPList/>
        </>
  );
};



export default App;
