import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Btn from "../../components/Btn";
import Select from "../../components/input/Select";
import TextInput from "../../components/input/TextInput";
import ProgressBar from "../../components/ProgressBar";
import SignWrapper from "../../components/SignWrapper";
import ExampleData from "../../ExampleData";

const round = [
  {
    title: "Create a new account",
  },
  {
    title: "What is your full name",
  },
  {
    title: "Almost finished",
  },
  {
    title: "Last step, promised 🤞",
  },
];

const { genderSelect } = ExampleData();

const SignUp = () => {
  const [currentRound, setCurrentRound] = useState(0);
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/homepage");
  };

  const handleSignInClick = () => navigate("/sign-in");
  const handleGoogle = () => {};

  const handleContinue = () => setCurrentRound((prevState) => prevState + 1);
  const handleGoBack = () =>
    currentRound !== 0 && setCurrentRound((prevState) => prevState - 1);

  const handleCallbackPrimaryBtn = () =>
    currentRound === round.length - 1 ? onSubmit() : handleContinue();
  const handleCallbackSecondaryBtn = () =>
    currentRound === 0 ? handleGoogle() : handleGoBack();

  return (
    <SignWrapper pic="https://images.unsplash.com/photo-1628437255792-911a5d23097e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80">
      <div className="flex w-full max-w-[348px] flex-col gap-y-[48px]">
        {/* title part */}
        <div className="flex flex-col items-center justify-center gap-y-2 p-2">
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
            <div className={currentRound === 0 ? "flex" : "hidden"}>
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
            <div className={currentRound === 1 ? "flex" : "hidden"}>
              <Controller
                name="firstName"
                control={control}
                rules={{
                  required: "First name is required",
                  pattern: {
                    value: /^[a-zA-Z]+$/,
                    message: "Only letter are allowed",
                  },
                }}
                render={({ field, fieldState }) => (
                  <TextInput
                    firstIcon="fa-solid fa-signature"
                    onChange={field.onChange}
                    label="First Name"
                    placeholder="Max"
                    type="text"
                    value={field.value}
                    onBlur={field.onBlur}
                    error={fieldState.error}
                  />
                )}
              />
            </div>
            <div className={currentRound === 1 ? "flex" : "hidden"}>
              <Controller
                name="lastName"
                control={control}
                rules={{
                  required: "Last name is required",
                  pattern: {
                    value: /^[a-zA-Z]+$/,
                    message: "Only letter are allowed",
                  },
                }}
                render={({ field, fieldState }) => (
                  <TextInput
                    firstIcon="fa-solid fa-signature"
                    onChange={field.onChange}
                    label="Last Name"
                    placeholder="Musterman"
                    type="text"
                    value={field.value}
                    onBlur={field.onBlur}
                    error={fieldState.error}
                  />
                )}
              />
            </div>
            <div className={currentRound === 2 ? "flex" : "hidden"}>
              <Controller
                name="birthday"
                control={control}
                rules={{
                  required: "Birthday is required",
                }}
                render={({ field, fieldState }) => (
                  <TextInput
                    firstIcon="fa-solid fa-calendar-days"
                    onChange={field.onChange}
                    label="Birthday"
                    placeholder="25.10.1999"
                    type="date"
                    value={field.value}
                    onBlur={field.onBlur}
                    error={fieldState.error}
                  />
                )}
              />
            </div>
            <div className={currentRound === 2 ? "flex" : "hidden"}>
              <Controller
                name="gender"
                control={control}
                rules={{ required: "Select an option" }}
                render={({ field, fieldState }) => (
                  <Select
                    icon={genderSelect.icon}
                    placeholder={genderSelect.placeholder}
                    itemList={genderSelect.list}
                    onChange={field.onChange}
                    label="What is your gender?"
                    error={fieldState.error}
                  />
                )}
              />
            </div>
            <div className={currentRound === 2 ? "flex" : "hidden"}>
              <Controller
                name="city"
                control={control}
                rules={{
                  required: "City is required",
                }}
                render={({ field, fieldState }) => (
                  <TextInput
                    firstIcon="fa-solid fa-city"
                    onChange={field.onChange}
                    label="City you live in"
                    placeholder="Dresden"
                    type="text"
                    value={field.value}
                    onBlur={field.onBlur}
                    error={fieldState.error}
                  />
                )}
              />
            </div>
            <div className={currentRound === 3 ? "flex" : "hidden"}>
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
            </div>
          </div>
          {/* bottom */}
          <div className="flex flex-col gap-y-2 text-sm">
            <Btn
              type="submit"
              uiType="primary"
              title={currentRound === round.length - 1 ? "Finish" : "Continue"}
              onClick={handleCallbackPrimaryBtn}
            />
            <Btn
              type="button"
              uiType="secondary"
              title={currentRound === 0 ? "Sign Up with Google" : "Go Back"}
              onClick={handleCallbackSecondaryBtn}
            />
            <span className="text-lmGrey500 dark:text-dmGrey300">
              Already have an Account?{" "}
              <span
                onClick={handleSignInClick}
                className="cursor-pointer underline underline-offset-2 duration-300 dark:hover:text-dmGrey100"
              >
                Sign In instead
              </span>
            </span>
          </div>
        </form>
      </div>
    </SignWrapper>
  );
};

export default SignUp;
