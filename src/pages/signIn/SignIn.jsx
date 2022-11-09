import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import TextInput from "../../components/input/TextInput";
import ProgressBar from "../../components/ProgressBar";
import SignWrapper from "../../components/SignWrapper";
import styles from "../../style";

const SignIn = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/sign-up");
  };

  return (
    <SignWrapper pic="https://images.unsplash.com/photo-1628437255792-911a5d23097e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80">
      <div className="flex w-full max-w-[348px] flex-col gap-y-[48px]">
        {/* title part */}
        <div className="flex flex-col items-center justify-center gap-y-1 p-2">
          <span className="text-2xl text-lmGrey800 dark:text-dmGrey25">
            Welcome Back
          </span>
          <span className="text-base text-lmGrey600 dark:text-dmGrey300">Suspendisse et nunc fringilla in tempus.</span>
        </div>
        {/* main main */}
        <div className="flex w-full max-w-[340px] flex-col gap-y-8">
          {/* inputs */}
          <div className="flex w-full flex-col gap-y-2">
            <Controller
              name="email"
              control={control}
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
              rules={{ required: "Email is required" }}
            />
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <TextInput
                  firstIcon="fa-solid fa-lock"
                  onChange={field.onChange}
                  label="What is your last name?"
                  placeholder="Bande"
                  type="password"
                  value={field.value}
                  onBlur={field.onBlur}
                  error={fieldState.error}
                />
              )}
              rules={{
                required: "Last name is required",
                minLength: { value: 3, message: "At least 3 Characters" },
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Only letters are allowed",
                },
              }}
            />
          </div>
          {/* bottom */}
          <div className="flex flex-col gap-y-2 text-sm">
            <button
              type="submit"
              onClick={onSubmit}
              className="flex items-center justify-center rounded-lg bg-lmPrimary py-3 px-4 text-white shadow-md"
            >
              Sign In
            </button>
            <button
              className={`flex items-center justify-center rounded-lg bg-primary100 dark:bg-transparent ${styles.darkModeBorder} py-3 px-4 text-lmPrimary duration-300 dark:text-lmGrey100 dark:hover:border-dmGrey600`}
            >
              Sign In with Google
            </button>
            <span className="text-lmGrey500 dark:text-dmGrey300">
              Don't have a account?{" "}
              <span
                onClick={handleSignUpClick}
                className="cursor-pointer underline underline-offset-2 duration-300 dark:hover:text-dmGrey100"
              >
                Sign Up instead
              </span>
            </span>
          </div>
        </div>
      </div>
    </SignWrapper>
  );
};

export default SignIn;
