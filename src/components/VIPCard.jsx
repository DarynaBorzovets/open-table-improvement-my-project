import PropTypes from 'prop-types';

const VIPCard = ({ vip }) => {
  const { name,  tags, reservationTime, notes, } = vip;

  return (
    <div className="bg-gray-200 p-4 rounded shadow-md grid grid-cols-4">
      {/* Display VIP card content in line */}
      <div>{reservationTime}</div>
      <div>{name}</div>
      <div>{tags.join(', ')}</div>
      <div>{notes}</div>
    </div>
  );
};

VIPCard.propTypes = {
  vip: PropTypes.shape({
    name: PropTypes.string.isRequired,
    bookingStatus: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    reservationTime: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
    table: PropTypes.string.isRequired,
  }).isRequired,
};

export default VIPCard;
