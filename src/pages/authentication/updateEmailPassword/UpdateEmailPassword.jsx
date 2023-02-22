import React from "react";
import { useLocation } from "react-router-dom";
import SignWrapper from "../../../components/wrapper/SignWrapper";
import UpdateEmail from "./updateEmail/UpdateEmail";
import UpdatePassword from "./updatePassword/UpdatePassword";

const UpdateEmailPassword = () => {
  const locationPath = useLocation().pathname;

  const updateEmailBg =
    "https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/public/website/picture-placeholders/orangeBlue.webp";
  const updatePasswordBg =
    "https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/public/website/picture-placeholders/lonUSStreet.webp";

  return (
    <SignWrapper
      pic={locationPath === "/update-email" ? updateEmailBg : updatePasswordBg}
    >
      <div className="flex w-full max-w-[348px] flex-col gap-y-[48px]">
        {/* title part */}
        <div className="flex flex-col items-center justify-center gap-y-1 p-2">
          <span className="text-2xl text-lmGrey800 dark:text-dmGrey25">
            Update your{" "}
            {locationPath === "/update-email" ? "Email" : "Password"}
          </span>
          <span className="text-base text-lmGrey600 dark:text-dmGrey300">
            Suspendisse et nunc fringilla in tempus.
          </span>
        </div>
        {locationPath === "/update-email" ? (
          <UpdateEmail />
        ) : (
          <UpdatePassword />
        )}
      </div>
    </SignWrapper>
  );
};

export default UpdateEmailPassword;
