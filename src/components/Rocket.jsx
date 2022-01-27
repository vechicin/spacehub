import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { toggleReservation } from '../redux/rockets/rocketsReducer';

const Rocket = ({
  id, name, description, image, reserved,
}) => {
  const dispatch = useDispatch();
  const buttonText = reserved ? 'CANCEL RESERVATION' : 'RESERVE ROCKET';
  const buttonClass = reserved ? 'outline-secondary' : 'primary';

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(toggleReservation(e.target.id));
  };

  return (
    <div className=" d-flex flex-row mb-5" data-testid="rocket-item-group">
      <div className="col-2 p">
        <img alt="just a rocket" src={image} className="rocket-img px-2" />
      </div>
      <div className="d-flex flex-column col-10 px-2">
        <h3>{name}</h3>
        <p>
          {reserved && <span className="badge bg-info me-2">Reserved</span>}
          <span>{description}</span>
        </p>
        <Button id={id} variant={`${buttonClass}`} onClick={handleClick} size="sm" className="reservation-btn">{buttonText}</Button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};

Rocket.defaultProps = {
  reserved: false,
};

export default Rocket;
