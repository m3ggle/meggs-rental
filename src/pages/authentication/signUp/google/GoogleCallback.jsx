import React from 'react'
import ProgressBar from '../../../../components/ProgressBar';
import SignWrapper from '../../../../components/wrapper/SignWrapper';
import SignUpGoogle from './SignUpGoogle';

const GoogleCallback = () => {
  const signUpBgGoogleCallback =
    "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2FsharedRide.webp?alt=media&token=8bec7ac0-cca8-4f04-8ac1-99f39ef37bb6";

  return (
    <SignWrapper pic={signUpBgGoogleCallback}>
      <div className="flex w-full max-w-[348px] flex-col gap-y-[48px]">
        {/* title part */}
        <div className="flex flex-col items-center justify-center gap-y-2 p-2">
          <span className="text-2xl text-lmGrey800 dark:text-dmGrey25">
            Complete Sign Up
          </span>
          {/* <span className="text-base text-lmGrey600 dark:text-dmGrey300">
            Critical step to create an account.
          </span> */}
          <ProgressBar amount={1} finished={1} />
        </div>
        <SignUpGoogle />
      </div>
    </SignWrapper>
  );
};


export default GoogleCallback