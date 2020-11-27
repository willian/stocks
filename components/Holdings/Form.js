import { useForm } from 'react-hook-form'

import Button from '../Button'
import Grid from '../Grid'

import FieldControl from '../forms/FieldControl'
import Label from '../forms/Label'
import TextField from '../forms/TextField'

import AsyncCompanySelect from './AsyncCompanySelect'

export default function Form({ onSubmit }) {
  const { handleSubmit, register, setValue } = useForm()

  return (
    <div className="w-11/12 p-3 mx-auto mt-4 overflow-hidden bg-gray-100 rounded-md shadow sm:w-8/12 sm:p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid cols="6" gap="6">
          <Grid.Col span="6">
            <Label htmlFor="companyId">Company</Label>
            <AsyncCompanySelect ref={register} onChange={setValue} />
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
