import { dataset, projectId } from '@/sanity/env';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const sanityGraphQLEndpoint = `https://${projectId}.api.sanity.io/v1/graphql/${dataset}/default`;
const graphQLClient = new ApolloClient({
  link: new HttpLink({
    uri: sanityGraphQLEndpoint,
  }),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default graphQLClient;