import { Link } from 'react-router-dom'; 
import GuestCard from './GuestCard';
import { Guests } from '../constants/index';

const GuestList = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold flex items-center">
          Guest List
          <Link
            to="/VIPList" 
            className="bg-gray-500 hover:bg-gray-700 text-white hover:text-red-500 font-bold py-2 px-4 ml-4 rounded focus:outline-none focus:shadow-outline"
          >
            Print VIP List
          </Link>
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {Guests.map((guest) => (
          <div key={guest.name} className="bg-gray-200 p-4 rounded shadow-md mb-4">
            <GuestCard guest={guest} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestList;
