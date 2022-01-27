import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions.missions);

  return (
    <div>
      <h3>My Missions</h3>
      <ul className="list-group">
        {missions.filter((mission) => mission.reserved).map((mission) => (
          <li className="list-group-item" key={mission.id}>{mission.name}</li>
        ))}
      </ul>

    </div>
  );
};

export default MyProfile;
