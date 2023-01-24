import React from "react";
import { Controller, useForm } from "react-hook-form";
import BottomPart from "../../../../components/authentication/BottomPart";
import MobileCatalogAutocomplete from "../../../../components/filter/MobileCatalogAutocomplete";
import TextInput from "../../../../components/input/TextInput";
import { regexUserName } from "../../../../helper/regexCollection";
import { useSignUpUserNameCityHelpers } from "../hooks/useSignUpUserNameCityHelpers";
import { useSignUpUserNameCitySubmit } from "../hooks/useSignUpUserNameCitySubmit";

const SignUpUserNameCity = () => {
  const { userName, city } = JSON.parse(localStorage.getItem("signUpData")) ?? false;

  const { control, handleSubmit } = useForm();
  const { handleGoBack, autocompleteCallback, handleUserNameChange } =
    useSignUpUserNameCityHelpers();
  const { onSubmit } = useSignUpUserNameCitySubmit();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[340px] flex-col gap-y-8"
    >
      <div className="flex w-full flex-col gap-y-3">
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
        firstBtnTitle="Continue"
        firstBtnType="submit"
        firstBtnOnClick={handleSubmit}
        secondBtn="secondary"
        secondBtnTitle="Go Back"
        secondBtnType="button"
        secondBtnOnClick={handleGoBack}
      />
    </form>
  );
};

export default SignUpUserNameCity;
