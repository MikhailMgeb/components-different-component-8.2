import React from 'react';

import { EmotionalButton } from './components/EmotionalButton/EmotionalButton';

import './App.css';

const emojis = ['😑', '😗', '😚', '🙂', '😅', '😆', '😂', '🤣', '🫢', '😶‍🌫️', '💥'];

const App = () => {
  return (
    <div className="App">
      <EmotionalButton emojis={emojis}/>
    </div>
  );
}

export { App };
