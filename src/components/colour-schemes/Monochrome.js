import React from 'react';
import ListColourDisplay from '../ui/ListColourDisplay';
import { HSLToRGB } from '../../util/HslToRgb';
import { HSLToHex } from './../../util/HslToHex';
import ScreenColourDisplay from '../ui/ScreenColourDisplay';

const Monochrome = props => {

    const [h, s, l] = props.colour

    const colour1 = (l + 33) % 100;
    const colour2 = (l + 66) % 100;
    const colours = [
        {
            hsl: `hsl(${h}, ${s}%, ${l}%)`,
            rgb: HSLToRGB(h, s, l),
            hex: HSLToHex(h, s, l)
        },
        {
            hsl: `hsl(${h}, ${s}%, ${colour1}%)`,
            rgb: HSLToRGB(h, s, colour1),
            hex: HSLToHex(h, s, colour1)
        },
        {
            hsl: `hsl(${h}, ${s}%, ${colour2}%)`,
            rgb: HSLToRGB(h, s, colour2),
            hex: HSLToHex(h, s, colour2)
        }
    ]

    return (
        <React.Fragment>
            <ListColourDisplay colours={colours} />

            <div className='screen-display-container' style={{marginTop: '5rem'}}>
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

export default Monochrome