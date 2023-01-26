import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import BottomPart from "../../../../components/authentication/BottomPart";
import TextInput from "../../../../components/input/TextInput";
import { regexEmail, regexPassword } from "../../../../helpers/regexCollection";
import { updateAuthEmail } from "../../../profile/subpages/helper/updateAuthEmail";

const UpdateEmail = () => {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { newEmail, currentPassword } = data;
    const result = await updateAuthEmail({ newEmail, currentPassword });

    // ironically this means everything went alright else there would be the error stored innit
    result === undefined && navigate("/profile");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[340px] flex-col gap-y-8"
    >
      <div className="flex w-full flex-col gap-y-2">
        <Controller
          name="newEmail"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: regexEmail,
              message: "Invalid email address",
            },
          }}
          render={({ field, fieldState }) => (
            <TextInput
              firstIcon="fa-solid fa-at"
              onChange={field.onChange}
              label="New Email"
              placeholder="maxMustermann@web.de"
              value={field.value}
              onBlur={field.onBlur}
              error={fieldState.error}
            />
          )}
        />
        <Controller
          name="currentPassword"
          control={control}
          rules={{
            required: "Password is required",
            pattern: {
              value: regexPassword,
              message:
                "Minimum 6 Characters - 1 upper and 1 lower case - 1 letter and 1 special character",
            },
          }}
          render={({ field, fieldState }) => (
            <TextInput
              firstIcon="fa-solid fa-lock"
              onChange={field.onChange}
              label="Current Password"
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
        firstBtnTitle="Update Email"
        firstBtnType="submit"
        firstBtnOnClick={handleSubmit}
        secondBtn="secondary"
        secondBtnTitle="Go Back"
        secondBtnType="button"
        secondBtnOnClick={handleGoBack}
        underBtnFirstText="Want to update your password?"
        underBtnFirstLinkText="Here"
        underBtnFirstOnClick={() => navigate("/update-password")}
        underBtnSecondText="Forgot your password?"
        underBtnSecondLinkText="Let's fix that"
        underBtnSecondOnClick={() => navigate("/forgot-password")}
      />
    </form>
  );
};

export default UpdateEmail;
