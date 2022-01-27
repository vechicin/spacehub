import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleReservation, fetchRockets } from '../redux/rockets/rocketsReducer';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, []);

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
            <img src={rocket.img} alt="rocket-img" />
            <button onClick={clickHandler} id={rocket.id} type="button">Reserve!</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
