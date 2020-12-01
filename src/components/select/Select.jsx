import React from 'react';
import './Select.scss';

export const Select =  props => {



    return (
        <div>
            <select name="Select" id="">
                <option value={props.value}>{props.value}</option>
            </select>
        </div>
    )
}