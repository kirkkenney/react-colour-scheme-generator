import React from 'react';

const SchemeSelect = props => {

    return (
        <select onChange={props.onChange}>
            <option value='Analogous'>Analogous</option>
            <option value='Complementary'>Complementary</option>
            <option value='Monochrome'>Monochrome</option>
            <option value='SplitComplementary'>Split Complementary</option>
            <option value='RectTetradic'>Rectangle Tetradic</option>
            <option value='SquareTetradic'>Square Tetradic</option>
            <option value='Triadic'>Triadic</option>
        </select>
    )
}

export default SchemeSelect