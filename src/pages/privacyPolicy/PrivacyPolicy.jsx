import React from "react";
import Btn from "../../components/common/Btn";

const PrivacyPolicy = () => {
  const handleClick = async () => {
    console.log(window.location.href)
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-y-2 overflow-scroll p-3">
      <div className="h-fit w-fit">
        <Btn
          title="Click Me"
          type="button"
          uiType="primary"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
