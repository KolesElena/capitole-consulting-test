import React, {useContext} from 'react';
import './Edit.scss';
import { RateContext } from '../../context/RateContext';
import Button from '../Button/Button';

const Edit = (props) => {

    const { state, editHandler, deleteHandler } = useContext(RateContext);

    return state.showButtons && (
        <div className='Edit'>
          <Button text='Edit' click = {() => editHandler(props)}/> |
          <Button text ='Delete' click = { () => deleteHandler(props.index) } />
        </div>
        
    )
}

export default Edit;