import React from 'react';
import ListColourDisplay from './../ui/ListColourDisplay';
import { HSLToRGB } from './../../util/HslToRgb';
import { HSLToHex } from '../../util/HslToHex';
import ScreenColourDisplay from '../ui/ScreenColourDisplay';
import { permute } from './../../util/PermuteScheme';

const Analogous = props => {

    const [h, s, l] = props.colour

    const colour1 = (h + 45) % 360;
    const colour2 = (h - 45) % 360;
    const originalColours = [
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

    const colours = permute(originalColours)

    return (
        <React.Fragment>
            <ListColourDisplay colours={originalColours} />

            <div className='screen-display-container' style={{marginTop: '5rem'}}>
                {colours.map(colour => {
                    return (
                        <div key={JSON.stringify(colour)}>
                            <ScreenColourDisplay primary='rgb(225, 225, 225)' secondary={colour[0].rgb} accent={colour[1].rgb} secondaryAccent={colour[2].rgb} />
                            <ScreenColourDisplay primary='rgb(30, 30, 30)' secondary={colour[0].rgb} accent={colour[1].rgb} secondaryAccent={colour[2].rgb} />
                        </div>
                    )
                })}
            </div>

        </React.Fragment>
    )
}

export default Analogous