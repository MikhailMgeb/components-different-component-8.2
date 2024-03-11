import React from 'react';

import { EmotionalButton } from './components/EmotionalButton/EmotionalButton';
import { BlueSquare } from './components/BlueSquare/BlueSquare';
import { ImpudentInput } from './components/ImpudentInput/ImpudentInput';
import { PlusButton } from './components/PlusButton/PlusButton';

import './App.css';




const emojis = ['😑', '😗', '😚', '🙂', '😅', '😆', '😂', '🤣', '🫢', '😶‍🌫️', '💥'];

const App = () => {
  return (
    <div className="App">
      {/* <BlueSquare /> */}
      <ImpudentInput limitSymbols={10} />
    </div>
  );
}

export { App };
