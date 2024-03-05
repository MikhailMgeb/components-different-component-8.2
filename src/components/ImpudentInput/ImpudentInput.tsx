import React, { useState } from 'react';
import type { ChangeEvent } from 'react';

import { cnImpudentInput } from './ImpudentInput.classname';

import './ImpudentInput.css';

const ImpudentInput = () => {
    const [value, getValue] = useState('');
    const [countSymbols, getCountSymbols] = useState(0);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target.value;

        if (countSymbols > 9) {
            getValue(prev => prev.slice(0, 10));
            return;
        }

        getValue(event.target.value);
        getCountSymbols(target.length);
    }

    return (
        <div className={cnImpudentInput()}>
            <input className={cnImpudentInput('Input')} onChange={handleChange} value={value}></input>
            <p className={cnImpudentInput('Text')}>{countSymbols}</p>
        </div>
    );
}

export { ImpudentInput };