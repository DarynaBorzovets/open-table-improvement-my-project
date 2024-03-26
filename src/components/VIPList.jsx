import VIPCard from './VIPCard';
import { Guests } from '../constants/index';

const VIPList = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">VIP List</h1>
      <div className="grid grid-cols-1 gap-4">
        {/* Four headers in line */}
        <div className="bg-gray-200 p-4 rounded shadow-md  grid grid-cols-4">
          <div className="font-bold">Time</div>
          <div className="font-bold">Name</div>
          <div className="font-bold">Tags</div>
          <div className="font-bold">Notes</div>
        </div>
        {/* Render VIP cards */}
        {Guests.map((vip) => (
          <div key={vip.name}>
            <VIPCard vip={vip} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VIPList;
