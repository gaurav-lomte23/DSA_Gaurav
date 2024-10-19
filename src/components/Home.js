// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the DSA Tracker</h1>
      <p>Click the button below to get started.</p>
      <Link to="/Lister">
        <button className="start-button">Start</button>
      </Link>
    </div>
  );
};

export default Home;
