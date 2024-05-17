import React from 'react';
import './StartScreen.css';

const StartScreen = ({ onStart }) => {
  return (
    <div className="start-screen">
      <button onClick={onStart}>Start Pokeswiper</button>
    </div>
  );
}

export default StartScreen;