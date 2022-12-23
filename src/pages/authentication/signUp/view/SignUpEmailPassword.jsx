import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import BottomPart from "../../../../components/authentication/BottomPart";
import TextInput from "../../../../components/input/TextInput";
import { regexEmail, regexPassword } from "../../../../helper/regexCollection";
import { useSignUpEmailPasswordSubmit } from "../hooks/useSignUpEmailPasswordSubmit";

// Todo: different kinds of status like loading error and success, for that use react-query

const SignUpEmailPassword = ({ handleCallback }) => {
  const { email, password } =
    JSON.parse(localStorage.getItem("signUpData")) ?? false;

  const { control, handleSubmit } = useForm();

  const { onSubmit } = useSignUpEmailPasswordSubmit(handleCallback);

  const handleGoogle = () => {
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
      <div className="flex w-full flex-col gap-y-2">
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: regexEmail,
              message: "Invalid email address",
            },
          }}
          defaultValue={email ? email : undefined}
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
              value: regexPassword,
              message:
                "Minimum 6 Characters - 1 upper and 1 lower case - 1 letter and 1 special character",
            },
          }}
          defaultValue={password ? password : undefined}
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

export default SignUpEmailPassword;
