import React from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput from "../../../components/input/TextInput";
import BottomPart from "../../../../components/authentication/BottomPart";

const SignUpTele = ({ handleCallback }) => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("birthday, gender and city");
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
      <Controller
        name="telephoneNumber"
        control={control}
        rules={{
          pattern: {
            value: /^\d+$/,
            message: "Only numbers are allowed",
          },
        }}
        render={({ field, fieldState }) => (
          <TextInput
            firstIcon="fa-solid fa-phone"
            onChange={field.onChange}
            label="Telephone number (optional)"
            placeholder="03 251 2342783"
            type="number"
            value={field.value}
            onBlur={field.onBlur}
            error={fieldState.error}
          />
        )}
      />
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

export default SignUpTele;
