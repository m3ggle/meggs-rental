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

      const [ownOffers, reviews] = await Promise.all([
        getOffersFirestore(userData.ownOffers.slice(0, 3)),
        getReviewsFirestore(userData.reviewSections, 5),
      ]);

      if (userData) {
        // setting context
        dispatchUserDetailsModal({
          type: "SET_USER_DATA",
          payload: {
            userOffers: ownOffers,
            reviews,
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
