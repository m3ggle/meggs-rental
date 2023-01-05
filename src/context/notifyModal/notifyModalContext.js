import { sendEmailVerification } from "firebase/auth";
import { createContext, useCallback, useContext, useReducer } from "react";
import { toastNotify } from "../../components/toastNotify/toastNotify";
import { auth } from "../../firebase.config";
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
  // const { openNotifyModal, openAuthNotifyModal, closeNotifyModal } =
  //   useNotifyModalHooks();
  const { signedIn, verified } = useUserContext();
  const { notifyStandard } = toastNotify();

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
    if (!signedIn) {
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
              "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2FnewCar.webp?alt=media&token=299dade6-a4d2-40cc-a099-cfb97431bec1",
            mobile:
              "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2Fdog.webp?alt=media&token=20d593bb-c0fa-419a-a5fc-139d337157ae",
          },
        },
      });
    }

    console.log(verified);
    if (!verified && auth.currentUser !== null) {
      console.log("inside verify: ", !verified);
      dispatchNotifyModal({
        type: "SET_NOTIFY_MODAL",
        payload: {
          isOpen: true,
          preMade: "standard",
          customized: null,
          extraInfo: {
            title: "Verify your Email address",
            bulletPoints: [
              `We send you an email to "${auth.currentUser.email}".`,
              "Check your invoices and spam folder.",
              `Found it? Click the blue highlighted text.`,
              `If not, then click the "Send Again" button.`,
            ],
            primaryButton: {
              title: "Send Again",
              function: async () => {
                try {
                  await sendEmailVerification(auth.currentUser);
                  notifyStandard({
                    information: {
                      type: "info",
                      content: "We send an Verification Email",
                    },
                    id: "emailVerificationSuccess",
                  });
                } catch (error) {
                  notifyStandard({
                    information: {
                      type: "error",
                      content: error.message.split(":")[1],
                    },
                    id: "emailVerificationError",
                  });
                  console.log(error.code);
                  console.log(error.message);
                }
              },
            },
            secondaryButton: {
              title: "Close",
              function: closeNotifyModal,
            },
          },
          photoURL: {
            desktop:
              "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2FnewCar.webp?alt=media&token=299dade6-a4d2-40cc-a099-cfb97431bec1",
            mobile:
              "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2Fdog.webp?alt=media&token=20d593bb-c0fa-419a-a5fc-139d337157ae",
          },
        },
      });
    }
  }, [signedIn, verified, closeNotifyModal]);
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
