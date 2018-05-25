import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchQuestions from '../actions/questions';
import Question from '../components/Question';
import LevelUp from './LevelUp';
import Congrats from './Congrats';

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
    this.renderContent = this.renderContent.bind(this);
  }

  componentDidMount() {
    const { level } = this.props.match.params;
    this.changeBackground(level);
    this.props.getQuestions(level);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.level !== nextProps.match.params.level) {
      this.changeBackground(nextProps.match.params.level);
      this.props.getQuestions(nextProps.match.params.level);
      this.setState({
        questionIndex: 0,
      });
    }
  }

  changeBackground(level) {
    document.getElementsByTagName('body')[0].style.backgroundImage = `url("/Images/backgrounds/${this.state.backgroundImage[level]}")`;
  }

  handleCorrectAnswer() {
    this.setState({
      questionIndex: this.state.questionIndex + 1,
    });
  }

  renderContent(error, loading, data, questionIndex) {
    if (error) return <p>{error}</p>;
    if (loading || data.length === 0) return <p>Loading...</p>;
    if (!loading) {
      if (questionIndex === data.length) {
        console.log(this.props.match.params.level);
        if (this.props.match.params.level === 8) {
          return (
            <Congrats />
          );
        }
        return (
          <LevelUp
            level={this.props.match.params.level}
            questionIndex={questionIndex}
          />
        );
      }
      return (
        <Question
          question={data[questionIndex]}
          questionIndex={questionIndex}
          handleCorrectAnswer={this.handleCorrectAnswer}
        />
      );
    }
    return <p>Whaaat</p>;
  }

  render() {
    // const { questionIndex } = this.state.questionIndex;
    const { loading, error, data } = this.props;
    return (
      <div className="Level">
        {this.renderContent(error, loading, data, this.state.questionIndex)}
      </div>
    );
  }
}

Level.propTypes = {
  match: PropTypes.object,
  getQuestions: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.object,
  data: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    loading: state.questions.loading,
    error: state.questions.error,
    data: state.questions.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getQuestions: (level) => { dispatch(fetchQuestions(level)); },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Level);
