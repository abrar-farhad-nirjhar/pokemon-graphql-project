import { gql } from '@apollo/client'


export const pokemons_query = gql`query pokemons($first: Int!) {
  pokemons(first: $first) {
    id
    number
    name
    image
    attacks {
      fast {
        name
        type
        damage
      }
      special {
        name
        type
        damage
      }
    }
    evolutions {
      id
      number
      name
    }
    classification
  }
}`
