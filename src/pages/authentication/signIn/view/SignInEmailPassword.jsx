import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import TextInput from "../../../../components/input/TextInput";
import BottomPart from "../../../../components/authentication/BottomPart";

const SignInEmailPassword = ({ handleCallback }) => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("signing in");
    const nextStep = "finished";
    handleCallback({ data, nextStep });
  };

  const handleGoogle = () => {
    console.log("making google stuff");
    const nextStep = "google";
    handleCallback({ nextStep });
  };

  // outsource
  const navigate = useNavigate();
  const handleForgotClick = () => navigate("/forgot-password");
  const handleSignUpClick = () => navigate("/sign-up");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[340px] flex-col gap-y-8"
    >
      <div className="flex w-full flex-col gap-y-2">
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
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            pattern: {
              value:
                /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*?+-=€/ ])\S*$/,
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
      </div>
      <BottomPart
        firstBtn="primary"
        firstBtnTitle="Sign In"
        firstBtnType="submit"
        firstBtnOnClick={handleSubmit}
        secondBtn="secondary"
        secondBtnTitle="Sign Up with Google"
        secondBtnType="button"
        secondBtnOnClick={handleGoogle}
        underBtnFirstText="Forgot your password?"
        underBtnFirstLinkText="Let's fix that"
        underBtnFirstOnClick={handleForgotClick}
        underBtnSecondText="Don't have a account?"
        underBtnSecondLinkText="Sign Up here"
        underBtnSecondOnClick={handleSignUpClick}
      />
    </form>
  );
};

export default SignInEmailPassword;
