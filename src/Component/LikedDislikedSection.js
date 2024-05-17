import React from 'react';

const LikedDislikedSection = ({ pokemonList, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {pokemonList.map(pokemon => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default LikedDislikedSection;