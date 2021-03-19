import React, { useContext } from 'react';
import './Modal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Tarjeta from '../Tarjeta/Tarjeta';
import { RateContext } from '../../context/RateContext';

const Modal = () => {

    const { state, modalHideHandler  } = useContext(RateContext);


    return state.showModal && (
        <div className="modal">
            <div className='modalHead'>
                <span  style = {{fontWeight: 'bold'}} >Nueva tarjeta</span>
                <div className='closeButton'><FontAwesomeIcon icon={faTimes} onClick = { modalHideHandler }/></div>
            </div>
            <hr/>
            <Tarjeta/>
        </div>
    )
}

export default Modal;