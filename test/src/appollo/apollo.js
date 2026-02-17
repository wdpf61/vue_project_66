import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core'
const baseUrl = import.meta.env.VITE_BASE_GRAPHQL_URL;
const httpLink = createHttpLink({
  uri: `${baseUrl}` // Laravel GraphQL URL
})

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})
