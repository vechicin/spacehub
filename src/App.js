import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Rockets from './components/Rockets';
import Navbar from './components/Navbar';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';

const App = () => (
  <Router>
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
    </div>
  </Router>
);

export default App;
