import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsReducer';
import Rocket from './Rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, []);

  return (
    <div>
      <h1>Rockets!</h1>
      <ul>
        {rockets.map((rocket) => (
          <li key={rocket.id}>
            <Rocket
              name={rocket.name}
              description={rocket.description}
              image={rocket.img}
              reserved={rocket.reserved}
              id={rocket.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
