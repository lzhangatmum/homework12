import React from 'react';
import PropTypes from 'prop-types';

const Tap = ({ onClick, text }) => (
    <li onClick={onClick}>
        {text}
    </li>
)


Tap.prototype ={
    onClick: PropTypes.func.isRequired,
    text : PropTypes.string.isRequired
}


export default Tap