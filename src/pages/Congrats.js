import React from 'react';
import { Link } from 'react-router-dom';
import ninja from '../../public/Images/Lucy_Ninja.png';

const Congrats = () => {
  return (
    <div className="levelUp">
      <span>Congratulations! You are now a Code Ninja!</span>
      <img src={ninja} alt="You are a Code Ninja!" />
      <Link to="/levels/0/questions"><button className="button">Start over</button></Link>
    </div>
  );
};

export default Congrats;
