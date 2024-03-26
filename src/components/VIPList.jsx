import VIPCard from './VIPCard';
import { Guests } from '../constants/index';

const VIPList = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">VIP List</h1>
      <div className="grid grid-cols-1 gap-4">
        {Guests.map((vip) => (
          <div key={vip.name} className="bg-gray-200 p-4 rounded shadow-md mb-4">
            <VIPCard vip={vip} />
          </div>
        ))}
      </div>
    </div>
  );
};


export default VIPList;
