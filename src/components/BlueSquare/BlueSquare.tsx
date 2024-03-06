import React, { useState } from 'react';

import { cnBlueSquare } from './BlueSquare.classname';

import './BlueSquare.css';

const BlueSquare = () => {
    const [option, setOption] = useState(false);

    const handleClick = () => {
        if (option === false) {
            setOption(true);
            return
        }
        setOption(false);
    }

    return (
        <div className={cnBlueSquare('Square', { position: option, red: option })} onClick={handleClick}>

        </div >
    );
}

export { BlueSquare };