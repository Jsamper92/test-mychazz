import { gql } from '@apollo/client';


export const GET_POSTS = gql`
  query {
    allPost {
      _id
      title
    }
  }
`;