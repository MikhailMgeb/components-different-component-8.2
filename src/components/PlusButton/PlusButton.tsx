import React, { useState } from 'react';
import type { ChangeEvent, MouseEvent } from 'react';

import { cnPlusButton } from './PlusButton.classname';

import './PlusButton.css';

const PlusButton = () => {
    const [value, setValue] = useState(0);
    const [diff, setDiff] = useState(0);

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        const target = event.target;

        if (isNaN(+target.value)) {
            return;
        }

        setValue(+target.value);
    }

    function handleClick(event: MouseEvent) {
        setDiff((prev) => prev + value);
    }


    return (
        <div className={cnPlusButton()}>
            <textarea onChange={handleChange} value={value}></textarea>
            <button onClick={handleClick}>Прибавить</button>
            <p>{diff}</p>
        </div>
    );
}

export { PlusButton };