import { GraphQLClient } from 'graphql-request'

export default function fetcher(query, variables = null, userId = null) {
  const endpoint = 'https://mechanism-stocks.herokuapp.com/v1/graphql'
  const headers = userId ? { 'X-Hasura-Role': 'user', 'X-Hasura-User-ID': userId } : {}
  const graphQLClient = new GraphQLClient(endpoint, { headers })

  return graphQLClient.request(query, variables)
}
