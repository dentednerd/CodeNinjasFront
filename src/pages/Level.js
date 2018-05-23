import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchQuestions } from '../actions/questions';
import Question from '../components/Question';
import LevelUp from './LevelUp';

class Level extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionIndex: 0,
      backgroundImage: {
        0: 'level0.jpg',
        1: 'level1.jpg',
        2: 'level2.jpg',
        3: 'level3.jpg',
        4: 'level4.jpg',
        5: 'level5.png',
        6: 'level6.jpg',
        7: 'level7.png',
        8: 'level8.png',
        9: 'level9.jpg',
      },
    };
    this.handleCorrectAnswer = this.handleCorrectAnswer.bind(this);
  }

  componentDidMount() {
    const { level } = this.props.match.params;
    this.changeBackground(level);
    this.props.fetchQuestions(level);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.level !== newProps.match.params.level) {
      this.changeBackground(newProps.match.params.level);
      this.props.fetchQuestions(newProps.match.params.level);
      this.setState({
        questionIndex: 0,
      });
    }
  }

  changeBackground(level) {
    document.getElementsByTagName('body')[0].style.backgroundImage = `url("/Images/backgrounds/${this.state.backgroundImage[level]}")` ;
  }

  handleCorrectAnswer() {
    this.setState({
      questionIndex: this.state.questionIndex + 1,
    });
  }

  render() {
    const { questionIndex } = this.state.questionIndex;
    const { loading, error, questions } = this.props;
    return (
      <div className="Level">
        {(error) && <p>{error}</p>}
        {(loading || questions.length === 0) && <p>Loading...</p>}
        {(!loading && questionIndex === questions.length && 
          <LevelUp
            level={this.props.match.params.level}
            questionIndex={questionIndex}
          />
        )}
        {!loading && questions.length > 0 && questionIndex < questions.length && (
          <Question
            question={questions[questionIndex]} 
            questionIndex={questionIndex} 
            handleCorrectAnswer={this.handleCorrectAnswer}
          />
        )}
      </div>
    );
  }
}

Level.propTypes = {
  match: PropTypes.object,
  fetchQuestions: PropTypes.func,
  loading: PropTypes.object,
  error: PropTypes.object,
  questions: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    loading: state.questions.loading,
    error: state.questions.error,
    questions: state.questions.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuestions: (level) => {
      dispatch(fetchQuestions(level));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Level);
