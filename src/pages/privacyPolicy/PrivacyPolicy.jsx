import React from "react";
import Btn from "../../components/common/Btn";
import { useNotifyModalContext } from "../../context/notifyModal/notifyModalContext";

const PrivacyPolicy = () => {
  const { openAuthNotifyModal } = useNotifyModalContext();

  const handleClick = () => {
    openAuthNotifyModal();
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-y-2">
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
