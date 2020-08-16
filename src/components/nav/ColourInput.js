import React from 'react';

const ColourInput = props => {

    return (
        <input type="color" onChange={props.onChange} value={props.colourValue} />
    )
}

export default ColourInput