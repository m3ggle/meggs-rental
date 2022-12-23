import React from "react";
import ProgressBar from "../../../components/ProgressBar";
import SignWrapper from "../../../components/wrapper/SignWrapper";
import ExampleData from "../../../ExampleData";
import { auth } from "../../../firebase.config";
import { useMultiStepHelper } from "../../../hooks/useMultiStepHelper";
import { useSignUpCallback } from "./hooks/useSignUpCallback";
import SignUpBdayGenderCity from "./view/SignUpBdayGenderCity";
import SignUpConfirmation from "./view/SignUpConfirmation";
import SignUpEmailPassword from "./view/SignUpEmailPassword";
import SignUpName from "./view/SignUpName";

const { signUpRounds } = ExampleData();

const SignUp = () => {
  const { currentRound } = useMultiStepHelper();
  const { handleCallback } = useSignUpCallback();

  const renderComponent = {
    1: <SignUpEmailPassword handleCallback={handleCallback} />,
    2: <SignUpConfirmation handleCallback={handleCallback} />,
    3: <SignUpName handleCallback={handleCallback} />,
    4: <SignUpBdayGenderCity handleCallback={handleCallback} />,
  };

  const signUpBgFirstStage =
    "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2FstreetBlueSky.webp?alt=media&token=299dade6-a4d2-40cc-a099-cfb97431bec1";
  const signUpBgSecondStage =
    "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2FsharedRide.webp?alt=media&token=299dade6-a4d2-40cc-a099-cfb97431bec1";

  console.log(auth.currentUser)
  
  return (
    <SignWrapper
      pic={currentRound < 3 ? signUpBgFirstStage : signUpBgSecondStage}
    >
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
