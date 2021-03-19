import React from 'react';
import './Card.scss';
import defaultImage from '../../assets/recetas-de-merluza.jpeg';
import Edit from '../Edit/Edit';

const Card = (props) => {

    return (
        <div className='Card' onMouseOver = {props.edit}>
            <img src={props.url || defaultImage} alt=''/>
            <div className='cardTitleWrap'><h1 className='cardTitle'>{props.title}</h1></div>
            <div className ='cardDescription'>{props.description}</div>
            <Edit {...props} />
        </div>
    )
}

export default Card;