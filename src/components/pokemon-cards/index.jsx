import React from 'react';

import './style.css';

const PokemonCard = ({ data }) => {
  return (
    <div className='pokemon-cards'>
      <div className='pokemon-card'>
        <div className='pokemon-card-title'>{data.name}</div>
        <div className='pokemon-card-media'>
          <img src={data.image} alt={data.name} />
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
