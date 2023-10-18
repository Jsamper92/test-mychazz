import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const sanityGraphQLEndpoint = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/graphql/${process.env.NEXT_PUBLIC_SANITY_DATASET}/experiment`;
const graphQLClient = new ApolloClient({
  link: new HttpLink({
    uri: sanityGraphQLEndpoint,
  }),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default graphQLClient;