import { format } from "date-fns";
import React, { useEffect } from "react";
import Btn from "../../components/common/Btn";
import { useUserDetailsModalContext } from "../../context/userDetailsModal/userDetailsModalContext";
import { useGetUserDetailsModal } from "../../modals/userDetailsModal/hooks/useGetUserDetailsModal";

const PrivacyPolicy = () => {
  const { openUserDetailsModal } = useUserDetailsModalContext();

  const handleClick = async () => {
    openUserDetailsModal("5BT8oUalNVXnyo1mbBjhZLaxceW2");
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
