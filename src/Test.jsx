import React from 'react'
import { useForm, Controller } from "react-hook-form";
import Select from './components/Select';
import TextInput from './components/TextInput';

const Test = () => {
const { control, handleSubmit } = useForm();
const onSubmit = (data) => console.log(data);

return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <Controller
      name="firstName"
      control={control}
      render={({ field }) => <TextInput {...field} />}
    />
    {/* <Controller
      name="select"
      control={control}
      render={({ field }) => (
        <Select
          {...field}
          options={[
            { value: "chocolate", label: "Chocolate" },
            { value: "strawberry", label: "Strawberry" },
            { value: "vanilla", label: "Vanilla" },
          ]}
        />
      )}
    /> */}
    <input type="submit" />
  </form>
);
}

export default Test