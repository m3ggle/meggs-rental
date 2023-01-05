import { signInWithEmailAndPassword, updateEmail } from "firebase/auth";
import { toastNotify } from "../../../../components/toastNotify/toastNotify";
import { auth } from "../../../../firebase.config";

export const updateAuthEmail = async ({ email, password }) => {
  const { notifyStandard } = toastNotify();

  let errorReturn;
  await signInWithEmailAndPassword(auth, email, password)
    .then(() =>
      updateEmail(auth.currentUser, email)
        .then(() => {
          notifyStandard({
            information: {
              type: "check",
              content: "Email was updated",
            },
            id: "updateEmailSuccess",
          });
        })
        .catch((error) => {
          notifyStandard({
            information: {
              type: "warning",
              content: error.message.split(":")[1],
            },
            id: "updateEmailError",
          });
          console.log(error.message);
          errorReturn = error;
          return error;
        })
    )
    .catch((error) => {
      notifyStandard({
        information: {
          type: "warning",
          content: error.message.split(":")[1],
        },
        id: "signInError",
      });
      console.log(error.message);
      errorReturn = error;
      return error;
    });
  return errorReturn;
};
