import React from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput from "../../../../components/input/TextInput";
import BottomPart from "../../../../components/authentication/BottomPart";
import { regexName } from "../../../../helper/regexCollection";

const SignUpName = ({ handleCallback }) => {
  const { firstName, lastName } =
    JSON.parse(localStorage.getItem("signUpData")) ?? false;
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("first and last name");
    const nextStep = true;
    handleCallback({ data, nextStep });
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
              value: regexName,
              message: "Only letter are allowed",
            },
          }}
          defaultValue={firstName ? firstName : undefined}
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
              value: regexName,
              message: "Only letter are allowed",
            },
          }}
          defaultValue={lastName ? lastName : undefined}
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
      />
    </form>
  );
};

export default SignUpName;
