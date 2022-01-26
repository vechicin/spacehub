import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleReservation } from '../redux/rockets/rocketsReducer';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(toggleReservation(e.target.id));
  };

  return (
    <div>
      <h1>Rockets!</h1>
      <ul>
        {rockets.map((rocket) => (
          <li key={rocket.id}>
            <p>{rocket.name}</p>
            <p>{rocket.description}</p>
            <button onClick={clickHandler} id={rocket.id} type="button">Reserve!</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
