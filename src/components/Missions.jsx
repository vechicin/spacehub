import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMission, fetchMission } from '../redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  const buttonText = (reservation) => {
    let text = 'Join Mission';
    if (reservation === true) {
      text = 'Leave Mission';
      return text;
    }
    return text;
  };

  const buttonColor = (reservation) => {
    let text = 'btn btn-success btn-sm';
    if (reservation === true) {
      text = 'btn btn-danger btn-sm';
      return text;
    }
    return text;
  };

  const badgeColor = (reservation) => {
    let text = 'badge bg-danger';
    if (reservation === true) {
      text = 'badge bg-success';
      return text;
    }
    return text;
  };

  const statusText = (reservation) => {
    let text = 'NOT A MEMBER';
    if (reservation === true) {
      text = 'ACTIVE MEMBER';
      return text;
    }
    return text;
  };

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
      <table className="table table-striped table-bordered table-dark">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th className="join-column">Join/Leave</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.id}>
              <td className="mission-title">{mission.name}</td>
              <td>{mission.description}</td>
              <td>
                <p className={badgeColor(mission.reserved)}>{statusText(mission.reserved)}</p>
              </td>
              <td className="join-container">
                <button className={buttonColor(mission.reserved)} type="button" onClick={eventHandler} id={mission.id}>{buttonText(mission.reserved)}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
