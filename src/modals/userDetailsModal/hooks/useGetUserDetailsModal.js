import { useCallback } from "react";
import { getOffersFirestore } from "../../../api/firebase/getOffersFirestore";
import { getReviewsFirestore } from "../../../api/firebase/getReviewsFirestore";
import { getUserFirestore } from "../../../api/firebase/getUserFirestore";
import { useUserDetailsModalContext } from "../../../context/userDetailsModal/userDetailsModalContext";

export const useGetUserDetailsModal = () => {
  const { dispatchUserDetailsModal, setError } = useUserDetailsModalContext();

  const handleGetUserDetails = useCallback(
    async (userId) => {
      const userData = await getUserFirestore(userId);

      const [ownOffers, reviewSection] = await Promise.all([
        getOffersFirestore(userData.ownOffers.slice(0, 3)),
        getReviewsFirestore({reviewSections: userData.reviewSections, limit: 5}),
      ]);
      console.log("in logic, reviewSectionId" + reviewSection);

      if (userData) {
        // setting context
        dispatchUserDetailsModal({
          type: "SET_USER_DATA",
          payload: {
            userOffers: ownOffers,
            reviewSection,
            userData,
          },
        });

        return;
      }

      setError({
        type: "user",
        message: "This user does not exist.",
      });
    },
    [dispatchUserDetailsModal, setError]
  );

  return { handleGetUserDetails };
};
