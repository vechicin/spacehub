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
      <table>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>Join</th>
        </tr>
        <tr>
          {missions.map((mission) => (
            <div key={mission.id}>
              <td>{mission.name}</td>
              <td>{mission.description}</td>
              <td />
              <td>
                <button type="button" onClick={eventHandler} id={mission.id}>Join Mission</button>
              </td>
            </div>
          ))}
        </tr>
      </table>
    </div>
  );
};

export default Missions;
