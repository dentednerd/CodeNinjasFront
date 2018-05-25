import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ROOT } from '../../config';
import Congrats from './Congrats';

const levelNames = ['Academy', 'Gennin', 'Chunnin', 'Jounin', 'Special Jounin', 'Kage', 'ANBU', 'S-Class', 'Ninja'];

class LevelUp extends React.Component {
  componentDidMount() {
    axios.put(`${ROOT}/users/${this.props.username}/level-up`)
      .then(() => {
        this.setState(this.props.questionIndex = 0)
          .catch(console.log);
      });
  }
  render() {
    if (+this.props.level === 8) {
      return <Congrats />;
    }
    return (
      <div className="levelUp">
        <span>Press Graduate to begin Level {(+this.props.level) + 2}: {levelNames[+this.props.level + 1]}</span>
        <Link to={`/levels/${+this.props.level + 1}/questions`}><button className="button"> Graduate</button></Link>
        <Link to="/profile"><button className="button"> Restart Training</button></Link>
      </div>
    );
  }
}

LevelUp.propTypes = {
  username: PropTypes.string.isRequired,
  questionIndex: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired,
};

export default LevelUp;
