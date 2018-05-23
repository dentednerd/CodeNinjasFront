import React from 'react';
import PropTypes from 'prop-types';
import sensei from '../../public/Images/Sensei1.jpeg';

const levelNames = ['Academy', 'Gennin', 'Chunnin', 'Jounin', 'Special Jounin', 'Kage', 'ANBU', 'S-Class', 'Ninja'];

class Question extends React.Component {
  constructor (props) {
        super(props);
    }
  render () {
    const {question} = this.props;
    return (
      <div className="question columns">
        <div className="column is-two-thirds sensei">
          <h2>Sensei Says: {question.title}</h2>
          <div className="background">
            <img className="senseiSays" src={sensei} alt="Sensei" />
            {question.background}
          </div>
          <div className="example">{question.example}</div>
          <hr />

          <h2>{question.question}</h2>
          <div className="answers">
            {question.answers.map((answer, i) => {
              const handler = answer === question.correct ? this.props.handleCorrectAnswer : () => {};
              return (
                <button key={i} className="button" onClick={handler}>
                  {answer}
                </button>
              );
            })}
          </div>
        </div>
        <div className="column sidebar">
          <span>Current level: {levelNames[question.level]}</span>
          <progress className="progress is-warning" value={this.props.questionIndex} max="5"></progress>
        </div>
      </div>
    );
  }
}

Question.propTypes = {
    question: PropTypes.object.isRequired,
    questionIndex: PropTypes.number.isRequired,
    handleCorrectAnswer: PropTypes.func.isRequired
};

export default Question;