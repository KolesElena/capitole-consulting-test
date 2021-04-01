import React, { Fragment, useContext } from 'react';
import './Tarjeta.scss';
import { RateContext } from '../../context/RateContext';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Tarjeta = () => {

    const schema = yup.object().shape({
        title: yup.string().required(),
        description: yup.string().required()
    })

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });

    const { addNewCardHandler, state, onChangeHandler } = useContext(RateContext);

    const onSubmit = (values) => addNewCardHandler(values);

    const renderInputs = () => {
   
        return Object.keys(state.formControls).map((controlName, i) => {
          const control = state.formControls[controlName]

          
          return (
            <Fragment key={i}>
              <Input
                name={controlName}
                type = {control.type}
                value = {control.value}
                placeholder = {control.placeholder}
                valid = {control.valid}
                touched = {control.touched}
                ref={register({ required: true })}
                onChange = {(event) => onChangeHandler(event, controlName)
                }
              />
              <p className='error'>{errors[controlName] ? `${control.placeholder} es un campo obligatorio`: null}</p>
            </Fragment>
          )
        })
      }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='modalForm'>
                {renderInputs()}
            </div>
            <div className='modalBtn'>
                <Button type="submit" text='Añadir' />
            </div>
        </form>
    )
}

export default Tarjeta;