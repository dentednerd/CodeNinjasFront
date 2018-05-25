import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const App = ({ children }) => {
  return (
    <div className="columns">
      <div className="column" />
      <div className="main column is-half">
        <Header />
        {children}
      </div>
      <div className="column" />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.any.isRequired,
};

export default App;
