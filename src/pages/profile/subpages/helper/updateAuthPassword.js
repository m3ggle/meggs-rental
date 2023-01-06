import { signInWithEmailAndPassword, updatePassword } from "firebase/auth";
import { toastNotify } from "../../../../components/toastNotify/toastNotify";
import { auth } from "../../../../firebase.config";

export const updateAuthPassword = async ({ currentPassword, newPassword }) => {
  const { notifyStandard } = toastNotify();

  let errorReturn;

  await signInWithEmailAndPassword(
    auth,
    auth.currentUser.email,
    currentPassword
  )
    .then(() => {
      updatePassword(auth.currentUser, newPassword)
        .then(() => {
          notifyStandard({
            information: {
              type: "check",
              content: "Password was updated",
            },
            id: "updatePasswordSuccess",
          });
        })
        .catch((error) => {
          notifyStandard({
            information: {
              type: "warning",
              content: error.message.split("/")[1].replace(").", ""),
            },
            id: "updatePasswordError",
          });
          errorReturn = error.message
        });
    })
    .catch((error) => {
      notifyStandard({
        information: {
          type: "warning",
          content: error.message.split("/")[1].replace(").", ""),
        },
        id: "signInError",
      });
      errorReturn = error.message;
    });
  
  return errorReturn
};
