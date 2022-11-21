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

  return (
    <SignWrapper pic="https://images.unsplash.com/photo-1651304285431-e46e5e15ed7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80">
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
