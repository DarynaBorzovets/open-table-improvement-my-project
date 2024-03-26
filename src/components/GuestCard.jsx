import PropTypes from 'prop-types';

const GuestCard = ({ guest }) => {
  const {name, bookingStatus, tags, reservationTime, reservationDate, notes, table } = guest;
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-2">Guest Name: {name}</h2>
      <p><strong>Reservation Time:</strong> {reservationTime}</p>
      <p><strong>Reservation Date:</strong> {reservationDate}</p>

      <p><strong>Booking Status:</strong> {bookingStatus}</p>
      <p><strong>Tags:</strong> {tags.join(', ')}</p>
      <p><strong>Notes:</strong> {notes}</p>
     
      <p><strong>Table:</strong> {table}</p>
    </div>
  );
};

GuestCard.propTypes = {
  guest: PropTypes.shape({
    name: PropTypes.string.isRequired,
    reservationTime: PropTypes.string.isRequired,
    reservationDate: PropTypes.string.isRequired,
    bookingStatus: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    notes: PropTypes.string.isRequired,
    table: PropTypes.string.isRequired,
  }),
};

GuestCard.defaultProps = {
  guest: {
    name: '',
    reservationTime: '',
    reservationDate: '',
    bookingStatus: '',
    tags: [],
    notes: '',
    table: '',
  },
};

export default GuestCard;

