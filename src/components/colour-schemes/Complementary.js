import React from 'react';
import ListColourDisplay from '../ui/ListColourDisplay';
import ScreenColourDisplay from '../ui/ScreenColourDisplay';
import { HSLToRGB } from './../../util/HslToRgb';
import { HSLToHex } from '../../util/HslToHex';

const Complementary = props => {

    const [h, s, l] = props.colour

    const complementaryColour = (h + 180) % 360;
    const colours = [
        {
            hsl: `hsl(${h}, ${s}%, ${l}%)`,
            rgb: HSLToRGB(h, s, l),
            hex: HSLToHex(h, s, l)
        },
        {
            hsl: `hsl(${complementaryColour}, ${s}%, ${l}%)`,
            rgb: HSLToRGB(complementaryColour, s, l),
            hex: HSLToHex(complementaryColour, s, l)
        }
        
    ]

    return (
        <React.Fragment>
            <ListColourDisplay colours={colours} />

            <div className='screen-display-container' style={{marginTop: '5rem'}}>
                <ScreenColourDisplay primary='rgb(225, 225, 225)' secondary={colours[0].hsl} accent={colours[1].hsl} />
                
                <ScreenColourDisplay primary='rgb(40, 40, 40)' secondary={colours[0].hsl} accent={colours[1].hsl} />
                
                <ScreenColourDisplay primary='rgb(225, 225, 225)' secondary={colours[1].hsl} accent={colours[0].hsl} />
                
                <ScreenColourDisplay primary='rgb(40, 40, 40)' secondary={colours[1].hsl} accent={colours[0].hsl} />
            </div>

        </React.Fragment>
    )
}

export default Complementary