import { gql } from '@apollo/client';


export const GET_POSTS = gql`
  query {
    allAuthor {
      _id
      name
      language
    }
  }
`;