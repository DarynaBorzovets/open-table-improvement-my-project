import PropTypes from 'prop-types';
import GuestCard from './GuestCard';
import { Guests } from '../constants/index';

const GuestList = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Guest List</h1>
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

GuestList.propTypes = {
  guest: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      bookingStatus: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      reservationTime: PropTypes.string.isRequired,
      notes: PropTypes.string.isRequired,
      table: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GuestList;
