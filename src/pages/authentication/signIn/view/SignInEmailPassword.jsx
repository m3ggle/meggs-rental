import React from "react";
import { Controller, useForm } from "react-hook-form";
import BottomPart from "../../../../components/authentication/BottomPart";
import TextInput from "../../../../components/input/TextInput";
import { regexEmail, regexPassword } from "../../../../helper/regexCollection";
import { useMultiStepHelper } from "../../../../hooks/useMultiStepHelper";
import { useSignInEmailPasswordLogic } from "../hooks/useSignInEmailPasswordLogic";

const SignInEmailPassword = () => {
  const { control, handleSubmit } = useForm();
  const { onSubmit, handleForgotClick, handleSignUpClick } =
    useSignInEmailPasswordLogic();
  const { handleGoogle } = useMultiStepHelper();

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
