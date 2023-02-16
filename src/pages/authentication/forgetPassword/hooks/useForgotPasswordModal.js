import { useNotifyModalContext } from "../../../../context/notifyModal/notifyModalContext";

export const useForgotPasswordModal = () => {
  const { dispatchNotifyModal, closeNotifyModal } = useNotifyModalContext();

  const desktopPhotoUrl =
    "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2FthreeCars.webp?alt=media&token=51d51fb2-414d-44a4-a549-40a36666b7cb";
  const mobilePhotoUrl =
    "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2Fmoped.webp?alt=media&token=c3fbae96-06a8-4121-9067-25ca1dcea4af";

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
