import React, { useState, useEffect } from 'react';
import HeaderBanner from '../../components/header-banner';
import { pokemon_query } from '../../graphql/pokemon.query.js';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import PokemonCard from '../../components/pokemon-cards';
import './style.css';
import { Link } from 'react-router-dom';
export default function Details() {
  const [pokemonData, setPokemonData] = useState();
  const params = useParams();
  const { data } = useQuery(pokemon_query, {
    variables: { id: params.id, name: params.name },
  });

  useEffect(() => {
    console.log(data);
    if (data) {
      setPokemonData(data.pokemon);
    }
  }, [data]);

  return (
    <div>
      <HeaderBanner />

      <div className='page-header'>{data?.pokemon.name} Details</div>

      <div className='details-container'>
        <div className='pokemon-card-display'>
          {pokemonData && <PokemonCard data={pokemonData} />}
        </div>
        <div className='details'>
          <div className='section-header'>Details</div>
          <ul>
            <li>Pokedex Number: {data?.pokemon.number}</li>
            <li>Name: {data?.pokemon.name}</li>
            <li>Classification: {data?.pokemon.classification}</li>
          </ul>
          <br />
          <div className='section-header'>Fast Attacks</div>
          <table bordered>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Damage</th>
            </tr>
            {data?.pokemon.attacks.fast.map((element, index) => (
              <tr>
                <td>{element.name}</td>
                <td>{element.type}</td>
                <td>{element.damage}</td>
              </tr>
            ))}
          </table>
          <br />
          <div className='section-header'>Special Attacks</div>
          <table bordered>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Damage</th>
            </tr>
            {data?.pokemon.attacks.special.map((element, index) => (
              <tr>
                <td>{element.name}</td>
                <td>{element.type}</td>
                <td>{element.damage}</td>
              </tr>
            ))}
          </table>
          <br />
          <div className='section-header'>Resistance</div>
          <table>
            <tr>
              {data?.pokemon.resistant.map((element, index) => (
                <td key={index}>{element}</td>
              ))}
            </tr>
          </table>
        </div>
        <div className='evolutions'>
          {pokemonData && pokemonData.evolutions && (
            <div className='section-header'>Future Evolutions</div>
          )}
          {pokemonData &&
            pokemonData.evolutions &&
            pokemonData.evolutions.map((element, index) => (
              <Link key={index} to={`/${element.name}/${element.id}`}>
                <PokemonCard data={element} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
