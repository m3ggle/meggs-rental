import React from "react";
import { Controller, useForm } from "react-hook-form";
import BottomPart from "../../../../components/authentication/BottomPart";
import TextInput from "../../../../components/input/TextInput";
import { regexEmail } from "../../../../helper/regexCollection";
import { useMultiStepHelper } from "../../../../hooks/useMultiStepHelper";
import { useForgotPasswordEmailLogic } from "../hooks/useForgotPasswordEmailLogic";

const ForgotPasswordEmail = () => {
  const { control, handleSubmit } = useForm();
  const { handleGoogle } = useMultiStepHelper();
  const { onSubmit, handleSignInClick } = useForgotPasswordEmailLogic();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[340px] flex-col gap-y-8"
    >
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
        // Todo: defaultValue={users email}
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
      <BottomPart
        firstBtn="primary"
        firstBtnTitle="Send Email"
        firstBtnType="submit"
        firstBtnOnClick={handleSubmit}
        secondBtn="secondary"
        secondBtnTitle="Sign In with Google"
        secondBtnType="button"
        secondBtnOnClick={handleGoogle}
        underBtnFirstText="Already have an Account?"
        underBtnFirstLinkText="Sign In instead"
        underBtnFirstOnClick={handleSignInClick}
      />
    </form>
  );
};

export default ForgotPasswordEmail;
