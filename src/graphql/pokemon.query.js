import { gql } from '@apollo/client';

export const pokemon_query = gql`
  query pokemon($id: String!, $name: String!) {
    pokemon(id: $id, name: $name) {
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
        image
      }
      classification
      resistant
    }
  }
`;
