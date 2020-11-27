import { gql } from 'graphql-request'

export const MY_HOLDINGS = gql`
  query MyHoldings {
    holdings {
      company {
        id
        industry
        name
        sector
        symbol
      }
      company_id
      id
      price
      shares
      user_id
    }
  }
`
