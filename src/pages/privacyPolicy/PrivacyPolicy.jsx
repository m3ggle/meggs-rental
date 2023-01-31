import React from "react";
import Btn from "../../components/common/Btn";
import { useAuthSetOffline } from "../../hooks/auth/useAuthSetOffline";

const PrivacyPolicy = () => {
  const { setToOffline } = useAuthSetOffline();
  const handleClick = async () => {
    setToOffline.mutate()
  };

  return (
    <div className="gap-y2 flex h-screen w-full flex-col items-center justify-center">
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
