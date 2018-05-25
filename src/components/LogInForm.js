import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/auth';

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      userName: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.userName.length === 0) return;
    this.props.loginUser(this.state.userName);
    this.setState({ userName: '' });
    this.props.redirect();
  }

  render() {
    return (
      <form className="LogInForm" onSubmit={this.handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Your ninja name here"
          value={this.state.userName}
          onChange={this.handleChange}
        />
        <button className="button" type="submit">Log In</button>
      </form>
    );
  }
}

LogInForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  redirect: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    loginUser: (userName) => {
      dispatch(loginUser(userName));
    },
  };
}

export default connect(null, mapDispatchToProps)(LogInForm);
