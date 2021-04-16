import React from 'react'
import PropTypes from 'prop-types'
import Tap from './containers/Tap'

const TapList = ({ inputs, toggleInput }) => (
    <ul>
        {inputs?.map(input =>
            <Tap
                key={input.id}
                {...input}
                onClick={() => toggleInput(inputs.id)}
            />
        )}
    </ul>
)


TapList.prototype = {
    inputs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    toggleInput: PropTypes.func.isRequired
}

export default TapList;