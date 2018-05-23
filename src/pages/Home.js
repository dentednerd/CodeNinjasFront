import React from 'react';
import PropTypes from 'prop-types';
import LogInForm from '../components/LogInForm';
import sensei from '../../public/Images/Sensei1.jpeg';

class Home extends React.Component {
    constructor (props) {
        super(props);
        this.navigateToUserProfile = this.navigateToUserProfile.bind(this);
    }
    render () {
        return (
            <div className="Home">
                <img src={sensei} alt="Sensei" />
                <p>Welcome, new student! I am Sensei, here to guide you on your coding journey. Please tell me your ninja name below:</p>
                <br />
                <LogInForm redirect={this.navigateToUserProfile} />
            </div>
        );
    }
    navigateToUserProfile () {
        this.props.history.push('/profile');
    }
}

Home.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    })
};

export default Home;