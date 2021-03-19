import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import './Input.scss';

const Input = (props) => {

    const inputType = props.type || text;

    return (
        <div className='modalInput'>
            <input 
                type = {inputType}
                value = {props.value}
                placeholder = {props.placeholder}
                required = {props.required}
                onChange = {props.onChange}
            />
        </div>
    )
}

export default Input;