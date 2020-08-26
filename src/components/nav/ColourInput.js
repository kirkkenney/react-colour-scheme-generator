import React from 'react';
import './ColourInput.css';

const ColourInput = props => {

    return (
        <div className='colour-input'>
            <input type="color" onChange={props.onChange} value={props.colourValue} />
        </div>
    )
}

export default ColourInput