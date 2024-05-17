import React from 'react';
import './Card.css';

const Card = ({ pokemon, onLike, onDislike }) => {
  const cardClass = `card ${pokemon.types[0].toLowerCase()}`;

  return (
    <div className="card-container">
      <div className="card-inner">
        <div className={`card-front ${cardClass}`}>
          <img src={pokemon.imageUrl} alt={pokemon.name} />
        </div>
        <div className={`card-back ${cardClass}`}>
          <h3 className="pokemon-name">{pokemon.name}</h3>
          <p className="pokemon-ability">Ability: {pokemon.ability}</p>
          <p className="pokemon-description">Ability Description: {pokemon.abilityDescription}</p>
          <p className="pokemon-types">Types: {pokemon.types.join(', ')}</p>
          <div className="button-container">
            <button className="like-button" onClick={onLike}>Like</button>
            <button className="dislike-button" onClick={onDislike}>Dislike</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;