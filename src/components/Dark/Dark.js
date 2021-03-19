import React from 'react';
import './Dark.scss';

const Dark = (props) => {

    return props.showModal && (
        <div className='dark'></div>
    )
}

export default Dark;