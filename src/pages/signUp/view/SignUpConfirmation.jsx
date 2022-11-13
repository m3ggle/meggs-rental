import React from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput from "../../../components/input/TextInput";
import BottomPart from "./BottomPart";

const SignUpConfirmation = ({ handleCallback }) => {
  const { confirmation } = JSON.parse(localStorage.getItem("signUpData")) ?? false;

  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("code confirmed");
    const nextStep = "confirmation";
    handleCallback({ data, nextStep });
  };

  const handleGoBack = () => {
    const nextStep = false;
    handleCallback({ nextStep });
  };

  // Todo: in pattern, compare input value with code
  // Todo: delete user/emails from firebase which are out of the time interval of 7 days
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[340px] flex-col gap-y-8"
    >
      <Controller
        name="confirmation"
        control={control}
        rules={{
          required: "Code is required",
          pattern: {
            value: /^\d+$/,
            message: "Invalid code",
          },
        }}
        defaultValue={confirmation ? confirmation : undefined}
        render={({ field, fieldState }) => (
          <TextInput
            type="number"
            firstIcon="fa-solid fa-barcode"
            onChange={field.onChange}
            label="Enter the code which we send you to your email"
            placeholder="123456"
            value={field.value}
            onBlur={field.onBlur}
            error={fieldState.error}
          />
        )}
      />
      <BottomPart
        firstBtn="primary"
        firstBtnTitle="Confirm Code"
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

export default SignUpConfirmation;
