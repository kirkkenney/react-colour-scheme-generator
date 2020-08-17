import React from 'react';
import ListColourDisplay from '../ui/ListColourDisplay';
import { HSLToRGB } from '../../util/HslToRgb';
import { HSLToHex } from './../../util/HslToHex';
import ScreenColourDisplay from '../ui/ScreenColourDisplay';
import { permute } from './../../util/PermuteScheme';

const Monochrome = props => {

    const [h, s, l] = props.colour

    const colour1 = (l + 33) % 100;
    const colour2 = (l + 66) % 100;
    const originalColours = [
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

    const colours = permute(originalColours)

    return (
        <React.Fragment>
            <ListColourDisplay colours={originalColours} />

            <div className='screen-display-container' style={{marginTop: '5rem'}}>
                {colours.map(colour => {
                    return (
                        <div key={JSON.stringify(colour)}>
                            <ScreenColourDisplay primary={colour[0].rgb} secondary={colour[1].rgb} accent={colour[2].rgb} />
                            <ScreenColourDisplay primary='rgb(225, 225, 225)' secondary={colour[1].rgb} accent={colour[2].rgb} />
                            <ScreenColourDisplay primary='rgb(30, 30, 30)' secondary={colour[1].rgb} accent={colour[2].rgb} />
                        </div>
                    )
                })}
            </div>

        </React.Fragment>
    )
}

export default Monochrome