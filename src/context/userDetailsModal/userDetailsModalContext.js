import { createContext, useCallback, useContext, useReducer } from "react";
import { toastNotify } from "../../components/toastNotify/toastNotify";
import userDetailsModalReducer from "./userDetailsModalReducer";

const UserDetailsModalContext = createContext({
  isOpen: null,
  userId: null,

  dispatchUserDetailsModal: () => {},
  openUserDetailsModal: () => {},
  closeUserDetailsModal: () => {},
});
UserDetailsModalContext.displayName = "UserDetailsModalContext";

export function useUserDetailsModalContext() {
  return useContext(UserDetailsModalContext);
}

export const UserDetailsModalProvider = ({ children }) => {
  const initialState = {
    isOpen: false,
    userId: null,
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
        userId: null,
      },
    });
  }, []);

  const openUserDetailsModal = useCallback((userId = "") => {
    dispatchUserDetailsModal({
      type: "SET_USER_DETAILS_MODAL",
      payload: {
        isOpen: true,
        userId,
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
      }}
    >
      {children}
    </UserDetailsModalContext.Provider>
  );
};
