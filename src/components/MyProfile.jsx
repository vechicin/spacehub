import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions.missions);
  const rockets = useSelector((state) => state.rockets.rockets);

  return (
    <div className="myprofile-container">
      <div className="row">
        <div className="col">
          <h3>My Missions</h3>
          <ul className="list-group">
            {missions.filter((mission) => mission.reserved).map((mission) => (
              <li className="list-group-item" key={mission.id}>{mission.name}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h3>My Rockets</h3>
          <ul className="list group">
            {rockets.filter((rocket) => rocket.reserved).map((rocket) => (
              <li className="list-group-item" key={rocket.id}>{rocket.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
