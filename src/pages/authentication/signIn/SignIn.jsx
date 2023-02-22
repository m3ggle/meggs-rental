import React from "react";
import SignWrapper from "../../../components/wrapper/SignWrapper";
import SignInEmailPassword from "./view/SignInEmailPassword";

const SignIn = () => {
  const signInBg =
    "https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/public/website/picture-placeholders/newCar.webp";

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
        <SignInEmailPassword />
      </div>
    </SignWrapper>
  );
};

export default SignIn;
