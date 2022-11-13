import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";
import SignWrapper from "../../components/SignWrapper";
import ExampleData from "../../ExampleData";
import { useMultiStepHelper } from "../../utilities/useMultiStepHelper";
import SignUpBdayGenderCity from "./view/SignUpBdayGenderCity";
import SignUpConfirmation from "./view/SignUpConfirmation";
import SignUpEmail from "./view/SignUpEmail";
import SignUpName from "./view/SignUpName";
import SignUpPassword from "./view/SignUpPassword";

const SignUp = () => {
  const {
    handleStorage,
    handleContinue,
    handleGoBack,
    handleGoogle,
    handleEmailContinue,
    handleConfirmationContinue,
  } = useMultiStepHelper();
  let [searchParams] = useSearchParams();
  const currentRound = +searchParams.get("round");
  const navigate = useNavigate();

  const { signUpRounds } = ExampleData();

  useEffect(() => {
    if (currentRound === 0 || !currentRound) {
      const newParam = new URLSearchParams({ round: 1 });
      navigate(`/sign-up/?${newParam}`);
    }
  }, [navigate]);

  const handleCallback = ({ data, nextStep }) => {
    switch (nextStep) {
      case "google":
        handleGoogle();
        break;
      case "email":
        handleEmailContinue(data);
        handleStorage(data, "signUpData");
        break;
      case "confirmation":
        handleConfirmationContinue(data);
        handleStorage(data, "signUpData");
        break;
      case "finish":
        localStorage.removeItem("signUpData");
        navigate("/homepage");
        break;
      case true:
        handleContinue();
        handleStorage(data, "signUpData");
        break;
      case false:
        handleGoBack();
        break;
      default:
        break;
    }

    console.log(JSON.parse(localStorage.getItem("signUpData")));
  };

  console.log(currentRound);
  const renderComponent = () => {
    switch (currentRound) {
      case 1:
        return <SignUpEmail handleCallback={handleCallback} />;
      case 2:
        return <SignUpConfirmation handleCallback={handleCallback} />;
      case 3:
        return <SignUpPassword handleCallback={handleCallback} />;
      case 4:
        return <SignUpName handleCallback={handleCallback} />;
      case 5:
        return <SignUpBdayGenderCity handleCallback={handleCallback} />;
      default:
        return "";
    }
  };

  return (
    <SignWrapper pic="https://images.unsplash.com/photo-1628437255792-911a5d23097e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80">
      <div className="flex w-full max-w-[348px] flex-col gap-y-[48px]">
        {/* title part */}
        <div className="flex flex-col items-center justify-center gap-y-2 p-2">
          <span className="text-2xl text-lmGrey800 dark:text-dmGrey25">
            {signUpRounds[currentRound - 1].title}
          </span>
          <ProgressBar
            amount={signUpRounds.length}
            finished={currentRound - 1}
          />
        </div>
        {renderComponent()}
      </div>
    </SignWrapper>
  );
};

export default SignUp;
