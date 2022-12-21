import React from "react";
import SignWrapper from "../../../components/wrapper/SignWrapper";
import { useSignUpCallback } from "../signUp/hooks/useSignUpCallback";
import SignInEmailPassword from "./view/SignInEmailPassword";

const SignIn = () => {
  const { handleCallback } = useSignUpCallback();

  const signInBg =
    "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2FnewCar.webp?alt=media&token=299dade6-a4d2-40cc-a099-cfb97431bec1";

  return (
    <SignWrapper pic={signInBg}>
      <div className="flex w-full max-w-[348px] flex-col gap-y-[48px]">
        {/* title part */}
        <div className="flex flex-col items-center justify-center gap-y-1 p-2">
          <span className="text-2xl text-lmGrey800 dark:text-dmGrey25">
            Welcome Back
          </span>
          <span className="text-base text-lmGrey600 dark:text-dmGrey300">
            Suspendisse et nunc fringilla in tempus.
          </span>
        </div>
        <SignInEmailPassword handleCallback={handleCallback} />
      </div>
    </SignWrapper>
  );
};

export default SignIn;
