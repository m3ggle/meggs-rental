import React from "react";
import Btn from "../../../../../components/common/Btn";

const HomepageFooterMainFirst = () => {
  const handleContact = () => {
    const recipient = "megglebande@web.de";
    const subject = "Regarding your services";
    const body = "";

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink);
  };

  return (
    <div className="flex w-full flex-col gap-y-6 1200:p-6">
      <h2 className="text-3xl font-semibold -tracking-[1.2%] text-lmGrey800 drop-shadow dark:text-dmGrey25 700:text-4xl 700:leading-[40px]">
        Thank you for visiting Megg's Rental
      </h2>
      <div className="flex h-fit w-full flex-col gap-y-4">
        <span className="dm:text-dmGrey100 text-base text-lmGrey600">
          Please note that this website is a personal project and not intended
          for commercial use. If you are interested in learning about the
          process of creating this platform, please visit my personal website
          using the link provided.
        </span>
        <div className="h-fit w-fit">
          <Btn
            onClick={handleContact}
            title="Get in Contact"
            icon="fa-solid fa-chevron-right"
            uiType="primary"
          />
        </div>
      </div>
    </div>
  );
};

export default HomepageFooterMainFirst;
