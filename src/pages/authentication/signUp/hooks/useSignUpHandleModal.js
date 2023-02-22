import { useNavigate } from "react-router-dom";
import { useNotifyModalContext } from "../../../../context/notifyModal/notifyModalContext";

export const useSignUpHandleModal = () => {
  const navigate = useNavigate();
  const { dispatchNotifyModal, closeNotifyModal } = useNotifyModalContext();

  const desktopPhotoUrl =
    "https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/public/website/picture-placeholders/threeCars.webp";
  const mobilePhotoUrl =
    "https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/public/website/picture-placeholders/moped.webp";

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
