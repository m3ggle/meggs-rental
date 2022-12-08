import React from "react";
import Btn from "../../../components/common/Btn";

const HomepageHero = () => {
  const handleGetStarted = () => {};

  return (
    <div className="flex h-screen w-full items-center bg-white px-14">
      {/* text */}
      <div className="flex w-[712px] flex-col gap-y-9">
        <h1 className="text-[80px] font-bold leading-[80px] text-lmGrey900">
          Drive what you want, where and when you want!
        </h1>
        <h3 className="text-4xl text-lmGrey800">
          Nisi facilisis mauris lacus sit arcu enim. Commodo faucibus tincidunt
          morbi risus imperdiet tincidunt.
        </h3>

        <div className="w-fit">
          <Btn
            type="button"
            uiType="primary"
            title="Get Started"
            icon="fa-solid fa-chevron-right"
            onClick={handleGetStarted}
          />
        </div>
      </div>
      {/* img */}
    </div>
  );
};

export default HomepageHero;
