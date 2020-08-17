import React, { useState } from 'react';
import ScreenColourDisplay from '../ui/ScreenColourDisplay';

const MySchemes = () => {
    
    let storedSchemes;
    const storage = localStorage.getItem('colour-schemes');
    if (!storage) {
        storedSchemes = null;
    } else {
        storedSchemes = JSON.parse(storage);
    }

    const deleteSchemeHandler = name => {
        let schemes = storedSchemeState.filter(scheme => {
            return scheme.name !== name
        })
        setStoredSchemeState(schemes)
        localStorage.setItem('colour-schemes', JSON.stringify(schemes))
    }

    const [storedSchemeState, setStoredSchemeState] = useState(storedSchemes);

    return (
        <React.Fragment>
            {!storedSchemeState && (
                <h1>You do not have any saved themes.</h1>
            )}
            {storedSchemeState && (
                storedSchemeState.map(scheme => {
                    return <ScreenColourDisplay primary={scheme.primary} secondary={scheme.secondary} accent={scheme.accent} id={scheme.name} secondaryAccent={scheme.secondaryAccent ? scheme.secondaryAccent : null} savedScheme deleteScheme={deleteSchemeHandler} name={scheme.name} key={scheme.name} />
                })
            )}
        </React.Fragment>
    )
}

export default MySchemes