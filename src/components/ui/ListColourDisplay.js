import React from 'react';
import './ListColourDisplay.css';

const ListColourDisplay = props => {

    return (
        <div className='list-display-container'>
            {props.colours.map(colour => {
                const l = parseInt(colour.hsl.split(',')[2].split('%')[0].replace(' ', ''));
                return <div className='colour-item' style={{backgroundColor: `${colour.hex}` }} key={colour.hex}>
                    <div className='colour-item-text' style={{color: `${l < 40 ? 'rgb(225, 225, 225)' : 'rgb(20, 20, 20)'}`}}>
                        <p> {colour.hsl} </p>
                        <p> {colour.rgb} </p>
                        <p> {colour.hex} </p>
                    </div>
                </div>
            })}
        </div>
    )
}

export default ListColourDisplay