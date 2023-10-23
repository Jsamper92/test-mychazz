import { gql } from '@apollo/client';

export const GET_PAGES = gql`
  query {
    allModule {
      _id
      _type
      _createdAt
      title
      name {
        en
        es
        pt
      }
    }
  }
`;
