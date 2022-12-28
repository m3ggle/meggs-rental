import { signInWithEmailAndPassword, updatePassword } from "firebase/auth";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import BottomPart from "../../../../components/authentication/BottomPart";
import TextInput from "../../../../components/input/TextInput";
import { auth } from "../../../../firebase.config";
import { regexPassword } from "../../../../helper/regexCollection";
import { useUrlManipulation } from "../../../../hooks/urlManipulation/useUrlManipulation";

const ForgotPasswordPassword = () => {
  const { getSingleParam } = useUrlManipulation();
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const userEmail = getSingleParam("email") ?? undefined;

    if (userEmail) {
      signInWithEmailAndPassword(auth, userEmail, data.oldPassword).then(() => {
        updatePassword(auth.currentUser, data.newPassword)
          .then(() => {
            // Todo: toast, password got updated
            navigate("/profile");
          })
          .catch((error) => {
            // Todo: toast, error
            console.log(error.code, error.message);
          });
      });
    } else {
      // todo: toast use the link in the email we send you
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[340px] flex-col gap-y-8"
    >
      <div className="flex w-full flex-col gap-y-2">
        <Controller
          name="oldPassword"
          control={control}
          rules={{
            required: "Old Password is required",
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
              label="Old Password"
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
        firstBtnTitle="Set as new Password"
        firstBtnType="submit"
        firstBtnOnClick={handleSubmit}
      />
    </form>
  );
};

export default ForgotPasswordPassword;
