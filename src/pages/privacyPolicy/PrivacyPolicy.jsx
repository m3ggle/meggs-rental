import React from "react";
import Btn from "../../components/common/Btn";

const PrivacyPolicy = () => {
  const handleClick = async () => {
    const link = "/users-offers?id";
    const page = link.split("?")[0];
    console.log(page);
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
    </div>
  );
};

export default PrivacyPolicy;
