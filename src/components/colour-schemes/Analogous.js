import React from 'react';
import ListColourDisplay from './../ui/ListColourDisplay';
import { HSLToRGB } from './../../util/HslToRgb';
import { HSLToHex } from '../../util/HslToHex';
import ScreenColourDisplay from '../ui/ScreenColourDisplay';

const Analogous = props => {

    const [h, s, l] = props.colour

    const colour1 = (h + 45) % 360;
    const colour2 = (h - 45) % 360;
    const colours = [
        {
            hsl: `hsl(${h}, ${s}%, ${l}%)`,
            rgb: HSLToRGB(h, s, l),
            hex: HSLToHex(h, s, l)
        },
        {
            hsl: `hsl(${colour1}, ${s}%, ${l}%)`,
            rgb: HSLToRGB(colour1, s, l),
            hex: HSLToHex(colour1, s, l)
        },
        {
            hsl: `hsl(${colour2}, ${s}%, ${l}%)`,
            rgb: HSLToRGB(colour2, s, l),
            hex: HSLToHex(colour2, s, l)
        }
        
    ]

    return (
        <React.Fragment>
            <ListColourDisplay colours={colours} />

            <div>
                <ScreenColourDisplay primary={colours[0].hsl} secondary={colours[1].hsl} accent={colours[2].hsl} />
                
                <ScreenColourDisplay primary={colours[1].hsl} secondary={colours[2].hsl} accent={colours[0].hsl} />
                
                <ScreenColourDisplay primary={colours[2].hsl} secondary={colours[0].hsl} accent={colours[1].hsl} />
                
                <ScreenColourDisplay primary={colours[2].hsl} secondary={colours[1].hsl} accent={colours[0].hsl} />
                
                <ScreenColourDisplay primary={colours[1].hsl} secondary={colours[0].hsl} accent={colours[2].hsl} />
                
                <ScreenColourDisplay primary={colours[0].hsl} secondary={colours[2].hsl} accent={colours[1].hsl} />

                <ScreenColourDisplay primary='rgb(225, 225, 225)' secondary={colours[0].hsl} accent={colours[1].hsl} />

                <ScreenColourDisplay primary='rgb(225, 225, 225)' secondary={colours[1].hsl} accent={colours[0].hsl} />

                <ScreenColourDisplay primary='rgb(225, 225, 225)' secondary={colours[0].hsl} accent={colours[2].hsl} />

                <ScreenColourDisplay primary='rgb(225, 225, 225)' secondary={colours[2].hsl} accent={colours[0].hsl} />
             
                <ScreenColourDisplay primary='rgb(40, 40, 40)' secondary={colours[0].hsl} accent={colours[1].hsl} />

                <ScreenColourDisplay primary='rgb(40, 40, 40)' secondary={colours[1].hsl} accent={colours[0].hsl} />

                <ScreenColourDisplay primary='rgb(40, 40, 40)' secondary={colours[0].hsl} accent={colours[2].hsl} />

                <ScreenColourDisplay primary='rgb(40, 40, 40)' secondary={colours[2].hsl} accent={colours[0].hsl} />
            </div>

        </React.Fragment>
    )
}

export default Analogous