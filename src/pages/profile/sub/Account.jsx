import React from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "../../../components/input/Select";
import TextArea from "../../../components/input/TextArea";
import TextInput from "../../../components/input/TextInput";
import SignWrapper from "../../../components/SignWrapper";
import ExampleData from "../../../ExampleData";
import ProfileSubHeader from "../view/ProfileSubHeader";

const { genderSelect } = ExampleData();

const Account = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <SignWrapper
      puffer={false}
      pic="https://images.unsplash.com/photo-1658391157361-43b9984cbddf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    >
      <div className="flex w-full max-w-[348px] flex-col gap-y-3 overflow-y-scroll px-[2px] py-6">
        <ProfileSubHeader title="Account" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-y-3"
        >
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
                type="text"
                value={field.value}
                onBlur={field.onBlur}
                error={fieldState.error}
              />
            )}
          />
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
                label="Preferred city, city you live in"
                placeholder="Dresden"
                type="text"
                value={field.value}
                onBlur={field.onBlur}
                error={fieldState.error}
              />
            )}
          />
          <Controller
            name="smoking"
            control={control}
            render={({ field, fieldState }) => (
              <TextInput
                firstIcon="fa-solid fa-smoking"
                onChange={field.onChange}
                label="Do you smoke?"
                placeholder="No"
                type="text"
                value={field.value}
                onBlur={field.onBlur}
                error={fieldState.error}
              />
            )}
          />
          <Controller
            name="bio"
            control={control}
            render={({ field, fieldState }) => (
              <TextArea
                onChange={field.onChange}
                label="A place for a short bio."
                placeholder="I rather use my bike than driving in my car, so hit me up if you want to borrow it :D"
                value={field.value}
                name={field.name}
                onBlur={field.onBlur}
                error={fieldState.error}
              />
            )}
          />
          <button
            type="submit"
            onClick={onSubmit}
            className="flex w-[340px] items-center justify-center rounded-lg bg-lmPrimary py-3 px-4 text-white shadow-md"
          >
            Submit changes
          </button>
        </form>
      </div>
    </SignWrapper>
  );
};

export default Account;
