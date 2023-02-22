import React, { useState } from "react";
import { useForm } from "react-hook-form";
import BottomPart from "../../../components/authentication/BottomPart";
import FileUpload from "../../../components/input/FileUpload";
import useUploadCallback from "../hooks/useUploadCallback";

const UploadOfferPictures = () => {
  const { handleSubmit } = useForm();
  const { handleSubmit: formSubmit } = useUploadCallback();

  const [files, setFiles] = useState([]);

  const onSubmit = async () => {
    formSubmit(files);
  };

  const filesCallback = (images) => {
    setFiles(images);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[340px] flex-col gap-y-8"
    >
      <div className="flex w-full flex-col gap-y-2">
        <span className="text-base font-semibold text-lmGrey600 dark:text-dmGrey100">
          Offer Images
        </span>
        <FileUpload filesCallback={filesCallback} />
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
        firstBtnTitle="Upload"
        firstBtnType="submit"
        firstBtnOnClick={handleSubmit}
      />
    </form>
  );
};

export default UploadOfferPictures;
