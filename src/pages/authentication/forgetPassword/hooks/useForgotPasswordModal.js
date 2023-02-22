import { useNotifyModalContext } from "../../../../context/notifyModal/notifyModalContext";

export const useForgotPasswordModal = () => {
  const { dispatchNotifyModal, closeNotifyModal } = useNotifyModalContext();

  const desktopPhotoUrl =
    "https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/public/website/picture-placeholders/threeCars.webp";
  const mobilePhotoUrl =
    "https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/public/website/picture-placeholders/moped.webp";

  const openModal = (email) => {
    dispatchNotifyModal({
      type: "SET_NOTIFY_MODAL",
      payload: {
        isOpen: true,
        preMade: "standard",
        extraInfo: {
          title: "Email was send",
          bulletPoints: [
            `We send an email to "${email}"`,
            "Check your invoices and spam folder for an email from Megg's Rental",
            `Click the blue highlighted link.`,
            `Did you not get an email? Close the modal and check for typos.`,
          ],
          primaryButton: {
            title: "Close Modal",
            function: closeNotifyModal,
          },
          //   secondaryButton: {
          //     title: "Close",
          //     function: closeNotifyModal,
          //   },
        },
        photoURL: {
          desktop: desktopPhotoUrl,
          mobile: mobilePhotoUrl,
        },
      },
    });
  };

  return { openModal };
};
