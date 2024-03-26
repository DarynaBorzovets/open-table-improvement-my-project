import PropTypes from 'prop-types';

const VIPCard = ({ vip }) => {
  const {name, tags, reservationTime, notes, } = vip;
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <p>{name}</p>
      <p>{reservationTime}</p>
      <p>{tags.join(', ')}</p>
      <p>{notes}</p>
     
    </div>
  );
};

VIPCard.propTypes = {
  vip: PropTypes.shape({
    name: PropTypes.string.isRequired,
    reservationTime: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    notes: PropTypes.string.isRequired,
  }),
};

VIPCard.defaultProps = {
  vip: {
    reservationTime: '',
    name: '',
    tags: [],
    notes: '',
  },
};

export default VIPCard;

