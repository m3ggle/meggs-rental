import React from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "./components/Select";
import TextInput from "./components/TextInput";

const transmissionSelect = {
  icon: "fa-solid fa-person",
  placeholder: "Gender",
  list: ["Male", "feMale", "Divers"],
};

const Test = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
      <Controller
        name="firstName"
        control={control}
        render={({ field, fieldState }) => (
          <TextInput
            firstIcon="fa-solid fa-magnifying-glass"
            onChange={field.onChange}
            state={fieldState.isTouched}
            label={"What is your first name?"}
            value={field.value}
            name={field.name}
            onBlur={field.onBlur}
            invalid={fieldState.error}
          />
        )}
        rules={{ required: true }}
      />
      <Controller
        name="lastName"
        control={control}
        render={({ field, fieldState }) => (
          <TextInput
            firstIcon="fa-solid fa-magnifying-glass"
            onChange={field.onChange}
            state={fieldState.isTouched}
            label={"What is your last name?"}
            value={field.value}
            onBlur={field.onBlur}
            invalid={fieldState.error}
          />
        )}
        rules={{ required: true }}
      />
      <Controller
        name="gender"
        control={control}
        render={({ field }) => (
          <Select
            icon={transmissionSelect.icon}
            placeholder={transmissionSelect.placeholder}
            itemList={transmissionSelect.list}
            onChange={field.onChange}
          />
        )}
      />
      <input type="submit" />
    </form>
  );
};

export default Test;
