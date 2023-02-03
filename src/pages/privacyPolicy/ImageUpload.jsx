// Image Upload Component
import React, { useState } from "react";

const ImageUpload = () => {
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
    const arr = image.filter((img) => img !== url);
    const arrUrl = imagePreviewURLs.filter((img) => img !== url);

    setImage(arr);
    setImagePreviewURLs(arrUrl);
    // array.splice(index, 1);
  };

  return (
    <div className="flex h-fit w-full flex-col gap-y-2">
      <input type="file" onChange={handleImageChange} multiple />
      <div className="flex h-[400px] min-h-[400px] w-full min-w-full flex-wrap items-center gap-6 rounded-2xl bg-dmGrey800 px-2">
        {imagePreviewURLs.map((url, index) => (
          <div
            key={index}
            className="relative flex h-[300px] w-[300px] items-center justify-center overflow-visible"
          >
            <button
              onClick={() => handleDelete(url)}
              className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-lmGrey100 dark:bg-dmGrey700"
            >
              <i className="fa-solid fa-times h-4 w-4 text-lmGrey600 dark:text-dmGrey300"></i>
            </button>
            <img
              src={url}
              alt="testDrive"
              className="h-[300px] w-[300px] overflow-hidden rounded-lg bg-dmGrey900 object-cover object-center"
            />
          </div>
          //   <ImagePreview key={i} image={url} />
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;
