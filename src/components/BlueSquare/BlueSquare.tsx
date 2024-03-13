import React, { useState } from 'react';

import { cnBlueSquare } from './BlueSquare.classname';

import './BlueSquare.css';

const BlueSquare = () => {
    const [option, setOption] = useState(false);

    const handleChangePosition = () => {
        setOption(prev => !prev);
    }

    return (
        <div className={cnBlueSquare('Square', { position: option, color: option })} onClick={handleChangePosition}>
        </div >
    );
}

export { BlueSquare };