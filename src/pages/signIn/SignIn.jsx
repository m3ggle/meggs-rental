import React from "react";
import { useNavigate } from "react-router-dom";
import SignWrapper from "../../components/wrapper/SignWrapper";
import { useSignStateData } from "../../hooks/useSignStateData";
import SignInEmailPassword from "./view/SignInEmailPassword";

const SignIn = () => {
  const { storeDataInState } = useSignStateData();
  const navigate = useNavigate();

  const handleCallback = ({ data, nextStep }) => {
    switch (nextStep) {
      case "google":
        console.log("signing in");
        break;
      case "finished":
        storeDataInState(data);
        navigate("/homepage");
        break;
      default:
        break;
    }
  };

  return (
    <SignWrapper pic="https://images.unsplash.com/photo-1566896212627-e4f210557f0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80">
      <div className="flex w-full max-w-[348px] flex-col gap-y-[48px]">
        {/* title part */}
        <div className="flex flex-col items-center justify-center gap-y-1 p-2">
          <span className="text-2xl text-lmGrey800 dark:text-dmGrey25">
            Welcome Back
          </span>
          <span className="text-base text-lmGrey600 dark:text-dmGrey300">
            Suspendisse et nunc fringilla in tempus.
          </span>
        </div>
        <SignInEmailPassword handleCallback={handleCallback} />
      </div>
    </SignWrapper>
  );
};

export default SignIn;
