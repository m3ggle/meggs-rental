import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toastNotify } from "../../../../components/toastNotify/toastNotify";
import { useNotifyModalContext } from "../../../../context/notifyModal/notifyModalContext";
import { auth } from "../../../../firebase.config";
import { useGetUserByEmail } from "../../../../hooks/firebase/useGetUserByEmail";

export const useSignInEmailPasswordLogic = () => {
  const { dispatchNotifyModal, closeNotifyModal } = useNotifyModalContext();
  const { getUserByEmail } = useGetUserByEmail();
  const navigate = useNavigate();
  const { notifyStandard } = toastNotify();

  const desktopPhotoUrl =
    "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2FthreeCars.webp?alt=media&token=51d51fb2-414d-44a4-a549-40a36666b7cb";
  const mobilePhotoUrl =
    "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2Fmoped.webp?alt=media&token=c3fbae96-06a8-4121-9067-25ca1dcea4af";

  const handleDoesNotHaveAccount = (data) => {
    dispatchNotifyModal({
      type: "SET_NOTIFY_MODAL",
      payload: {
        isOpen: true,
        preMade: "standard",
        extraInfo: {
          title: "Your Email was not found",
          bulletPoints: [
            `"${data.email}" was not found.`,
            "Is there a typo? Close the modal, correct the typo and try again.",
            `Don't have an account yet? Click the "Create a new Account" button.`,
          ],
          primaryButton: {
            title: "Create a new Account",
            function: () => {
              closeNotifyModal();
              const prep = {
                round: 1,
                email: data.email,
                password: data.password,
              };
              const nextParams = new URLSearchParams(prep);
              navigate(`/sign-up?${nextParams}`);
            },
          },
          secondaryButton: {
            title: "Typo in the Email input",
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

  const handleNotVerified = (data) => {
    console.log("you have an account but you are not verified");

    const params = {
      round: 3,
      apiKey: "AIzaSyC1ssliMOJ0ctBKYbefFn_IIm4PmqI0tPo",
      email: data.email,
    };

    const nextSearchParams = new URLSearchParams(params);
    navigate(`/sign-up?${nextSearchParams}`);
  };

  const handleSendEmail = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((currentUser) => {
        notifyStandard({
          information: {
            type: "info",
            content: `Hello ${currentUser.user.displayName}`,
          },
          id: "signInSuccess",
        });
        navigate("/homepage");
      })
      .catch((error) => {
        notifyStandard({
          information: {
            type: "warning",
            content: error.message.split("/")[1].replace(").", ""),
          },
          id: "signInError",
        });
        console.log(error.message);
      });
  };

  const onSubmit = async (data) => {
    const userInformation = await getUserByEmail(data.email);

    // does not have an acc
    if (userInformation === undefined) {
      handleDoesNotHaveAccount(data);
      return;
    }

    // is not verified
    if (!userInformation.displayName) {
      handleNotVerified(data);
      notifyStandard({
        information: {
          type: "info",
          content: "You are not verified",
        },
        id: "signInError",
      });
      return;
    }

    // alright
    handleSendEmail(data);
  };

  const handleForgotClick = () => navigate("/forgot-password");
  const handleSignUpClick = () => navigate("/sign-up");

  return { onSubmit, handleForgotClick, handleSignUpClick };
};
