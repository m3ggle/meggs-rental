import React from "react";
import ProgressBar from "../../../components/ProgressBar";
import SignWrapper from "../../../components/wrapper/SignWrapper";
import { useMultiStepHelper } from "../../../hooks/useMultiStepHelper";
import {
  forgotPasswordBg,
  forgotPasswordRounds,
} from "../../../data/forgotPasswordStatic";
import ForgotPasswordEmail from "./view/ForgotPasswordEmail";
import ForgotPasswordPassword from "./view/ForgotPasswordPassword";

const ForgotPassword = () => {
  const { currentRound } = useMultiStepHelper();

  const renderComponent = {
    1: <ForgotPasswordEmail />,
    2: <ForgotPasswordPassword />,
  };

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
