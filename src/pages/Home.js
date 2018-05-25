import React from 'react';
import { Link } from 'react-router-dom';
import sensei from '../../public/Images/Sensei1.jpeg';

const Home = () => {
  return (
    <div className="Home">
      <img src={sensei} alt="Sensei" />
      <p>Welcome, new student! I am Sensei, here to guide you on your coding journey.</p>
      <br />
      <Link className="button is-success" to="/levels/0">Train</Link>
    </div>
  );
};

export default Home;
