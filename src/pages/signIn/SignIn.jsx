import React from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput from "../../components/input/TextInput";
import ProgressBar from "../../components/ProgressBar";
import CarsStreet from "../../assets/img/carsStreet.jpg"
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const navigate = useNavigate()

  const handleHomeButtonClick = () => {
    navigate("/homepage")
  }

  return (
    <div className="relative flex w-full items-center overflow-scroll bg-white dark:bg-dmGrey900">
      {/* info part */}
      <div className="flex h-full w-full max-w-[560px 1000:max-w-none flex-col items-center gap-y-2 px-6 py-[28px]">
        {/* puffer */}
        <div className="h-[100px] w-full"></div>
        {/* main */}
        <div className="flex w-full max-w-[348px] flex-col gap-y-[48px]">
          {/* title part */}
          <div className="flex flex-col items-center justify-center gap-y-2 p-2">
            <span className="text-2xl text-lmGrey800 ">Almost finished</span>
            <ProgressBar amount={4} finished={2} />
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
                className="flex items-center justify-center rounded-lg bg-lmPrimary py-3 px-4 text-white shadow-md">
                Sign In
              </button>
              <button className="flex items-center justify-center rounded-lg bg-primary100 py-3 px-4 text-lmPrimary">
                Sign In with Google
              </button>
              <span className="text-lmGrey500">
                Already have an Account?{" "}
                <span className="text-lmGrey500 underline underline-offset-2">
                  Sign In instead
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* pic part */}
      <div className="relative h-screen w-full p-3 1000:flex hidden">
        <div
          className="h-full w-full rounded-[30px] bg-lmGrey100 bg-cover bg-center"
          style={{ backgroundImage: `url(${CarsStreet})` }}
        />
        <button
          onClick={handleHomeButtonClick}
          className="absolute top-[56px] right-[76px] flex h-[64px] w-[64px] items-center justify-center rounded-full bg-white">
          <i className="fa-solid fa-house text-[28px] text-lmGrey800"></i>
        </button>
      </div>
    </div>
  );
};

export default SignIn;
