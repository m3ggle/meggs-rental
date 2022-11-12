import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";
import SignWrapper from "../../components/SignWrapper";
import ExampleData from "../../ExampleData";
import { useSignStateData } from "../../hooks/useSignStateData";
import SignUpBdayGenderCity from "./view/SignUpBdayGenderCity";
import SignUpConfirmation from "./view/SignUpConfirmation";
import SignUpEmail from "./view/SignUpEmail";
import SignUpName from "./view/SignUpName";
import SignUpPassword from "./view/SignUpPassword";

const SignUp = () => {
  // dataCollection should be stored inside the url
  const { storeDataInState } = useSignStateData();
  const [currentRound, setCurrentRound] = useState(0);
  const { signUpRounds } = ExampleData();

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
      case false:
        setCurrentRound((prevState) => prevState - 1);
        break;
      default:
        break;
    }
  };

  const renderComponent = () => {
    switch (currentRound) {
      case 0:
        return <SignUpEmail handleCallback={handleCallback} />;
      case 1:
        return <SignUpConfirmation handleCallback={handleCallback} />;
      case 2:
        return <SignUpPassword handleCallback={handleCallback} />;
      case 3:
        return <SignUpName handleCallback={handleCallback} />;
      case 4:
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
            {signUpRounds[currentRound].title}
          </span>
          <ProgressBar amount={signUpRounds.length} finished={currentRound} />
        </div>
        {renderComponent()}
      </div>
    </SignWrapper>
  );
};

export default SignUp;
