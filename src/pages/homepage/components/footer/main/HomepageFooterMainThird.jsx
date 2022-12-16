import React from "react";
import { useNavigationContext } from "../../../../../context/navigation/navigationContext";
import { FooterContent } from "./helper/FooterContent";
import { textInTheFooter } from "./helper/TextInTheFooter";
import HomepageFooterMainList from "./HomepageFooterMainList";

const HomepageFooterMainThird = () => {
  const { contentFooterMainThird } = FooterContent();

  const { dispatchNavigation } = useNavigationContext();
  const handleOpenNavigation = () => {
    dispatchNavigation({ type: "OPEN_NAVIGATION" });
  };

  return (
    <div className="flex min-w-[320px] flex-col gap-y-8 p-2 text-lg text-lmGrey800 dark:text-dmGrey25 700:flex-row 1200:flex-col">
      <HomepageFooterMainList content={contentFooterMainThird} />

      <span
        onClick={handleOpenNavigation}
        className={() => textInTheFooter({ type: "text", linkTo: "own" })}
      >
        Open the Navigation
      </span>

      <div className="flex gap-11 text-[24px] text-lmGrey600">
        <a
          href={"https://github.com/Huhu436"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github cursor-pointer duration-300 hover:text-lmGrey800 active:text-lmPrimary dark:text-dmGrey25" />
        </a>
        <a
          href={"https://www.instagram.com/m1ggle/?hl=de"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-instagram cursor-pointer duration-300 hover:text-lmGrey800 active:text-lmPrimary dark:text-dmGrey25" />
        </a>
        <a
          href={"https://www.linkedin.com/in/meggle-bande-a71600248/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin cursor-pointer duration-300 hover:text-lmGrey800 active:text-lmPrimary dark:text-dmGrey25" />
        </a>
      </div>
    </div>
  );
};

export default HomepageFooterMainThird;
