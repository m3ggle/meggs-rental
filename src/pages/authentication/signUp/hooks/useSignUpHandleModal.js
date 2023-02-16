import { useNavigate } from "react-router-dom";
import { useNotifyModalContext } from "../../../../context/notifyModal/notifyModalContext";

export const useSignUpHandleModal = () => {
  const navigate = useNavigate();
  const { dispatchNotifyModal, closeNotifyModal } = useNotifyModalContext();

  const desktopPhotoUrl =
    "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2FthreeCars.webp?alt=media&token=51d51fb2-414d-44a4-a549-40a36666b7cb";
  const mobilePhotoUrl =
    "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2Fmoped.webp?alt=media&token=c3fbae96-06a8-4121-9067-25ca1dcea4af";

  // megglebande@web.de
  // Tester123+
  // BisdassderTodunsscheidet211001

  // 2023-01-22 00:00:00.108234+00

  const handleModal = (email) => {
    dispatchNotifyModal({
      type: "SET_NOTIFY_MODAL",
      payload: {
        isOpen: true,
        preMade: "standard",
        extraInfo: {
          title: "Email send",
          bulletPoints: [
            `We send you an email to "${email}".`,
            "Check your invoices and spam folder.",
            `Found it? Click the blue highlighted text.`,
            `Nothing? Then the email is already in use, try to sign in.`,
          ],
          primaryButton: {
            title: "Close",
            function: closeNotifyModal,
          },
          secondaryButton: {
            title: "Sign In",
            function: () => {
              closeNotifyModal();
              navigate(`/sign-in?email=${email}`)
            },
          },
        },
        photoURL: {
          desktop: desktopPhotoUrl,
          mobile: mobilePhotoUrl,
        },
      },
    });
  };

  return { handleModal };
};
