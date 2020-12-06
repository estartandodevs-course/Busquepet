import React from 'react';
import Text from '../Text'
import './Button.scss';

export default function Button (props) {
    const {identifier, icon, name, onClick, disabled} = props;
    return(
        <div>
            <button className={identifier} onClick={onClick} disabled={disabled} >
                <div className="button-Dad">
                        <Text type="textbutton">{name}</Text>
                    <img className="Icons" src={icon} alt="Icon"/>
                </div>
            </button>
        </div>
    )
}