import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
      exact: true,
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/my-profile',
      text: 'My Profile',
    },
  ];

  return (
    <nav className="nav-bar">
      <div className="navbar-container">
        <span className="brand-name">Space Traveler&apos;s Hub</span>
        <img src="planet.png" alt="brand logo" />
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} activeclassname="active-link" exact={`${link.path}`}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
