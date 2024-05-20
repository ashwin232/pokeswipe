import React from 'react';
import './StartScreen.css';

const StartScreen = ({ onStart }) => {
  return (
    <div className="start-screen">
      <h1>Welcome to PokeSwiper</h1>
      <button className="start-button" onClick={onStart}>
        Start
      </button>
    </div>
  );
};


export default StartScreen;