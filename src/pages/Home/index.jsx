import React, { useState, useEffect } from 'react';
import { pokemons_query } from '../../graphql/pokemons.query.js';
import { useLazyQuery } from '@apollo/client';
import PokemonCard from '../../components/pokemon-cards/index';
import InfiniteScroll from 'react-infinite-scroll-component';
import HeaderBanner from '../../components/header-banner';
import './style.css';
import { Link } from 'react-router-dom';

export default function Home() {
  const [first, setFirst] = useState(10);
  const [pokemons, setPokemons] = useState([]);
  const [getPokemons, { data }] = useLazyQuery(pokemons_query, {
    variables: { first },
    onCompleted: function (data) {
      setPokemons([...pokemons, ...data.pokemons]);
    },
  });

  useEffect(() => {
    getPokemons();
  }, [first, getPokemons]);

  useEffect(() => {
    if (data) {
      setPokemons([
        ...pokemons,
        ...data.pokemons.slice(pokemons.length, data.pokemons.length),
      ]);
    }
  }, [data, pokemons]);

  const loadMoreData = () => {
    setFirst(first + 10);
  };

  return (
    <div>
      <HeaderBanner />
      <InfiniteScroll
        dataLength={pokemons.length}
        next={loadMoreData}
        hasMore={true}
      >
        <div className='pokemons-container'>
          {pokemons.map((element, index) => {
            return (
              <div key={index}>
                <Link to={`/${element.name}/${element.id}`}>
                  <PokemonCard data={element} key={index} />
                </Link>
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
}
