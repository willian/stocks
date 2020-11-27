import debounce from 'lodash.debounce'
import { forwardRef } from 'react'
import fetcher from '../../utils/fetcher'

import { FILTER_COMPANIES } from '../../graphql/queries'

import AsyncSelect from '../forms/AsyncSelect'

const fetchCompanyOptions = (str, callback) => {
  const variables = { query: `%${str}%` }

  fetcher(FILTER_COMPANIES, variables).then(({ companies }) => {
    const options = companies.map((c) => ({ label: `${c.symbol}: ${c.name}`, value: c.id }))
    callback(options)
  })
}

const AsyncCompanySelect = forwardRef(({ onChange }, ref) => {
  const fetchOptions = debounce(fetchCompanyOptions, 400)

  return (
    <AsyncSelect
      id="companyId"
      name="companyId"
      ref={ref}
      onChange={onChange}
      fetchOptions={fetchOptions}
    />
  )
})

AsyncCompanySelect.displayName = ' AsyncCompanySelect'

export default AsyncCompanySelect
