import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      {/* footer main */}
      <div className="h-fit w-full bg-blue-100 px-14">
        <div className="h-fit w-full gap-6 rounded-[30px] bg-white p-6 shadow-lg">
          {/* first col */}
          <div className="flex w-full flex-col gap-y-6 p-6">
            <h2 className="text-5xl text-lmGrey800">
              Contact the Developer directly
            </h2>
            <div className="flex w-full items-center gap-x-3 border-b-[1px] border-lmGrey300 px-3 pt-6 pb-3">
              <i className="fa-solid fa-at" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
