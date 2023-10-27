import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const sanityGraphQLEndpoint = `https://${process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID}.api.sanity.io/v2023-08-01/graphql/${process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET}/default`;

const graphQLClient = new ApolloClient({
  link: new HttpLink({
    uri: sanityGraphQLEndpoint,
  }),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default graphQLClient;
