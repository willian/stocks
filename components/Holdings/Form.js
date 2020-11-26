import { useForm } from 'react-hook-form'

import Button from '../Button'
import Grid from '../Grid'

import AsyncSelect from '../forms/AsyncSelect'
import FieldControl from '../forms/FieldControl'
import Label from '../forms/Label'
import Select from '../forms/Select'
import TextField from '../forms/TextField'

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
            <Label htmlFor="brandId">Company</Label>
            <AsyncSelect id="brandId" name="brandId" ref={register} setValue={setValue} />
          </Grid.Col>

          <Grid.Col span="6" smSpan="3">
            <Label htmlFor="price">Price</Label>
            <FieldControl content="$">
              <TextField
                className="rounded-none rounded-r-md"
                id="shares"
                name="shares"
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