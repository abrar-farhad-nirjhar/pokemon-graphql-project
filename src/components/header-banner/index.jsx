import React from 'react';
import './style.css';
import PokemonImage from '../../assets/pokemon.png';
import { Link } from 'react-router-dom';

export default function HeaderBanner() {
  return (
    <div className='banner'>
      <div className='images'>
        <Link to='/'>
          <img src={PokemonImage} className='logo' alt='pokemon-header' />
        </Link>
      </div>
    </div>
  );
}
