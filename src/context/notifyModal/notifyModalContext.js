import { createContext, useCallback, useContext, useReducer } from "react";
import { useUserContext } from "../user/userContext";
import notifyModalReducer from "./notifyModalReducer";
import { notifyModalTemplate } from "./notifyModalTemplate";

const NotifyModalContext = createContext({
  ...notifyModalTemplate,

  closeNotifyModal: () => {},
  openNotifyModal: () => {},
  dispatchNotifyModal: () => {},
  openAuthNotifyModal: () => {},
});
NotifyModalContext.displayName = "NotifyModalContext";

export function useNotifyModalContext() {
  return useContext(NotifyModalContext);
}

export const NotifyModalProvider = ({ children }) => {
  const { userId } = useUserContext();

  const initialState = {
    isOpen: false,
    preMade: null,
    customized: null,
    extraInfo: null,
    photoURL: null,
  };

  const [state, dispatchNotifyModal] = useReducer(
    notifyModalReducer,
    initialState
  );

  // functions start
  const openNotifyModal = ({ preMade, extraInfo, customized, photoURL }) => {
    dispatchNotifyModal({
      type: "SET_NOTIFY_MODAL",
      payload: {
        isOpen: true,
        preMade: preMade ?? null,
        customized: customized ?? null,
        extraInfo: extraInfo ?? null,
        photoURL: photoURL ?? null,
      },
    });
  };

  const closeNotifyModal = useCallback(() => {
    dispatchNotifyModal({
      type: "SET_NOTIFY_MODAL",
      payload: {
        isOpen: false,
        preMade: null,
        customized: null,
        extraInfo: null,
        photoURL: null,
      },
    });
  }, []);

  const openAuthNotifyModal = useCallback(() => {
    if (!userId) {
      dispatchNotifyModal({
        type: "SET_NOTIFY_MODAL",
        payload: {
          isOpen: true,
          preMade: "navigate",
          customized: null,
          extraInfo: {
            title: "Sign in to enjoy the benefits",
            bulletPoints: [
              "Have full access to all pages.",
              "Earn money by uploading and lending your car.",
              "Chat with individuals to engage them.",
              "Like, share, and save offers that interest you.",
              "Don't have a account? Create one.",
            ],
            primaryButton: {
              title: "Create a new Account",
              function: "sign-up",
            },
            secondaryButton: {
              title: "Sign In",
              function: "sign-in",
            },
          },
          photoURL: {
            desktop:
              "https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/public/website/picture-placeholders/newCar.webp",
            mobile:
              "https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/public/website/picture-placeholders/dog.webp",
          },
        },
      });
    }
  }, [userId]);
  // functions end

  return (
    <NotifyModalContext.Provider
      value={{
        ...state,
        dispatchNotifyModal,
        closeNotifyModal,
        openNotifyModal,
        openAuthNotifyModal,
      }}
    >
      {children}
    </NotifyModalContext.Provider>
  );
};
