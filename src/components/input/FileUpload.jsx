import React from 'react'

const FileUpload = () => {
  // ! follow this guide for the logic and preview
  // https://blog.logrocket.com/using-filereader-api-preview-images-react/
  return (
    <div className="flex w-full max-w-[340px] flex-col gap-y-2">
      <label
        htmlFor="fileUpload"
        className={`text-sm text-lmGrey500 dark:text-dmGrey25`}
      >
        Upload up to 6 images
      </label>

      <div className="relative flex h-[180px] w-full cursor-pointer flex-col items-center justify-center gap-y-2 rounded-lg border border-dashed border-lmGrey100 bg-transparent p-6 shadow-sm duration-500 hover:opacity-60">
        <i className="fa-solid fa-cloud-arrow-up text-[32px] text-lmGrey300 dark:text-dmGrey300"></i>
        <span className="text-center text-sm text-lmGrey300 dark:text-dmGrey300">
          Click to choose a file
        </span>
        <input
          type="file"
          name="fileUpload"
          multiple
          className="absolute opacity-0 h-full cursor-pointer"
        />
      </div>
    </div>
  );
}

export default FileUpload