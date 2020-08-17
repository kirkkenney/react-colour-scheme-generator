import React, { useState } from 'react';
import './ScreenColourDisplay.css'

const ScreenColourDisplay = props => {

    const {primary, secondary, accent, secondaryAccent } = props;
    const [savedScheme, setSavedScheme] = useState(!!props.savedScheme)

    const schemeStorageHandler = () => {
        if (!savedScheme) {
            const schemeObj = {
                name: new Date().getTime(),
                primary,
                secondary,
                accent,
                secondaryAccent: secondaryAccent ? secondaryAccent : null
            }
            let storage = localStorage.getItem('colour-schemes');
            let initStorage;
            if (!storage) {
                initStorage = [];
            } else {
                initStorage = JSON.parse(storage);
            }
            setSavedScheme(true)
            initStorage.push(schemeObj)
            localStorage.setItem('colour-schemes', JSON.stringify(initStorage))
        } else {
            props.deleteScheme(props.name)
        }
    }

    return (
        <div className='screen-display' style={{background: primary}}>
            <div className='screen-header' style={{color: primary, backgroundColor: secondary}}>
                <div className='site-name'>Site Name</div>
                <div className='site-links hide-mob'>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='menu-btn hide-desktop'>
                    <div style={{background: primary}}></div>
                    <div style={{background: primary}}></div>
                    <div style={{background: primary}}></div>
                </div>
            </div>
            <div className='screen-landing'>
                <div>
                    <h1 style={{color: secondary}}>Lorem ipsum dolor sit amet.</h1>
                </div>
                <div className='screen-landing-body'>
                    <div className='screen-landing-animate'>
                        <div style={{backgroundColor: accent}}></div>
                        <div style={{backgroundColor: accent}}></div>
                        <div style={{backgroundColor: accent}}></div>
                    </div>
                    <h2 style={{color: secondary}}>Lorem ipsum dolor sit amet, sanctus appellantur cu per. Id cum errem timeam, ex nominavi.</h2>
                </div>
                <div className='action-btns'>
                    <button style={{ backgroundColor: secondaryAccent ? secondaryAccent : accent, color: primary }} onClick={schemeStorageHandler}>
                        { savedScheme ? 'Delete Scheme' : 'Save Scheme' }
                    </button>
                    <button style={{backgroundColor: 'rgba(0,0,0,0)', border: secondaryAccent ? `solid 2px ${secondaryAccent}` : `solid 2px ${accent}`, color: secondaryAccent ? secondaryAccent : accent}} onClick={schemeStorageHandler}>
                        { savedScheme ? 'Delete Scheme' : 'Save Scheme' }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ScreenColourDisplay