import { createContext, useCallback, useContext, useReducer } from "react";
import { getOffersFirestore } from "../../api/firebase/getOffersFirestore";
import { getReviewsFirestore } from "../../api/firebase/getReviewsFirestore";
import { getUserFirestore } from "../../api/firebase/getUserFirestore";
import { toastNotify } from "../../components/toastNotify/toastNotify";
import userDetailsModalReducer from "./userDetailsModalReducer";

const UserDetailsModalContext = createContext({
  isOpen: null,
  uid: null,
  modalData: {
    userOffers: [],
    reviewSection: {
      reviews: [],
      ratingStats: {
        amount: null,
        ratings: {
          one: 0,
          two: 0,
          three: 0,
          four: 0,
          five: 0,
        },
      },
    },
    userData: {},
  },
  error: {
    type: null,
    message: null,
  },

  dispatchUserDetailsModal: () => {},
  openUserDetailsModal: () => {},
  closeUserDetailsModal: () => {},
  setError: () => {},
});
UserDetailsModalContext.displayName = "UserDetailsModalContext";

export function useUserDetailsModalContext() {
  return useContext(UserDetailsModalContext);
}

export const UserDetailsModalProvider = ({ children }) => {
  const { notifyStandard } = toastNotify();

  const initialState = {
    isOpen: false,
    uid: null,
    modalData: null,
    error: null,
  };

  const [state, dispatchUserDetailsModal] = useReducer(
    userDetailsModalReducer,
    initialState
  );

  // function
  const closeUserDetailsModal = useCallback(() => {
    dispatchUserDetailsModal({
      type: "SET_USER_DETAILS_MODAL",
      payload: {
        isOpen: false,
        uid: null,
        modalData: null,
        error: null,
      },
    });
  }, []);

  const setError = useCallback((error) => {
    dispatchUserDetailsModal({
      type: "SET_USER_DETAILS_MODAL",
      payload: {
        error,
      },
    });
  }, []);


  // const {data: userDataRQ, isLoading, error, isError, refetch: handleGetUserDetails} = 
  //   useQuery(
  //     ["userDetailsModal", uid], 
  //     () => getUserDetails(userId),
  //     {
  //       enabled: false,
  //       refetchOnMount: false,
  //       refetchOnWindowFocus: false,
  //     }
  //   )

  // getUserDetails
  const handleGetUserDetails = useCallback(
    async (userId) => {
      const userData = await getUserFirestore(userId);

      if (!userData) {
        closeUserDetailsModal();
        console.log("could not find user");
        notifyStandard({
          information: {
            type: "warning",
            content: "Could not find the user",
          },
          id: "userUploadError",
        });
        return;
      }

      let [ownOffers, reviewSection] = await Promise.all([
        getOffersFirestore(userData.ownOffers.slice(0, 3)),
        getReviewsFirestore({
          reviewSections: userData.reviewSections,
          limit: 5,
        }),
      ]);

      if (userData) {
        const modalData = {
          userOffers: ownOffers,
          reviewSection,
          userData,
        };

        // setting context
        dispatchUserDetailsModal({
          type: "SET_USER_DATA",
          payload: modalData,
        });

        return { modalData };
      }

      setError({
        type: "user",
        message: "This user does not exist.",
      });
    },
    [dispatchUserDetailsModal, setError]
  );

  const openUserDetailsModal = useCallback(
    async (uid = "") => {
      dispatchUserDetailsModal({
        type: "SET_USER_DETAILS_MODAL",
        payload: {
          isOpen: true,
          uid,
        },
      });
      handleGetUserDetails(uid);
    },
    [handleGetUserDetails]
  );

  return (
    <UserDetailsModalContext.Provider
      value={{
        ...state,
        dispatchUserDetailsModal,
        openUserDetailsModal,
        closeUserDetailsModal,
        setError,
      }}
    >
      {children}
    </UserDetailsModalContext.Provider>
  );
};
