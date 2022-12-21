import React from "react";
import ProgressBar from "../../../components/ProgressBar";
import SignWrapper from "../../../components/wrapper/SignWrapper";
import ExampleData from "../../../ExampleData";
import { useMultiStepHelper } from "../../../hooks/useMultiStepHelper";
import { useSignUpCallback } from "./hooks/useSignUpCallback";
import SignUpBdayGenderCity from "./view/SignUpBdayGenderCity";
import SignUpConfirmation from "./view/SignUpConfirmation";
import SignUpEmail from "./view/SignUpEmail";
import SignUpName from "./view/SignUpName";
import SignUpPassword from "./view/SignUpPassword";

const { signUpRounds } = ExampleData();

const SignUp = () => {
  const { currentRound } = useMultiStepHelper();
  const { handleCallback } = useSignUpCallback();

  const renderComponent = {
    1: <SignUpEmail handleCallback={handleCallback} />,
    2: <SignUpConfirmation handleCallback={handleCallback} />,
    3: <SignUpPassword handleCallback={handleCallback} />,
    4: <SignUpName handleCallback={handleCallback} />,
    5: <SignUpBdayGenderCity handleCallback={handleCallback} />,
  };

const signUpBg =
  "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2FstreetBlueSky.webp?alt=media&token=299dade6-a4d2-40cc-a099-cfb97431bec1";

  return (
    <SignWrapper pic={signUpBg}>
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
