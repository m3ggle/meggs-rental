import React from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput from "../../../../components/input/TextInput";
import BottomPart from "../../../../components/authentication/BottomPart";
import { auth } from "../../../../firebase.config";
import { updateProfile } from "firebase/auth";

const SignUpConfirmation = ({ handleCallback }) => {
  const { email } =
    JSON.parse(localStorage.getItem("signUpData")) ?? false;

  const { control, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    // console.log("code confirmed");
    // const nextStep = "confirmation";
    // handleCallback({ data, nextStep });
  };

  const handleGoBack = () => {
    const nextStep = false;
    handleCallback({ nextStep });
  };

  // Todo: in pattern, compare input value with code
  // Todo: delete user/emails from firebase which are out of the time interval of 7 days
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[340px] flex-col gap-y-8"
    >
      {/* <Controller
        name="confirmation"
        control={control}
        rules={{
          required: "Code is required",
          pattern: {
            value: /^\d+$/,
            message: "Invalid code",
          },
        }}
        defaultValue={confirmation ? confirmation : undefined}
        render={({ field, fieldState }) => (
          <TextInput
            type="number"
            firstIcon="fa-solid fa-barcode"
            onChange={field.onChange}
            label="Enter the code which we send you to your email"
            placeholder="123456"
            value={field.value}
            onBlur={field.onBlur}
            error={fieldState.error}
          />
        )}
      /> */}
      <div className="h-fit w-full">
        {/* <span className="text-xl text-lmGrey600">Recommended next steps</span> */}
        <ul className="list-disc pl-6 flex flex-col gap-y-2 text-base text-lmGrey600 dark:text-dmGrey100">
          <li>We send you an email to "{email}".</li>
          <li>Check your invoices and spam folder.</li>
          <li>Found it? Click the blue highlighted text.</li>
          <li>If not, then click the "Send Again" button.</li>
          <li>Still nothing? Click the "Go Back" button and check if you put in your correct email address.</li>
        </ul>

        {/* <span>
          We send you an email to "{email}". Check your email and your spam
          folder, if you found an no-reply email from Megg's Rental, click on
          the blue highlighted link to verify your email address.
        </span> */}
      </div>
      <BottomPart
        firstBtn="primary"
        firstBtnTitle="Send Again"
        firstBtnType="submit"
        firstBtnOnClick={handleSubmit}
        secondBtn="secondary"
        secondBtnTitle="Go Back"
        secondBtnType="button"
        secondBtnOnClick={handleGoBack}
      />
    </form>
  );
};

export default SignUpConfirmation;
