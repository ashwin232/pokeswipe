import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import StartScreen from './Component/StartScreen'
import Card from './Component/Card';
import LikedDislikedPage from './Component/LikedDislikedPage';
import './App.css';

const App = () => {
  const [pokemon, setPokemon] = useState(null);
  const [likedPokemon, setLikedPokemon] = useState([]);
  const [dislikedPokemon, setDislikedPokemon] = useState([]);
  const [started, setStarted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const fetchRandomPokemon = async () => {
    try {
      const randomId = Math.floor(Math.random() * 898) + 1; // There are 898 Pokémon in total
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      const data = await response.json();

      const abilityResponse = await fetch(data.abilities[0].ability.url);
      const abilityData = await abilityResponse.json();

      const newPokemon = {
        id: randomId,
        name: data.name,
        ability: data.abilities[0].ability.name,
        abilityDescription: abilityData.effect_entries.find(entry => entry.language.name === 'en').short_effect,
        types: data.types.map(type => type.type.name),
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${randomId}.svg`
      };

      setPokemon(newPokemon);
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
    }
  };

  const handleLike = () => {
    if (pokemon) {
      setLikedPokemon(prevLikedPokemon => [...prevLikedPokemon, pokemon]);
      fetchRandomPokemon();
    }
  };

  const handleDislike = () => {
    if (pokemon) {
      setDislikedPokemon(prevDislikedPokemon => [...prevDislikedPokemon, pokemon]);
      fetchRandomPokemon();
    }
  };

  const handleStart = () => {
    console.log("Pokeswiper initialized!");
    setStarted(true); // Set started to true when the "Start" button is clicked
    fetchRandomPokemon(); // Fetch the initial Pokemon after starting
  };

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <div className="dark-overlay" onClick={toggleDarkMode} style={{ display: darkMode ? 'block' : 'none' }}></div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/liked-disliked">Liked & Disliked Pokémon</Link>
            </li>
            <li>
              <button onClick={toggleDarkMode}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route 
            path="/" 
            element={
              !started ? (
                <StartScreen onStart={handleStart} />
              ) : (
                pokemon && (
                  <Card
                    pokemon={pokemon}
                    onLike={handleLike}
                    onDislike={handleDislike}
                  />
                )
              )
            } 
          />
          <Route 
            path="/liked-disliked" 
            element={
              <LikedDislikedPage
                likedPokemon={likedPokemon}
                dislikedPokemon={dislikedPokemon}
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;