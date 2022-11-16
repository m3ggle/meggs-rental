import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";
import SignWrapper from "../../components/SignWrapper";
import ExampleData from "../../ExampleData";
import { useMultiStepHelper } from "../../utilities/useMultiStepHelper";
import ForgotPasswordEmail from "./view/ForgotPasswordEmail";
import ForgotPasswordPassword from "./view/ForgotPasswordPassword";

const ForgotPassword = () => {
  const { handleStorage, handleEmailContinue } = useMultiStepHelper();
  let [searchParams, setSearchParams] = useSearchParams();
  const currentRound = searchParams.get("round")
    ? +searchParams.get("round")
    : 1;
  const navigate = useNavigate();

  const { forgotPasswordRounds } = ExampleData();

  useEffect(() => {
    if (!searchParams.get("round")) {
      searchParams.set("round", 1);
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams]);

  const handleCallback = ({ data, nextStep }) => {
    switch (nextStep) {
      case "google":
        navigate("/homepage");
        break;
      case "finished":
        navigate("/homepage");
        break;
      case "email":
        handleEmailContinue(data);
        handleStorage(data, "forgotPasswordData");
        break;
      default:
        break;
    }
  };

  const renderComponent = () => {
    switch (currentRound) {
      case 1:
        return <ForgotPasswordEmail handleCallback={handleCallback} />;
      case 2:
        return <ForgotPasswordPassword handleCallback={handleCallback} />;
      default:
        return "";
    }
  };

  return (
    <SignWrapper pic="https://images.unsplash.com/photo-1651304285431-e46e5e15ed7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80">
      <div className="flex w-full max-w-[348px] flex-col gap-y-[48px]">
        {/* title part */}
        <div className="flex flex-col items-center justify-center gap-y-1 p-2">
          <span className="text-2xl text-lmGrey800 dark:text-dmGrey25">
            {forgotPasswordRounds[currentRound -1].title}
          </span>
          <ProgressBar
            amount={forgotPasswordRounds.length}
            finished={currentRound - 1}
          />
        </div>
        {renderComponent()}
      </div>
    </SignWrapper>
  );
};

export default ForgotPassword;
