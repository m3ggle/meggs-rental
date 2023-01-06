import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toastNotify } from "../../../../components/toastNotify/toastNotify";
import { useNotifyModalContext } from "../../../../context/notifyModal/notifyModalContext";
import { auth } from "../../../../firebase.config";
import { useGetUserByEmail } from "../../../../hooks/firebase/useGetUserByEmail";

export const useForgotPasswordEmailLogic = () => {
  const { getUserByEmail } = useGetUserByEmail();
  const { dispatchNotifyModal, closeNotifyModal } = useNotifyModalContext();
  const navigate = useNavigate();
  const { notifyStandard } = toastNotify();

  const onSubmit = async (data) => {
    const userInformation = await getUserByEmail(data.email);

    // does not have an acc
    if (userInformation === undefined) {
      console.log("does have an account");
      notifyStandard({
        information: {
          type: "warning",
          content: "Email address does not exist",
        },
        id: "userUploadError",
      });
      return;
    }

    // email is not his
    if (data.email !== auth.currentUser.email) {
      console.log(data.email);
      console.log(auth.currentUser.email);
      notifyStandard({
        information: {
          type: "warning",
          content: "This is not your email address",
        },
        id: "userUploadError",
      });
      return;
    }

    // everything alright, send email
    sendPasswordResetEmail(auth, data.email)
      .then(() => {
        const desktopPhotoUrl =
          "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2FthreeCars.webp?alt=media&token=51d51fb2-414d-44a4-a549-40a36666b7cb";
        const mobilePhotoUrl =
          "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2Fmoped.webp?alt=media&token=c3fbae96-06a8-4121-9067-25ca1dcea4af";

        dispatchNotifyModal({
          type: "SET_NOTIFY_MODAL",
          payload: {
            isOpen: true,
            preMade: "standard",
            extraInfo: {
              title: "Email was send",
              bulletPoints: [
                `We send an email to "${data.email}"`,
                "Check your invoices and spam folder for an email from Megg's Rental",
                `Click the blue highlighted link.`,
                `Did not got an email, click "Send Again".`,
              ],
              primaryButton: {
                title: "Send Again",
                function: () => {
                  sendPasswordResetEmail(auth, data.email).catch((error) =>
                    console.log(error)
                  );
                  notifyStandard({
                    information: {
                      type: "warning",
                      content: "Email was send",
                    },
                    id: "userUploadError",
                  });
                },
              },
              secondaryButton: {
                title: "Close",
                function: closeNotifyModal,
              },
            },
            photoURL: {
              desktop: desktopPhotoUrl,
              mobile: mobilePhotoUrl,
            },
          },
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        notifyStandard({
          information: {
            type: "warning",
            content: errorMessage.split("/")[1].replace(").", ""),
          },
          id: "userUploadError",
        });
        console.log("error code: " + errorCode, "error msg: " + errorMessage);
      });
  };

  const handleSignInClick = () => navigate("/sign-in");

  return { onSubmit, handleSignInClick };
};
