import React, { useState } from "react";
import FileUploadImagePreview from "./FileUploadImagePreview";

const FileUpload = () => {
  const [image, setImage] = useState(null);
  const [imagePreviewURLs, setImagePreviewURLs] = useState([]);

  const handleImageChange = (e) => {
    let files = Array.from(e.target.files);

    if (files.length > 6) {
      files = files.slice(0, 6);
    }

    const allPromises = files.map(async (file) => {
      const objectUrl = URL.createObjectURL(file);
      setImagePreviewURLs((prevState) => [...prevState, objectUrl]);
    });
    setImage(files);
    Promise.all(allPromises);
  };

  const handleDelete = (url) => {
    console.log("bam")
    const arr = image.filter((img) => img !== url);
    const arrUrl = imagePreviewURLs.filter((img) => img !== url);

    setImage(arr);
    setImagePreviewURLs(arrUrl);
  };

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
          onChange={handleImageChange}
          type="file"
          name="fileUpload"
          multiple={true}
          className="absolute h-full cursor-pointer opacity-0"
        />
      </div>

      <FileUploadImagePreview
        imagePreviewURLs={imagePreviewURLs}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default FileUpload;
