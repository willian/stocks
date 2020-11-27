import { forwardRef } from 'react'
import { request, gql } from 'graphql-request'

import AsyncSelect from '../forms/AsyncSelect'

const fetcher = (query, variables) =>
  request('https://mechanism-stocks.herokuapp.com/v1/graphql', query, variables)

const fetchCompanyOptions = async (str) => {
  const query = gql`
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
  const variables = { query: `%${str}%` }

  const { companies } = await fetcher(query, variables)

  return companies.map((c) => ({ label: `${c.symbol}: ${c.name}`, value: c.id }))
}

const AsyncCompanySelect = forwardRef(({ onChange }, ref) => {
  return (
    <AsyncSelect
      id="companyId"
      name="companyId"
      ref={ref}
      onChange={onChange}
      fetchOptions={fetchCompanyOptions}
    />
  )
})

AsyncCompanySelect.displayName = ' AsyncCompanySelect'

export default AsyncCompanySelect
