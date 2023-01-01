import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { useCallback } from "react";
import { getOffersFirestore } from "../../api/firebase/getOffersFirestore";
import { getReviewsFirestore } from "../../api/firebase/getReviewsFirestore";
import { getUserFirestore } from "../../api/firebase/getUserFirestore";
import Btn from "../../components/common/Btn";
import { useUserDetailsModalContext } from "../../context/userDetailsModal/userDetailsModalContext";
import { db } from "../../firebase.config";
import { useGetUserDetailsModal } from "../../modals/userDetailsModal/hooks/useGetUserDetailsModal";

const PrivacyPolicy = () => {
  const { openUserDetailsModal, uid } = useUserDetailsModalContext();
  const {handleGetUserDetails} = useGetUserDetailsModal()

  const handleClick = async () => {
    openUserDetailsModal("5BT8oUalNVXnyo1mbBjhZLaxceW2");
  };

  useEffect(() => {
    if (uid !== null) {
      handleGetUserDetails("5BT8oUalNVXnyo1mbBjhZLaxceW2");
    }
  }, [uid, handleGetUserDetails]);

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
