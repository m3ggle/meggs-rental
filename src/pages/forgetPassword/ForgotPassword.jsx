import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import TextInput from "../../components/input/TextInput";
import ProgressBar from "../../components/ProgressBar";
import SignWrapper from "../../components/SignWrapper";
import styles from "../../style";

const round = [
  {
    title: "Forgot your password?",
    btnTitle: "Send Email",
  },
  {
    title: "Reset your password",
    btnTitle: "Reset password",
  },
];

const ForgotPassword = () => {
  const [currentRound, setCurrentRound] = useState(0);
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    navigate("/homepage")
  };


  const handleSignInClick = () => navigate("/sign-in");
  const handleSignUpClick = () => navigate("/sign-up");

  const handleContinueClick = () => (currentRound !== round.length - 1) && setCurrentRound(prevState => prevState + 1)
  const handleGoogle = () => {};

  return (
    <SignWrapper pic="https://images.unsplash.com/photo-1651304285431-e46e5e15ed7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80">
      <div className="flex w-full max-w-[348px] flex-col gap-y-[48px]">
        {/* title part */}
        <div className="flex flex-col items-center justify-center gap-y-1 p-2">
          <span className="text-2xl text-lmGrey800 dark:text-dmGrey25">
            {round[currentRound].title}
          </span>
          <ProgressBar amount={round.length} finished={currentRound} />
        </div>
        {/* main main */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full max-w-[340px] flex-col gap-y-8"
        >
          {/* inputs */}
          <div className="flex w-full flex-col gap-y-3">
            <div className={currentRound === 0 ? "flex" : "hidden"}>
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
            </div>
            <div className={currentRound === 1 ? "flex" : "hidden"}>
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
                    label="New password"
                    placeholder="••••••"
                    type="password"
                    value={field.value}
                    onBlur={field.onBlur}
                    error={fieldState.error}
                  />
                )}
              />
            </div>
          </div>
          {/* bottom */}
          <div className="flex flex-col gap-y-2 text-sm">
            <button
              type="submit"
              onClick={
                currentRound === round.length - 1
                  ? onSubmit
                  : handleContinueClick
              }
              className="flex items-center justify-center rounded-lg bg-lmPrimary py-3 px-4 text-white shadow-md"
            >
              {round[currentRound].btnTitle}
            </button>
            <button
              onClick={handleGoogle}
              className={`flex items-center justify-center rounded-lg bg-primary100 dark:bg-transparent ${styles.darkModeBorder} py-3 px-4 text-lmPrimary duration-300 dark:text-lmGrey100 dark:hover:border-dmGrey600`}
            >
              Sign In with Google
            </button>
            {currentRound === 0 && (
              <div className="flex flex-col gap-y-1">
                <span className="text-lmGrey500 dark:text-dmGrey300">
                  Already have an Account?{" "}
                  <span
                    onClick={handleSignInClick}
                    className="cursor-pointer underline underline-offset-2 duration-300 dark:hover:text-dmGrey100"
                  >
                    Sign In instead
                  </span>
                </span>
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
            )}
          </div>
        </form>
      </div>
    </SignWrapper>
  );
};

export default ForgotPassword;
