import React, { useState } from 'react';
import type { FC, MouseEvent } from 'react';

import { cnEmotionalButton } from './EmotionalButton.classname';

import './EmotionalButton.css';

type EmotionalButtonProps = {
    emojis: string[];
}

const EmotionalButton: FC<EmotionalButtonProps> = ({ emojis }) => {
    const [index, setIndex] = useState(0);

    const handleClick = (event: MouseEvent) => {
        setIndex(prev => prev + 1);
    }

    return (
        <div className={cnEmotionalButton()} >
            <button className={cnEmotionalButton('Button')} onClick={handleClick}>{emojis[index]}</button>
        </div>
    );
}

export { EmotionalButton };