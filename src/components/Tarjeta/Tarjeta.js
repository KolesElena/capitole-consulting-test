import React, { useContext } from 'react';
import './Tarjeta.scss';
import { RateContext } from '../../context/RateContext';
import Button from '../Button/Button';
import Input from '../Input/Input';

const Tarjeta = () => {

    const { addNewCardHandler, state, onChangeHandler } = useContext(RateContext);

    const renderInputs = () => {
   
        return Object.keys(state.formControls).map((controlName, i) => {
          const control = state.formControls[controlName]

          
          return (

              <Input
                key = {controlName + i}
                type = {control.type}
                value = {control.value}
                placeholder = {control.placeholder}
                valid = {control.valid}
                touched = {control.touched}
                shouldValidate = {true}
                onChange = {(event) => onChangeHandler(event, controlName)
                }
              />
          )
        })
      }

    return (
        <form>
            <div className='modalForm'>
                {renderInputs()}
            </div>
            <div className='modalBtn'>
                <Button text='Añadir' disabled ={!state.isFormValid} click = { addNewCardHandler } />
            </div>
        </form>
    )
}

export default Tarjeta;