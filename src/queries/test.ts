import { gql } from '@apollo/client';


export const GET_POSTS = gql`
query {
  allAuthor {
    _id
    _type
    _createdAt
    title,
    name {
      en
      es
      pt
    }
  }
}
`;