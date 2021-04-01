import React from 'react';
import './Input.scss';

const Input = (props, ref) => {

    return (
        <div className='modalInput'>
            <input 
                ref={ref}
                {...props}
            />
        </div>
    )
}

const forwardedInput = React.forwardRef(Input)

export default forwardedInput;