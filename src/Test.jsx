import React from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "./components/Select";
import TextArea from "./components/TextArea";
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-96 flex-col gap-y-3"
    >
      <Controller
        name="lastName"
        control={control}
        render={({ field, fieldState }) => (
          <TextInput
            firstIcon="fa-solid fa-magnifying-glass"
            onChange={field.onChange}
            label="What is your last name?"
            placeholder="Bande"
            value={field.value}
            onBlur={field.onBlur}
            error={fieldState.error}
          />
        )}
        rules={{
          required: "Last name is required",
          minLength: { value: 3, message: "At least 3 Characters" },
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: "Only letters are allowed",
          },
        }}
      />
      <Controller
        name="gender"
        control={control}
        rules={{ required: "Select an option" }}
        render={({ field, fieldState }) => (
          <Select
            icon={transmissionSelect.icon}
            placeholder={transmissionSelect.placeholder}
            itemList={transmissionSelect.list}
            onChange={field.onChange}
            label="What is your gender?"
            error={fieldState.error}
          />
        )}
      />
      <Controller
        name="bio"
        control={control}
        render={({ field, fieldState }) => (
          <TextArea
            onChange={field.onChange}
            label="A place for a short bio."
            placeholder="I rather use my bike than driving in my car, so hit me up if you want to borrow it :D"
            value={field.value}
            name={field.name}
            onBlur={field.onBlur}
            error={fieldState.error}
          />
        )}
      />
      <button
        type="submit"
        className="max-w-[340px] rounded-lg bg-lmPrimary dark:bg-dmPrimary text-lmGrey25 px-3 py-[10px] text-sm font-semibold"
      >
        Click to Submit
      </button>
    </form>
  );
};

export default Test;
