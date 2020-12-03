import React from 'react';
import './Button.scss';

export const Button =  props => {
    return(
        <div>
            <button className={props.class} disabled>
                <div className="button-Dad">
                    <span>{props.name}</span>
                    <img className="Icons" src={props.icon} alt="Icon"/>
                </div>
            </button>
        </div>
    )
}