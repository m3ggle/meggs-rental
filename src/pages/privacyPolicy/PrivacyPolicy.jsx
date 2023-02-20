import React from "react";
import Btn from "../../components/common/Btn";
import { useRecentChatsContext } from "../../context/recentChats/recentChatsContext";

const PrivacyPolicy = () => {
  const { ...takeAll } = useRecentChatsContext();
  console.log(takeAll);

  const handleClick = () => {};

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-y-2 overflow-scroll">
      <div className="h-fit w-fit">
        <Btn
          title="Connect"
          type="button"
          uiType="primary"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
