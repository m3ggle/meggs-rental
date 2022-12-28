import { sendEmailVerification } from "firebase/auth";
import React from "react";
import BottomPart from "../../../../components/authentication/BottomPart";
import { auth } from "../../../../firebase.config";

const SignUpConfirmation = ({ handleCallback }) => {
  const { email } = JSON.parse(localStorage.getItem("signUpData")) ?? false;

  const handleSendAgain = async () => {
    if (!email) {
      console.log("email is missing, please go back")
      return
    }

    await sendEmailVerification(auth.currentUser);
    console.log(`email was send to: ${email}`)
  };

  const handleGoBack = () => {
    const nextStep = false;
    handleCallback({ nextStep });
  };

  return (
    <div className="flex w-full max-w-[340px] flex-col gap-y-8">
      <div className="h-fit w-full">
        <ul className="flex list-disc flex-col gap-y-2 pl-6 text-base text-lmGrey600 dark:text-dmGrey100">
          <li>We send you an email to "{email}".</li>
          <li>Check your invoices and spam folder.</li>
          <li>Found it? Click the blue highlighted text.</li>
          <li>If not, then click the "Send Again" button.</li>
          <li>
            Still nothing? Click the "Go Back" button and check if you put in
            your correct email address.
          </li>
        </ul>
      </div>
      <BottomPart
        firstBtn="primary"
        firstBtnTitle="Send Again"
        firstBtnType="submit"
        firstBtnOnClick={handleSendAgain}
        secondBtn="secondary"
        secondBtnTitle="Go Back"
        secondBtnType="button"
        secondBtnOnClick={handleGoBack}
      />
    </div>
  );
};

export default SignUpConfirmation;
