import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import BottomPart from "../../../../components/authentication/BottomPart";
import TextInput from "../../../../components/input/TextInput";
import { useNotifyModalContext } from "../../../../context/notifyModal/notifyModalContext";
import { auth } from "../../../../firebase.config";
import { regexEmail, regexPassword } from "../../../../helper/regexCollection";
import { useGetUserByEmail } from "../../../../hooks/firebase/useGetUserByEmail";
import { useMultiStepHelper } from "../../../../hooks/useMultiStepHelper";

const SignInEmailPassword = () => {
  const { control, handleSubmit } = useForm();

  const { dispatchNotifyModal, closeNotifyModal } = useNotifyModalContext();
  const { handleGoogle: handleGoogleHelper } = useMultiStepHelper();
  const { getUserByEmail } = useGetUserByEmail();

  const onSubmit = async (data) => {
    const userInformation = await getUserByEmail(data.email);

    // does not have an acc
    if (userInformation === undefined) {
      const desktopPhotoUrl =
        "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2FthreeCars.webp?alt=media&token=51d51fb2-414d-44a4-a549-40a36666b7cb";
      const mobilePhotoUrl =
        "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2Fmoped.webp?alt=media&token=c3fbae96-06a8-4121-9067-25ca1dcea4af";

      dispatchNotifyModal({
        type: "SET_NOTIFY_MODAL",
        payload: {
          isOpen: true,
          preMade: "standard",
          extraInfo: {
            title: "Your Email was not found",
            bulletPoints: [
              `"${data.email}" was not found.`,
              "Is there a typo? Close the modal, correct the typo and try again.",
              `Do not have an account yet? Click the "Create a new Account" button.`,
            ],
            primaryButton: {
              title: "Create a new Account",
              function: () => {
                closeNotifyModal();
                const prep = {
                  round: 1,
                  email: data.email,
                  password: data.password,
                };
                const nextParams = new URLSearchParams(prep);
                navigate(`/sign-up?${nextParams}`);
              },
            },
            secondaryButton: {
              title: "Typo in the Email input",
              function: closeNotifyModal,
            },
          },
          photoUrl: {
            desktop: desktopPhotoUrl,
            mobile: mobilePhotoUrl,
          },
        },
      });
      return;
    }

    // is not verified
    if (!userInformation.displayName) {
      // Todo: toast
      console.log("you have an account but you are not verified");

      const params = {
        round: 3,
        apiKey: "AIzaSyC1ssliMOJ0ctBKYbefFn_IIm4PmqI0tPo",
        email: data.email,
      };

      const nextSearchParams = new URLSearchParams(params);
      navigate(`/sign-up?${nextSearchParams}`);
      return;
    }

    // alright
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        // Todo: toast
        navigate("/homepage");
      })
      .catch((error) => {
        // Todo: toast
        // most likely wrong password
        console.log(error.message);
      });
  };

  const handleGoogle = () => handleGoogleHelper();

  const navigate = useNavigate();
  const handleForgotClick = () => navigate("/forgot-password");
  const handleSignUpClick = () => navigate("/sign-up");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[340px] flex-col gap-y-8"
    >
      <div className="flex w-full flex-col gap-y-2">
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
              value: regexPassword,
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
      <BottomPart
        firstBtn="primary"
        firstBtnTitle="Sign In"
        firstBtnType="submit"
        firstBtnOnClick={handleSubmit}
        secondBtn="secondary"
        secondBtnTitle="Sign Up with Google"
        secondBtnType="button"
        secondBtnOnClick={handleGoogle}
        underBtnFirstText="Forgot your password?"
        underBtnFirstLinkText="Let's fix that"
        underBtnFirstOnClick={handleForgotClick}
        underBtnSecondText="Don't have a account?"
        underBtnSecondLinkText="Sign Up here"
        underBtnSecondOnClick={handleSignUpClick}
      />
    </form>
  );
};

export default SignInEmailPassword;
