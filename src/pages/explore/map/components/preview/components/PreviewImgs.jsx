import React from "react";

const PreviewImgs = ({ offerImages }) => {
  const pictures = offerImages.picture_urls 

  return (
    <div className="flex min-h-[220px] w-full gap-x-2 overflow-y-hidden overflow-x-scroll rounded-lg">
      {pictures.map((pic, index) => (
        <div
          key={index}
          className="h-[220px] w-40 min-w-[160px] rounded-lg bg-slate-100 bg-cover bg-center shadow"
          style={{ backgroundImage: `url(${pic})` }}
        ></div>
      ))}
    </div>
  );
};

export default PreviewImgs;
