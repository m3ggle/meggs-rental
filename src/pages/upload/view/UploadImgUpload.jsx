import React from "react";
import { useForm } from "react-hook-form";
import FileUpload from "../../../components/FileUpload";
import BottomPart from "../../signUp/view/BottomPart";

const UploadImgUpload = ({ handleCallback }) => {
  const { handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("basic info");
    const nextStep = true;
    handleCallback({ data, nextStep });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[340px] flex-col gap-y-8"
    >
      <div className="flex w-full flex-col gap-y-2">
        <span className="text-base font-semibold text-lmGrey600 dark:text-dmGrey100">
          Images
        </span>
        <FileUpload />
        <div className="flex w-full flex-col gap-y-1 text-xs text-lmGrey600 dark:text-dmGrey100">
          <span>
            *Make sure the order is correct. The first image is going to be the
            Thumbnail of your offer
          </span>
          <span>
            **We recommend:
            <br />
            first three images are images of the exterio the
            <br />
            last three images are images of the interio
          </span>
        </div>
      </div>
      <BottomPart
        firstBtn="primary"
        firstBtnTitle="Continue"
        firstBtnType="submit"
        firstBtnOnClick={handleSubmit}
      />
    </form>
  );
};

export default UploadImgUpload;
