import './index.css';
import GuestList from './components/GuestList';
import GuestCard from './components/GuestCard';
import VIPList from './components/VIPList'

const App = () => {
  return (
       <>
        <GuestCard/>
        <GuestList/>
        <VIPList/>
        </>
  );
};



export default App;
