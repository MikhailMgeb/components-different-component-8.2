import React, { useState } from 'react';
import type { MouseEvent } from 'react';

import { cnEmotionalButton } from './EmotionalButton.classname';

import './EmotionalButton.css';

const DEFAULT_EMOJI = '😑';

const EmotionalButton = () => {
    const [emoji, setEmoji] = useState(DEFAULT_EMOJI);

    const handleClick = (event: MouseEvent) => {
        switch (emoji) {
            case '😑':
                setEmoji('😗');
                break;
            case '😗':
                setEmoji('😚');
                break;
            case '😚':
                setEmoji('🙂');
                break;
            case '🙂':
                setEmoji('😅');
                break;
            case '😅':
                setEmoji('😆');
                break;
            case '😆':
                setEmoji('😂');
                break;
            case '😂':
                setEmoji('🤣');
                break;
            case '🤣':
                setEmoji('🫢');
                break;
            case '🫢':
                setEmoji('😶‍🌫️');
                break;
            case '😶‍🌫️':
                setEmoji('💥');
                break;
            case '💥':
                setEmoji('💥');
                break;
        }
    }

    return (
        <div className={cnEmotionalButton()} >
            <button className={cnEmotionalButton('Button')} onClick={handleClick}>{emoji}</button>
        </div>
    );
}

export { EmotionalButton };