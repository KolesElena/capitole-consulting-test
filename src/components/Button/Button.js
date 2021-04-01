import React from 'react';
import './Button.scss';

const Button = (props) => {

    return (
        <button className={'Btn ' + props.className} disabled = {props.disabled} onClick = {props.click}>
            {props.text}
        </button>
    )  
}

export default Button;