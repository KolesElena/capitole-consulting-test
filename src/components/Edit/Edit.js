import React, {useContext} from 'react';
import './Edit.scss';
import { RateContext } from '../../context/RateContext';
import Button from '../Button/Button';

const Edit = (props) => {

    const { editHandler, deleteHandler } = useContext(RateContext);

    return (
        <div className='Edit'>
          <Button text='Edit' click = {() => editHandler(props)}/> |
          <Button text ='Delete' click = { () => deleteHandler(props.index) } />
        </div>
    )
}

export default Edit;