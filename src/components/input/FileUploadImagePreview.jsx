import React from "react";

const FileUploadImagePreview = ({ handleDelete, imagePreviewURLs }) => {
  return (
    <div className="flex h-fit w-[340px] flex-row flex-wrap items-center gap-2 rounded-2xl">
      {imagePreviewURLs.map((url, index) => (
        <div
          key={index}
          className="relative flex h-[236px] w-[160px] items-center justify-center overflow-visible"
        >
          <button
            type="button"
            onClick={() => handleDelete(url)}
            className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-lmGrey100 dark:bg-dmGrey700"
          >
            <i className="fa-solid fa-times h-4 w-4 text-lmGrey600 dark:text-dmGrey300"></i>
          </button>
          <img
            src={url}
            alt="testDrive"
            className="h-[236px] w-[160px] overflow-hidden rounded-lg bg-dmGrey900 object-cover object-center"
          />
        </div>
      ))}
    </div>
  );
};

export default FileUploadImagePreview;
