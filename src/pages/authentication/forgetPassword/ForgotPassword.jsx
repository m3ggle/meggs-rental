import React from "react";
import ProgressBar from "../../../components/ProgressBar";
import SignWrapper from "../../../components/wrapper/SignWrapper";
import ExampleData from "../../../ExampleData";
import { useMultiStepHelper } from "../../../hooks/useMultiStepHelper";
import { useForgotPasswordCallback } from "./hooks/useForgotPasswordCallback";
import ForgotPasswordEmail from "./view/ForgotPasswordEmail";
import ForgotPasswordPassword from "./view/ForgotPasswordPassword";

const ForgotPassword = () => {
  const { forgotPasswordRounds } = ExampleData();
  const { currentRound } = useMultiStepHelper();
  const { handleCallback } = useForgotPasswordCallback();

  const renderComponent = {
    1: <ForgotPasswordEmail handleCallback={handleCallback} />,
    2: <ForgotPasswordPassword handleCallback={handleCallback} />,
  };

  const forgotPasswordBg =
    "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2FitalienStreet.webp?alt=media&token=299dade6-a4d2-40cc-a099-cfb97431bec1";

  return (
    <SignWrapper pic={forgotPasswordBg}>
      <div className="flex w-full max-w-[348px] flex-col gap-y-[48px]">
        {/* title part */}
        <div className="flex flex-col items-center justify-center gap-y-1 p-2">
          <span className="text-2xl text-lmGrey800 dark:text-dmGrey25">
            {forgotPasswordRounds[currentRound - 1].title}
          </span>
          <ProgressBar
            amount={forgotPasswordRounds.length}
            finished={currentRound - 1}
          />
        </div>
        {renderComponent[currentRound]}
      </div>
    </SignWrapper>
  );
};

export default ForgotPassword;
