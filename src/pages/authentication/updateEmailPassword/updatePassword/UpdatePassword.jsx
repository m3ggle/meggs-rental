import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import BottomPart from "../../../../components/authentication/BottomPart";
import TextInput from "../../../../components/input/TextInput";
import { regexPassword } from "../../../../helpers/regexCollection";
import { updateAuthPassword } from "../../../profile/subpages/helper/updateAuthPassword";

const UpdatePassword = () => {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  // react query (
  // if possible pass in the function, uid

  const onSubmit = async (data) => {
    const { currentPassword, newPassword } = data;
    // refetch
    const result = await updateAuthPassword({ currentPassword, newPassword });

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
        <Controller
          name="newPassword"
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
              label="New Password"
              placeholder="••••••••••"
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
        firstBtnTitle="Update password"
        firstBtnType="submit"
        firstBtnOnClick={handleSubmit}
        secondBtn="secondary"
        secondBtnTitle="Go Back"
        secondBtnType="button"
        secondBtnOnClick={handleGoBack}
        underBtnFirstText="Want to update your email?"
        underBtnFirstLinkText="Here"
        underBtnFirstOnClick={() => navigate("/update-email")}
        underBtnSecondText="Forgot your password?"
        underBtnSecondLinkText="Let's fix that"
        underBtnSecondOnClick={() => navigate("/forgot-password")}
      />
    </form>
  );
};

export default UpdatePassword;
