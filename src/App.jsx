import './index.css';
import GuestList from './components/GuestList';
import VIPList from './components/VIPList'
import Navbar from './components/Navbar'
const App = () => {
  return (
       <>
       <Navbar/>
        <GuestList/>
        <VIPList/>
        </>
  );
};



export default App;
