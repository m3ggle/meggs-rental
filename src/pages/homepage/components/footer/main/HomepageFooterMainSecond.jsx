import React from "react";
import { FooterContent } from "./helper/FooterContent";
import HomepageFooterMainList from "./HomepageFooterMainList";

const HomepageFooterMainSecond = () => {
const { contentFooterMainSecond } = FooterContent();

  return (
    <div className="flex min-w-[320px] flex-col gap-y-8 p-2 text-lg text-lmGrey800 dark:text-dmGrey25 700:flex-row 1200:flex-col">
      <HomepageFooterMainList content={contentFooterMainSecond} />
    </div>
  );
};

export default HomepageFooterMainSecond;
