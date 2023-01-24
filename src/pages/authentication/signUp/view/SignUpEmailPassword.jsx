import React from "react";
import { Controller, useForm } from "react-hook-form";
import BottomPart from "../../../../components/authentication/BottomPart";
import TextInput from "../../../../components/input/TextInput";
import { regexEmail, regexPassword } from "../../../../helper/regexCollection";
import { useSignUpEmailPasswordSubmit } from "../hooks/useSignUpEmailPasswordSubmit";
import { useSignUpUserNameCityHelpers } from "../hooks/useSignUpUserNameCityHelpers";

// Todo: different kinds of status like loading error and success, for that use react-query

const SignUpEmailPassword = () => {
  const { control, handleSubmit } = useForm();
  const { email, password } =
    JSON.parse(localStorage.getItem("signUpData")) ?? false;
  const { onSubmit, handleEmailChange, isLoading } =
    useSignUpEmailPasswordSubmit();
  const { handleGoBack } = useSignUpUserNameCityHelpers();

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
              onChange={(e) => {
                field.onChange(e);
                handleEmailChange(e);
              }}
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
        firstBtnTitle="Create Account"
        firstBtnType="submit"
        firstBtnOnClick={handleSubmit}
        firstBtnIsLoading={isLoading}
        secondBtn="secondary"
        secondBtnTitle="Go Back"
        secondBtnType="button"
        secondBtnOnClick={handleGoBack}
      />
    </form>
  );
};

export default SignUpEmailPassword;
