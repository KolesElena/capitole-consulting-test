import { React, useContext } from 'react';
import './layout.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { RateContext } from '../../context/RateContext';
import Cards from '../Cards/Cards';


const Layout = () => {

    const { modalShowHandler } = useContext(RateContext);

    return (
        <div>
            <div className='faPlusSquare'><FontAwesomeIcon data-testid="create-button" icon={faPlusSquare} onClick = { modalShowHandler } /></div>
            <Cards />
        </div>
    )
}

export default Layout;