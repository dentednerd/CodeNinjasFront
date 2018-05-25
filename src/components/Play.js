import React from 'react';
import { Link } from 'react-router-dom';

const Play = () => {
  return (
    <div className="Play">
      <Link to="/question"><button className="button is-primary is-outlined is-large">Play</button></Link>
    </div>
  );
};

export default Play;
