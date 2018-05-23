import React from 'react';
import { Link } from 'react-router-dom';
import sewer from '../../public/Images/backgrounds/underground.jpg';

const NoMatch = ({ location }) => (
    <div>
        <h3>No match for <code>{location.pathname}</code><Link to={'/'}> Back to login page</Link></h3>
        <img width='100%' height='100%' src= {sewer} alt='404 message' />
    </div>
);

export default NoMatch;