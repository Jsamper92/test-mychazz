import { dataset, projectId } from '@/sanity/env';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const sanityGraphQLEndpoint = `https://${projectId}.api.sanity.io/v2023-08-01/graphql/${dataset}/default`;

const graphQLClient = new ApolloClient({
  link: new HttpLink({
    uri: sanityGraphQLEndpoint,
  }),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default graphQLClient;
