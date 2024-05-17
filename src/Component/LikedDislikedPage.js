import React from 'react';
import Card from './Card';

const LikedDislikedPage = ({ likedPokemon, dislikedPokemon }) => {
  return (
    <div>
      <h1>Liked Pokémon</h1>
      <div className="card-container">
        {likedPokemon.map(pokemon => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <h1>Disliked Pokémon</h1>
      <div className="card-container">
        {dislikedPokemon.map(pokemon => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default LikedDislikedPage;