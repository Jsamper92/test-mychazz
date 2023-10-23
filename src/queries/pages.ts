import { gql } from '@apollo/client';

export const GET_PAGES = gql`
  query {
    allPage {
      _id
      _type
      _createdAt
      title
      literals {
        key
        name {
          es
          en
          pt
        }
      }
    }
  }
`;
