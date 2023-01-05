import React from "react";
import Btn from "../../components/common/Btn";
import { toastNotify } from "../../components/toastNotify/toastNotify";

const PrivacyPolicy = () => {
  const { notifyMessage, notifyStandard } = toastNotify();

  const exampleMsg = {
    from: "Meggle Bande",
    content: "Hey, how about a new deal on Saturday till Monday",
    navigateTo: "/chat",
  };

  const exampleStandard = {
    type: "info",
    content: "Offer was uploaded"
  }

  const handleClick = async () => {
    notifyStandard({ information: exampleStandard, id: "standard" });
  };

  const handleClick2 = () => {
    notifyMessage({
      information: exampleMsg,
      id: "sec",
    });
  };

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center gap-y-2">
      <div className="h-fit w-fit">
        <Btn
          title="click to open"
          uiType="primary"
          type="button"
          onClick={handleClick}
        />
      </div>
      <div className="h-fit w-fit">
        <Btn
          title="click to open"
          uiType="secondary"
          type="button"
          onClick={handleClick2}
        />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
