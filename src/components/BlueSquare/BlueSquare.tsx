import React, { useState } from 'react';

import { cnBlueSquare } from './BlueSquare.classname';

import './BlueSquare.css';


const BlueSquare = () => {
    const [variance, setVariance] = useState('');
    const [color, setColor] = useState('');

    const handleClick = () => {
        setVariance('position');
        setColor('red');
    }

    return (
        <div className={cnBlueSquare()}>
            <div className={cnBlueSquare('Square', { variance, color })} onClick={handleClick}></div>
        </div >
    );
}

export { BlueSquare };