import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

class App extends React.Component {
  render () {
    return (
      <div className="columns">
        <div className="column"></div>
        <div className="main column is-half">
          <Header />
          {this.props.children}
        </div>
        <div className="column"></div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.any.isRequired
};

export default App;