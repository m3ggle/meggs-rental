import React from "react";
import ProgressBar from "../../../components/ProgressBar";

const UploadHeader = ({handleCallback, maxRounds, currentRound }) => {
  const handleGoBackClick = () => {
    const nextStep = "back"
    handleCallback({nextStep})
  }

  const handleCloseClick = () => {
    const nextStep = "close"
    handleCallback({nextStep})
  }
  
  return (
    <div className="flex flex-col items-center justify-center gap-y-2 p-2">
      <div className="flex w-full items-center justify-between text-lmGrey300 dark:text-dmGrey300">
        <i
          onClick={handleGoBackClick}
          className="fa-solid fa-chevron-left flex h-11 w-11 cursor-pointer items-center justify-start text-[22px] hover:text-dmGrey600 dark:hover:text-dmGrey100"
        />
        <i
          onClick={handleCloseClick}
          className="fa-solid fa-times flex h-11 w-11 cursor-pointer items-center justify-end text-[24px] hover:text-dmGrey600 dark:hover:text-dmGrey100"
        />
      </div>
      <ProgressBar amount={maxRounds} finished={currentRound} />
    </div>
  );
};

export default UploadHeader;
