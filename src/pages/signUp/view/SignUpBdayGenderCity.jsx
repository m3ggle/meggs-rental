import React from "react";
import { Controller, useForm } from "react-hook-form";
import Autocomplete from "../../../components/input/Autocomplete";
import Select from "../../../components/input/Select";
import TextInput from "../../../components/input/TextInput";
import ExampleData from "../../../ExampleData";
import BottomPart from "./BottomPart";

const { genderSelect, citiesAutocomplete } = ExampleData();

const SignUpBdayGenderCity = ({ handleCallback }) => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("birthday, gender and city");
    const nextStep = "finished";
    handleCallback({ data, nextStep });
  };

  const handleGoBack = () => {
    console.log("going back");
    const nextStep = false;
    handleCallback({ nextStep });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[340px] flex-col gap-y-8"
    >
      <div className="flex w-full flex-col gap-y-3">
        <Controller
          name="birthday"
          control={control}
          rules={{
            required: "Birthday is required",
          }}
          render={({ field, fieldState }) => (
            <TextInput
              firstIcon="fa-solid fa-calendar-days"
              onChange={field.onChange}
              label="Birthday"
              placeholder="25.10.1999"
              type="date"
              value={field.value}
              onBlur={field.onBlur}
              error={fieldState.error}
            />
          )}
        />
        <Controller
          name="gender"
          control={control}
          rules={{ required: "Select an option" }}
          render={({ field, fieldState }) => (
            <Select
              icon={genderSelect.icon}
              placeholder={genderSelect.placeholder}
              itemList={genderSelect.list}
              onChange={field.onChange}
              label="What is your gender?"
              error={fieldState.error}
            />
          )}
        />
        <Controller
          name="city"
          control={control}
          rules={{
            required: "City is required",
          }}
          render={({ field, fieldState }) => (
            <Autocomplete
              placeholder={citiesAutocomplete.placeholder}
              itemList={citiesAutocomplete.list}
              onChange={field.onChange}
              label="What city you live in?"
              error={fieldState.error}
            />
          )}
        />
      </div>
      <BottomPart
        firstBtn="primary"
        firstBtnTitle="Finish"
        firstBtnType="submit"
        firstBtnOnClick={handleSubmit}
        secondBtn="secondary"
        secondBtnTitle="Go Back"
        secondBtnType="button"
        secondBtnOnClick={handleGoBack}
      />
    </form>
  );
};

export default SignUpBdayGenderCity;
