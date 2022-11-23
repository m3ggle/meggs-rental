import React from "react";
import BottomPart from "../../../components/authentication/BottomPart";
import Preview from "../../explore/map/components/preview/Preview";

const UploadPrev = ({ handleCallback }) => {
  const upload = () => {
    console.log("finish");
    const nextStep = "finish";
    handleCallback({ nextStep });
  };

  return (
    <div
      onSubmit={upload}
      className="flex w-full max-w-[340px] flex-col gap-y-8"
    >
      <div className="flex w-full flex-col gap-y-2">
        <span className="text-base font-semibold text-lmGrey600 dark:text-dmGrey100">
          Upload Preview
        </span>
        <Preview />
      </div>
      <BottomPart
        firstBtn="primary"
        firstBtnTitle="Upload"
        firstBtnType="submit"
        firstBtnOnClick={upload}
      />
    </div>
  );
};

export default UploadPrev;
