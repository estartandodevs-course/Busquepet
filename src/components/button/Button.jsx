import React from 'react';
import './Button.scss';

export const Button =  props => {

    return(
        <div>
            <button>{props.nome}<img src={props.img} alt="seta" ></img></button>
        </div>
    )
}