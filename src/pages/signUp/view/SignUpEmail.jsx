import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import TextInput from "../../../components/input/TextInput";
import BottomPart from "./BottomPart";

const SignUpEmail = ({ handleCallback }) => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("sending email");
    const nextStep = true;
    handleCallback({ data, nextStep });
  };

  const handleGoogle = () => {
    console.log("making google stuff");
    const nextStep = "google";
    handleCallback({ nextStep });
  };

  // outsource
  const navigate = useNavigate();
  const handleSignInClick = () => navigate("/sign-in");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[340px] flex-col gap-y-8"
    >
      <Controller
        name="email"
        control={control}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            message: "Invalid email address",
          },
        }}
        render={({ field, fieldState }) => (
          <TextInput
            firstIcon="fa-solid fa-at"
            onChange={field.onChange}
            label="Email"
            placeholder="maxMustermann@web.de"
            value={field.value}
            onBlur={field.onBlur}
            error={fieldState.error}
          />
        )}
      />
      <BottomPart
        firstBtn="primary"
        firstBtnTitle="Send Email For Confirmation"
        firstBtnType="submit"
        firstBtnOnClick={handleSubmit}
        secondBtn="secondary"
        secondBtnTitle="Sign Up with Google"
        secondBtnType="button"
        secondBtnOnClick={handleGoogle}
        underBtnFirstText="Already have an Account?"
        underBtnFirstLinkText="Sign In instead"
        underBtnFirstOnClick={handleSignInClick}
      />
    </form>
  );
};

export default SignUpEmail;
