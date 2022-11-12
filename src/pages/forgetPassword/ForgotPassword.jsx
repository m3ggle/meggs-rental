import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";
import SignWrapper from "../../components/SignWrapper";
import ExampleData from "../../ExampleData";
import { useSignStateData } from "../../hooks/useSignStateData";
import ForgotPasswordEmail from "./view/ForgotPasswordEmail";
import ForgotPasswordPassword from "./view/ForgotPasswordPassword";

const ForgotPassword = () => {
  const { storeDataInState } = useSignStateData();
  const [currentRound, setCurrentRound] = useState(0);
  const { forgotPasswordRounds } = ExampleData();

  const navigate = useNavigate();

  const handleCallback = ({ data, nextStep }) => {
    switch (nextStep) {
      case "google":
        setCurrentRound((prevState) => prevState + 2);
        break;
      case "finished":
        storeDataInState(data);
        navigate("/homepage");
        break;
      case true:
        storeDataInState(data);
        setCurrentRound((prevState) => prevState + 1);
        break;
      default:
        break;
    }
  };

  const renderComponent = () => {
    switch (currentRound) {
      case 0:
        return <ForgotPasswordEmail handleCallback={handleCallback} />;
      case 1:
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
            {forgotPasswordRounds[currentRound].title}
          </span>
          <ProgressBar
            amount={forgotPasswordRounds.length}
            finished={currentRound}
          />
        </div>
        {renderComponent()}
      </div>
    </SignWrapper>
  );
};

export default ForgotPassword;
