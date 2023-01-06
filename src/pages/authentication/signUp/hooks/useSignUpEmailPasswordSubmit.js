import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { firestoreSetUser } from "../../../../api/firebase/useSetUserAPI";
import { toastNotify } from "../../../../components/toastNotify/toastNotify";
import { useNotifyModalContext } from "../../../../context/notifyModal/notifyModalContext";
import { auth } from "../../../../firebase.config";
import { useUrlManipulation } from "../../../../hooks/urlManipulation/useUrlManipulation";
import { useMultiStepHelper } from "../../../../hooks/useMultiStepHelper";

export const useSignUpEmailPasswordSubmit = () => {
  const { handleStorage } = useMultiStepHelper();
  const { setSingleParam } = useUrlManipulation();
  const { dispatchNotifyModal, closeNotifyModal } = useNotifyModalContext();
  const { notifyStandard } = toastNotify();

  const desktopPhotoUrl =
    "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2FthreeCars.webp?alt=media&token=51d51fb2-414d-44a4-a549-40a36666b7cb";
  const mobilePhotoUrl =
    "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2Fmoped.webp?alt=media&token=c3fbae96-06a8-4121-9067-25ca1dcea4af";

  const modalHandleSendAgain = async () => {
    try {
      await sendEmailVerification(auth.currentUser);
      notifyStandard({
        information: {
          type: "info",
          content: "We send an verification email",
        },
        id: "sendVerifyEmail",
      });
    } catch (error) {
      notifyStandard({
        information: {
          type: "info",
          content: error.message.split("/")[1].replace(").", ""),
        },
        id: "sendAgainError",
      });
      console.log(error.code);
      console.log(error.message);
    }
  };

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
            `If not, then click the "Send Again" button.`,
            `Still nothing? Click the "Go Back" button and check if you put in your correct email address.`,
          ],
          primaryButton: {
            title: "Send Again",
            function: modalHandleSendAgain,
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
  };

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (credentials) {
        await sendEmailVerification(credentials.user);

        const prep = {
          uid: credentials.user.uid,
          information: {
            uid: credentials.user.uid,
            email: credentials.user.email,
          },
        };
        firestoreSetUser(prep);

        handleModal(email);
        handleStorage(data, "signUpData");
        setSingleParam("email", email);
      }
    } catch (error) {
      // most likely: email already exists
      notifyStandard({
        information: {
          type: "info",
          content: error.message.split("/")[1].replace(").", ""),
        },
        id: "sendVerifyEmail",
      });
      console.error(error.message);
    }
  };

  return { onSubmit };
};
