import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './UserProfile.css';

const levelNames = ['Academy', 'Gennin', 'Chunnin', 'Jounin', 'Special Jounin', 'Kage', 'ANBU', 'S-Class', 'Ninja'];

const UserProfile = ({ auth }) => {
  const { user, loading, error } = auth;
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && (
        // Redirect to 404 page
        <div>{error.message}</div>
      )}
      {user && (
        <div className="UserProfile">
          <div className="userBox">
            <h1 className="title is-1">{user.username}</h1>
            <figure className="userImage">
              <img src={user.avatar_url} alt="Your ninja avatar" />
            </figure>
            <h2>Current level: {levelNames[user.level]}</h2>
            <Link className="button is-success" to={`/levels/${user.level}/questions`}>Train</Link>
          </div>
        </div>
      )}
    </div>
  );
};

UserProfile.propTypes = {
  auth: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    error: PropTypes.any,
    user: PropTypes.any,
  }),
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(UserProfile);