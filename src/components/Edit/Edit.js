import React from 'react';
import './Edit.scss';
import Button from '../Button/Button';

export const Edit = ({ editHandler, deleteHandler, ...props }) => {
    return (
        <div className='Edit'>
          <Button text='Edit' className={props.buttonClassName} click = {() => editHandler(props)}/> |
          <Button text ='Delete' click = { () => deleteHandler(props.index) } />
        </div>
    )
}

export default Edit;