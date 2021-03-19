import React, { useContext } from 'react';
import Card from '../Card/Card';
import './Cards.scss';
import { RateContext } from '../../context/RateContext';

const Cards = () => {
    const { cards, showButtonsHandler } = useContext(RateContext);

    console.log(cards);

    return (
        <div>
            <h1 className='Title'>Tarjetas creadas</h1>
            <div className='grid'>
                {cards.map(({ title, description, url }, index) => (
                    <Card
                        key = {index}
                        title={title}
                        index={index}
                        description = {description}
                        url={url}
                        edit={showButtonsHandler}
                    />  
                ))}
            </div>
        </div>
    )   
}

export default Cards;