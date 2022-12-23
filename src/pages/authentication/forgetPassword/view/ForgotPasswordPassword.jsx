import React from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput from "../../../../components/input/TextInput";
import BottomPart from "../../../../components/authentication/BottomPart";
import { regexPassword } from "../../../../helper/regexCollection";

const ForgotPasswordPassword = ({ handleCallback }) => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("setting password");
    const nextStep = "finished";
    handleCallback({ data, nextStep });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[340px] flex-col gap-y-8"
    >
      <Controller
        name="password"
        control={control}
        rules={{
          required: "Password is required",
          pattern: {
            value: regexPassword,
            message:
              "Minimum 6 Characters - 1 upper and 1 lower case - 1 letter and 1 special character",
          },
        }}
        render={({ field, fieldState }) => (
          <TextInput
            firstIcon="fa-solid fa-lock"
            onChange={field.onChange}
            label="Password"
            placeholder="••••••"
            type="password"
            value={field.value}
            onBlur={field.onBlur}
            error={fieldState.error}
          />
        )}
      />
      <BottomPart
        firstBtn="primary"
        firstBtnTitle="Set as new Password"
        firstBtnType="submit"
        firstBtnOnClick={handleSubmit}
      />
    </form>
  );
};

export default ForgotPasswordPassword;
