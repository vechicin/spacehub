import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMission, fetchMission } from '../redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  const eventHandler = (e) => {
    e.preventDefault();
    dispatch(toggleMission(e.target.id));
  };

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMission());
    }
  }, []);

  return (
    <div>
      <h1>Missions!</h1>
      <ul>
        {missions.map((mission) => (
          <li key={mission.id}>
            <p>{mission.name}</p>
            <p>{mission.description}</p>
            <button type="button" onClick={eventHandler} id={mission.id}>Join Mission</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Missions;
