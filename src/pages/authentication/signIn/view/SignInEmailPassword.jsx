import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import BottomPart from "../../../../components/authentication/BottomPart";
import TextInput from "../../../../components/input/TextInput";
import { auth, db } from "../../../../firebase.config";
import { regexEmail, regexPassword } from "../../../../helper/regexCollection";
import { useMultiStepHelper } from "../../../../hooks/useMultiStepHelper";

const SignInEmailPassword = () => {
  const { control, handleSubmit } = useForm();

  const { handleGoogle: handleGoogleHelper } = useMultiStepHelper();

  const onSubmit = async (data) => {
    let userInformation;
    const q = query(collection(db, "users"), where("email", "==", data.email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      userInformation = doc.data();
    });


    // does not have an acc
    if (userInformation === undefined) {
      // Todo: toast
      console.log("you don't have an account yet, create one");
      // Todo: call Modal, ask if he is sure this is his correct email address because this email does not exist in our database
      /*
      options: 
      - this is the correct email address, meaning, sign up (create a basic account and then link to "/sign-up?round=1")
      - there is a typo: close the modal and change the email
      */

      // navigate("/sign-up?round=1");
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
    signInWithEmailAndPassword(auth, data.email, data.password).catch(
      (error) => {
        // Todo: toast
        // most likely wrong password
        console.log(error.message);
      }
    );
  };

  const handleGoogle = () => handleGoogleHelper();

  // outsource
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
