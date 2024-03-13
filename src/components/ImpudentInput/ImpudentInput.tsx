import React, { useState } from 'react';
import type { ChangeEvent, FC } from 'react';

import { cnImpudentInput } from './ImpudentInput.classname';

import './ImpudentInput.css';

type ImpudentInputProps = {
    limitSymbols: number;
}

const ImpudentInput: FC<ImpudentInputProps> = ({ limitSymbols }) => {
    const [inputText, setInputText] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const targetValue = event.target.value.slice(0, limitSymbols);
        setInputText(targetValue);
    }

    return (
        <div className={cnImpudentInput()}>
            <input className={cnImpudentInput('Input')} onChange={handleChange} value={inputText}></input>
            <p className={cnImpudentInput('Text')}>{"Осталось " + (limitSymbols - inputText.length) + " символов"}</p>
        </div>
    );
}

export { ImpudentInput };