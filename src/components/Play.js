import React from 'react';
import { Link } from 'react-router-dom';

class Play extends React.Component {
  render () {
    return (
      <div className="Play">
        <Link to='/question'><button className="button is-primary is-outlined is-large">Play</button></Link>
      </div>
    );
  }
}

export default Play;