import { createContext, useContext, useReducer } from "react";
import notifyModalReducer from "./notifyModalReducer";

const NotifyModalContext = createContext({
  isOpen: null,
  preMade: null,
  customized: null,
  photoUrl: null,

  closeNotifyModal: () => {},
  openNotifyModal: () => {},
  dispatchNotifyModal: () => {},
});
NotifyModalContext.displayName = "NotifyModalContext";

export function useNotifyModalContext() {
  return useContext(NotifyModalContext);
}

export const NotifyModalProvider = ({ children }) => {
  const initialState = {
    isOpen: false,
    preMade: null,
    customized: null,
    photoUrl: null,
  };

    const closeNotifyModal = () => {
      console.log("kkk")
    dispatchNotifyModal({
      type: "SET_NOTIFY_MODAL",
      payload: {
        isOpen: false,
        preMade: null,
        customized: null,
        photoUrl: null,
      },
    });
  };

  const openNotifyModal = ({ preMade, customized, photoUrl }) => {
    dispatchNotifyModal({
      type: "SET_NOTIFY_MODAL",
      payload: {
        isOpen: true,
        preMade: preMade ?? null,
        customized: customized ?? null,
        photoUrl: photoUrl ?? null,
      },
    });
  };

  const [state, dispatchNotifyModal] = useReducer(
    notifyModalReducer,
    initialState
  );

  return (
    <NotifyModalContext.Provider
      value={{
        ...state,
        dispatchNotifyModal,
        closeNotifyModal,
        openNotifyModal,
      }}
    >
      {children}
    </NotifyModalContext.Provider>
  );
};
