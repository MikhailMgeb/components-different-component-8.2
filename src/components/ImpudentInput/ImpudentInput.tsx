import React, { useState } from 'react';
import type { ChangeEvent, FC } from 'react';

import { cnImpudentInput } from './ImpudentInput.classname';

import './ImpudentInput.css';

type ImpudentInputProps = {
    limitSymbols: number;
}

const ImpudentInput: FC<ImpudentInputProps> = ({ limitSymbols }) => {
    const [value, setValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target.value;

        if (limitSymbols < target.length) {
            setValue(prev => prev.slice(0, limitSymbols));

            return;
        }

        setValue(target);

    }

    return (
        <div className={cnImpudentInput()}>
            <input className={cnImpudentInput('Input')} onChange={handleChange} value={value}></input>
            <p className={cnImpudentInput('Text')}>{"Осталось " + (limitSymbols - value.length) + " символов"}</p>
        </div>
    );
}

export { ImpudentInput };