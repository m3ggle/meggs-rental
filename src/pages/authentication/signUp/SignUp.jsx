import React from "react";
import ProgressBar from "../../../components/ProgressBar";
import SignWrapper from "../../../components/wrapper/SignWrapper";
import { useMultiStepHelper } from "../../../hooks/useMultiStepHelper";
import { signUpRounds } from "../../../data/signUpRounds";
import SignUpEmailPassword from "./view/SignUpEmailPassword";
import SignUpName from "./view/SignUpName";
import SignUpUserNameCity from "./view/SignUpUserNameCity";

const SignUp = () => {
  const { currentRound } = useMultiStepHelper();

  const signUpBgFirstStage =
    "https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/public/website/picture-placeholders/streetBlueSky.webp";

  const renderComponent = {
    1: <SignUpName />,
    2: <SignUpUserNameCity />,
    3: <SignUpEmailPassword />,
  };

  return (
    <SignWrapper pic={signUpBgFirstStage}>
      <div className="flex w-full max-w-[348px] flex-col gap-y-[48px]">
        {/* title part */}
        <div className="flex flex-col items-center justify-center gap-y-2 p-2">
          <span className="text-2xl text-lmGrey800 dark:text-dmGrey25">
            {signUpRounds[currentRound - 1]?.title}
          </span>
          <ProgressBar
            amount={signUpRounds.length}
            finished={currentRound - 1}
          />
        </div>
        {renderComponent[currentRound]}
      </div>
    </SignWrapper>
  );
};

export default SignUp;
