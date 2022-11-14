import React from "react";

const LayoutCatalog = () => {
  return (
    <div className="flex h-screen w-full  max-w-[1440px] flex-col gap-6 bg-lime-100 1000:flex-row p-12 1000:px-14 1000:py-6">
      <div className="w-full 1000:min-w-[360px] bg-lime-300 h-[68px] 1000:h-full 1000:flex 1000:w-[360px] 1000:items-center 1000:justify-center">
        {/* <Filter /> */}
      </div>
      <div className="flex w-full flex-wrap gap-6 bg-lime-300 h-full"></div>
    </div>
  );
};

export default LayoutCatalog;
