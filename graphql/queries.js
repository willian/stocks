import { gql } from 'graphql-request'

export const FILTER_COMPANIES = gql`
  query filterCompanies($query: String = "") {
    companies(
      where: { _or: [{ name: { _ilike: $query } }, { symbol: { _ilike: $query } }] }
      limit: 100
      order_by: { symbol: asc }
    ) {
      id
      name
      industry
      sector
      symbol
    }
  }
`

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
