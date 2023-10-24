import { gql } from '@apollo/client';

export const GET_PAGES = gql`
query getPage($title: String!) {
  allPage(where: { title: { eq: $title } }) {
    _id
    title
    literals {
      _id
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
