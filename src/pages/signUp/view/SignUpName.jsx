import React from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput from "../../../components/input/TextInput";
import BottomPart from "./BottomPart";

const SignUpName = ({ handleCallback }) => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("first and last name");
    const nextStep = true;
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
          name="firstName"
          control={control}
          rules={{
            required: "First name is required",
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: "Only letter are allowed",
            },
          }}
          render={({ field, fieldState }) => (
            <TextInput
              firstIcon="fa-solid fa-signature"
              onChange={field.onChange}
              label="First Name"
              placeholder="Max"
              type="text"
              value={field.value}
              onBlur={field.onBlur}
              error={fieldState.error}
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          rules={{
            required: "Last name is required",
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: "Only letter are allowed",
            },
          }}
          render={({ field, fieldState }) => (
            <TextInput
              firstIcon="fa-solid fa-signature"
              onChange={field.onChange}
              label="Last Name"
              placeholder="Musterman"
              type="text"
              value={field.value}
              onBlur={field.onBlur}
              error={fieldState.error}
            />
          )}
        />
      </div>
      <BottomPart
        firstBtn="primary"
        firstBtnTitle="Continue"
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

export default SignUpName;
