import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import TextInput from "../../components/input/TextInput";
import SignWrapper from "../../components/SignWrapper";
import styles from "../../style";

const SignIn = () => {
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/homepage");
  };

  const handleSignUpClick = () => navigate("/sign-up");
  const handleForgotClick = () => navigate("/forgot-password");

  return (
    <SignWrapper pic="https://images.unsplash.com/photo-1566896212627-e4f210557f0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80">
      <div className="flex w-full max-w-[348px] flex-col gap-y-[48px]">
        {/* title part */}
        <div className="flex flex-col items-center justify-center gap-y-1 p-2">
          <span className="text-2xl text-lmGrey800 dark:text-dmGrey25">
            Welcome Back
          </span>
          <span className="text-base text-lmGrey600 dark:text-dmGrey300">
            Suspendisse et nunc fringilla in tempus.
          </span>
        </div>
        {/* main main */}
        <div className="flex w-full max-w-[340px] flex-col gap-y-8">
          {/* inputs */}
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
                    /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/,
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
            <div className="flex flex-col gap-y-1">
              <span className="text-lmGrey500 dark:text-dmGrey300">
                Don't have a account?{" "}
                <span
                  onClick={handleSignUpClick}
                  className="cursor-pointer underline underline-offset-2 duration-300 dark:hover:text-dmGrey100"
                >
                  Sign Up instead
                </span>
              </span>
              <span className="text-lmGrey500 dark:text-dmGrey300">
                Forgot your password?{" "}
                <span
                  onClick={handleForgotClick}
                  className="cursor-pointer underline underline-offset-2 duration-300 dark:hover:text-dmGrey100"
                >
                  Let's change that
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </SignWrapper>
  );
};

export default SignIn;
