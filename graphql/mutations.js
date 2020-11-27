import { gql } from 'graphql-request'

export const ADD_HOLDING = gql`
  mutation AddHoling($userId: Int, $shares: Int, $price: bigint, $companyId: Int) {
    insert_holdings_one(
      object: { company_id: $companyId, price: $price, shares: $shares, user_id: $userId }
    ) {
      company {
        industry
        name
        sector
        symbol
        id
      }
      company_id
      id
      price
      shares
    }
  }
`
