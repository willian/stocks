import { useForm } from 'react-hook-form'
import { request, gql } from 'graphql-request'

import Button from '../Button'
import Grid from '../Grid'

import AsyncSelect from '../forms/AsyncSelect'
import FieldControl from '../forms/FieldControl'
import Label from '../forms/Label'
import TextField from '../forms/TextField'

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

export default function Form() {
  const { handleSubmit, register, setValue } = useForm()

  const onSubmit = (data) => {
    console.log('data', data)
  }

  return (
    <div className="w-11/12 p-3 mx-auto mt-4 overflow-hidden bg-gray-100 rounded-md shadow sm:w-8/12 sm:p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid cols="6" gap="6">
          <Grid.Col span="6">
            <Label htmlFor="companyId">Company</Label>
            <AsyncSelect
              id="companyId"
              name="companyId"
              ref={register}
              setValue={setValue}
              fetchOptions={fetchCompanyOptions}
            />
          </Grid.Col>

          <Grid.Col span="6" smSpan="3">
            <Label htmlFor="price">Price</Label>
            <FieldControl content="$">
              <TextField
                className="rounded-none rounded-r-md"
                id="price"
                name="price"
                ref={register}
              />
            </FieldControl>
          </Grid.Col>

          <Grid.Col span="6" smSpan="3">
            <Label htmlFor="shares">Shares</Label>
            <TextField id="shares" name="shares" ref={register} />
          </Grid.Col>

          <Grid.Col span="6">
            <Button small>Save</Button>
          </Grid.Col>
        </Grid>
      </form>
    </div>
  )
}
