import React, { useState } from "react";
import ProgressBar from "../../components/ProgressBar";
import SignWrapper from "../../components/SignWrapper";
import ExampleData from "../../ExampleData";
import SignUpConfirmation from "./view/SignUpConfirmation";
import SignUpEmail from "./view/SignUpEmail";
import SignUpPassword from "./view/SignUpPassword";

const round = [
  {
    title: "Create a new account",
  },
  {
    title: "Confirm your Email Address",
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
  // dataCollection should be stored inside the url
  const [dataCollection, setDataCollection] = useState({
    email: "",
    confirmation: false,
    password: "",
  });
  const [currentRound, setCurrentRound] = useState(0);

  const handleCallback = ({ data, nextStep }) => {
    if (nextStep === "google") {
      setCurrentRound((prevState) => prevState + 2);
    } else if (nextStep) {
      let currentData = dataCollection;
      Object.entries(data).map((item) => {
        currentData[item[0]] = item[1];
      });
      console.log(currentData);
      setDataCollection({ ...currentData });
      setCurrentRound((prevState) => prevState + 1);
    } else {
      setCurrentRound((prevState) => prevState - 1);
    }
  };

  const renderComponent = () => {
    switch (currentRound) {
      case 0:
        return <SignUpEmail handleCallback={handleCallback} />;
      case 1:
        return <SignUpConfirmation handleCallback={handleCallback} />;
      case 2:
        return <SignUpPassword handleCallback={handleCallback} />;
      case 3:
        return <SignUpPassword handleCallback={handleCallback} />;
      default:
        return "";
    }
  };

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
        {renderComponent()}

        {/* <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full max-w-[340px] flex-col gap-y-8"
        >
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
        </form> */}
      </div>
    </SignWrapper>
  );
};

export default SignUp;
