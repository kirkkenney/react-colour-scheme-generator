import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Header = props => {
    return (
        <div className='header'>
            <div>
                <FontAwesomeIcon icon={faUser} onClick={props.onUserSchemesClick} />
            </div>
        </div>
    )
}

export default Header