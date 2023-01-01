import { createContext, useCallback, useContext, useReducer } from "react";
import userDetailsModalReducer from "./userDetailsModalReducer";

const UserDetailsModalContext = createContext({
  isOpen: null,
  uid: null,
  modalData: {
    userOffers: [],
    reviews: [],
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
  const openUserDetailsModal = useCallback((uid = "") => {
    dispatchUserDetailsModal({
      type: "SET_USER_DETAILS_MODAL",
      payload: {
        isOpen: true,
        uid,
      },
    });
  }, []);

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
