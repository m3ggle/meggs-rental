import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import BottomPart from "../../../../components/authentication/BottomPart";
import TextInput from "../../../../components/input/TextInput";
import { useNotifyModalContext } from "../../../../context/notifyModal/notifyModalContext";
import { auth } from "../../../../firebase.config";
import { regexEmail } from "../../../../helper/regexCollection";
import { useGetUserByEmail } from "../../../../hooks/firebase/useGetUserByEmail";
import { useMultiStepHelper } from "../../../../hooks/useMultiStepHelper";

const ForgotPasswordEmail = ({ handleCallback }) => {
  const { getUserByEmail } = useGetUserByEmail();
  const { handleGoogle: handleGoogleHelper } = useMultiStepHelper();

  const { dispatchNotifyModal, closeNotifyModal } = useNotifyModalContext();

  const { control, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const userInformation = await getUserByEmail(data.email);

    // does not have an acc
    if (userInformation === undefined) {
      // Todo: this email does not exist in our database
      return;
    }

    // email is his
    if (data.email !== auth.currentUser.email) {
      console.log(data.email);
      console.log(auth.currentUser.email);
      // todo: toast, this is not your email address 
      return
    }

    console.log("going further")
    sendPasswordResetEmail(auth, data.email)
      .then(() => {
        const desktopPhotoUrl =
          "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2FthreeCars.webp?alt=media&token=51d51fb2-414d-44a4-a549-40a36666b7cb";
        const mobilePhotoUrl =
          "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2Fmoped.webp?alt=media&token=c3fbae96-06a8-4121-9067-25ca1dcea4af";

        dispatchNotifyModal({
          type: "SET_NOTIFY_MODAL",
          payload: {
            isOpen: true,
            preMade: "standard",
            extraInfo: {
              title: "Email was send",
              bulletPoints: [
                `We send an email to "${data.email}"`,
                "Check your invoices and spam folder for an email from Megg's Rental",
                `Click the blue highlighted link.`,
                `Did not got an email, click "Send Again".`,
              ],
              primaryButton: {
                title: "Send Again",
                function: () => {
                  sendPasswordResetEmail(auth, data.email).catch(
                    (error) => console.log(error)
                  );
                  // Todo: toast, email was send
                },
              },
              secondaryButton: {
                title: "Close",
                function: closeNotifyModal,
              },
            },
            photoUrl: {
              desktop: desktopPhotoUrl,
              mobile: mobilePhotoUrl,
            },
          },
        });
      })
      .catch((error) => {
        // Todo: toast error
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const handleGoogle = () => {
    handleGoogleHelper();
  };

  // outsource
  const navigate = useNavigate();
  const handleSignInClick = () => navigate("/sign-in");



  console.log(auth.currentUser)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[340px] flex-col gap-y-8"
    >
      <Controller
        name="email"
        control={control}
        rules={{
          required: "Email is required",
          pattern: {
            value: regexEmail,
            message: "Invalid email address",
          },
        }}
        // Todo: defaultValue={users email}
        render={({ field, fieldState }) => (
          <TextInput
            firstIcon="fa-solid fa-at"
            onChange={field.onChange}
            label="Email"
            placeholder="maxMustermann@web.de"
            value={field.value}
            onBlur={field.onBlur}
            error={fieldState.error}
          />
        )}
      />
      <BottomPart
        firstBtn="primary"
        firstBtnTitle="Send Email"
        firstBtnType="submit"
        firstBtnOnClick={handleSubmit}
        secondBtn="secondary"
        secondBtnTitle="Sign In with Google"
        secondBtnType="button"
        secondBtnOnClick={handleGoogle}
        underBtnFirstText="Already have an Account?"
        underBtnFirstLinkText="Sign In instead"
        underBtnFirstOnClick={handleSignInClick}
      />
    </form>
  );
};

export default ForgotPasswordEmail;
