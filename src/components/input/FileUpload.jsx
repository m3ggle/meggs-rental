import React, { useEffect, useState } from "react";
import { compressImages } from "../../helpers/compressImages";
import { handlePreviewUrl } from "../../helpers/handlePreviewUrl";
import Loading from "../Loading";
import FileUploadImagePreview from "./FileUploadImagePreview";

const FileUpload = ({ filesCallback }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState([]);
  const [imagePreviewURLs, setImagePreviewURLs] = useState([]);

  const handleImageChange = async (e) => {
    setIsLoading(true);
    let files = Array.from(e.target.files);

    const availableSpace = 6 - image.length;

    if (files.length > availableSpace) {
      files = files.slice(0, availableSpace);
    }

    files = await compressImages({
      images: files,
      maxSize: 1,
      height: 1400,
      width: 1400,
    });
    console.log(files)
    setImage((prevState) => [...prevState, ...files]);
    const urls = await handlePreviewUrl(files);
    setImagePreviewURLs((prevState) => [...prevState, ...urls]);
    setIsLoading(false);
  };

  const handleDelete = (url, index) => {
    let arr = image;
    arr = removeElement(arr, index);
    const arrUrl = imagePreviewURLs.filter((img) => img !== url);

    setImage(arr);
    setImagePreviewURLs(arrUrl);
  };

  function removeElement(array, index) {
    const newArray = [...array.slice(0, index), ...array.slice(index + 1)];
    return newArray;
  }

  useEffect(() => {
    console.log("inside state", image)
    filesCallback(image);
  }, [image]);

  return (
    <div className="flex w-full max-w-[340px] flex-col gap-y-2">
      <label
        htmlFor="fileUpload"
        className={`text-sm text-lmGrey500 dark:text-dmGrey25`}
      >
        Upload up to 6 images
      </label>

      <div
        className={`relative flex h-[180px] w-full cursor-pointer flex-col items-center justify-center gap-y-2 rounded-lg border border-dashed border-lmGrey100 bg-transparent p-6 shadow-sm duration-500 hover:opacity-60`}
      >
        {isLoading ? (
          <Loading width={75} />
        ) : (
          <>
            <i className="fa-solid fa-cloud-arrow-up text-[32px] text-lmGrey300 dark:text-dmGrey300" />

            <span className="text-center text-sm text-lmGrey300 dark:text-dmGrey300">
              Click to choose a file
            </span>
            <input
              onChange={handleImageChange}
              type="file"
              name="fileUpload"
              multiple={true}
              accept=".jpg, .jpeg, .png"
              className="absolute h-full cursor-pointer opacity-0"
            />
          </>
        )}
      </div>

      <FileUploadImagePreview
        imagePreviewURLs={imagePreviewURLs}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default FileUpload;
