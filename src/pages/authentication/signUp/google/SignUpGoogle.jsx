import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import BottomPart from "../../../../components/authentication/BottomPart";
import MobileCatalogAutocomplete from "../../../../components/filter/MobileCatalogAutocomplete";
import TextInput from "../../../../components/input/TextInput";
import {
  regexEmail,
  regexName,
  regexUserName,
} from "../../../../helpers/regexCollection";
import { useSignUpEmailPasswordSubmit } from "../hooks/useSignUpEmailPasswordSubmit";
import { useSignUpUserNameCityHelpers } from "../hooks/useSignUpUserNameCityHelpers";
import { signUpGoogleGetCurrentUser } from "./helpers/signUpGoogleGetCurrentUser";
import { useSignUpGoogleOnSubmit } from "./hooks/useSignUpGoogleOnSubmit";

const SignUpGoogle = () => {
  const { firstName, lastName, userName, city } =
    JSON.parse(localStorage.getItem("signUpData")) ?? false;

  // states
  const [uid, setUid] = useState(null);
  const [preferredCity, setPreferredCity] = useState(null);

  // hooks
  const { control, handleSubmit, setValue } = useForm();
  const { handleUserNameChange } = useSignUpUserNameCityHelpers();
  const { handleEmailChange } = useSignUpEmailPasswordSubmit();
  const { onSubmit } = useSignUpGoogleOnSubmit({ uid, preferredCity });

  // effects
  useEffect(() => {
    signUpGoogleGetCurrentUser(setUid, setValue);
  }, []);

  // other functions
  const autocompleteCallback = (data) => {
    const preferredCity = {
      name: data.name,
      bounds: data.extraInfo.bounds,
      center: data.extraInfo.center,
    };

    setPreferredCity(preferredCity);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[340px] flex-col gap-y-8"
    >
      <div className="flex w-full flex-col gap-y-3">
        <Controller
          name="firstName"
          control={control}
          rules={{
            required: "First name is required",
            pattern: {
              value: regexName,
              message: "Only letter are allowed",
            },
          }}
          defaultValue={firstName ? firstName : undefined}
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
              value: regexName,
              message: "Only letter are allowed",
            },
          }}
          defaultValue={lastName ? lastName : undefined}
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
          name="userName"
          control={control}
          rules={{
            required: "User name is required",
            pattern: {
              value: regexUserName,
              message:
                "Only letters and numbers, hyphen and underscore are allowed, min. characters of 3 and max. 14",
            },
          }}
          defaultValue={userName ? userName : undefined}
          render={({ field, fieldState }) => (
            <TextInput
              firstIcon="fa-solid fa-user"
              onChange={(e) => {
                field.onChange(e);
                handleUserNameChange(e);
              }}
              label="User Name"
              placeholder="Sad-Praline"
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
              value: regexEmail,
              message: "Invalid email address",
            },
          }}
          defaultValue={undefined}
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
        <MobileCatalogAutocomplete
          value={city ? city : undefined}
          label="Preferred city (default Berlin)"
          definedActions="mapCatalog"
          control={control}
          callbackFunction={autocompleteCallback}
        />
      </div>
      <BottomPart
        firstBtn="primary"
        firstBtnTitle="Create Account"
        firstBtnType="submit"
        firstBtnOnClick={handleSubmit}
        // secondBtn="secondary"
        // secondBtnTitle=""
        // secondBtnType="button"
        // secondBtnOnClick={handleGoogleSignUp}
      />
    </form>
  );
};

export default SignUpGoogle;
