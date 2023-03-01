import React from "react";
import Btn from "../../../components/common/Btn";
import LazyImage from "../../../components/LazyImage";
import dataCollection from "../../../data/dataCollection";
import { copyUrlToClipboard } from "../../../helpers/copyUrlToClipboard";
import { useWindowSize } from "../../../hooks/useWindowSize";

const HomepageSafari = () => {
  const { browserLogos } = dataCollection();

  const windowWidth = useWindowSize().width;

  const handleClick = () => {
    const url = "https://meggsrental.netlify.app/homepage"; // replace with the URL you want to copy
    copyUrlToClipboard({ url });
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-y-3 dark:bg-dmGrey900 800:gap-y-6">
      <span className="text-center text-base text-lmGrey800 dark:bg-dmGrey100 800:text-2xl">
        For the best experience, we recommend using a different browser.
      </span>
      <div className="flex gap-x-3 800:gap-x-10">
        {Object.values(browserLogos).map((logoUrl) => (
          <LazyImage
            src={logoUrl}
            alt="browser logo"
            width={windowWidth > 800 ? "60px" : "30px"}
            height={windowWidth > 800 ? "60px" : "30px"}
            className="h-[30px] w-[30px] overflow-visible object-cover object-center 800:h-[60px] 800:w-[60px]"
          />
        ))}
      </div>
      <div className="h-fit w-fit">
        <Btn
          type="button"
          uiType="primary"
          title="Copy Url"
          icon="fa-solid fa-copy"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default HomepageSafari;
