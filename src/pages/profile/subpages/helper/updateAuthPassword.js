import { signInWithEmailAndPassword, updatePassword } from "firebase/auth";
import { toastNotify } from "../../../../components/toastNotify/toastNotify";
import { auth } from "../../../../firebase.config";

export const updateAuthPassword = async ({
  email,
  oldPassword,
  newPassword,
}) => {
  const { notifyStandard } = toastNotify();

  await signInWithEmailAndPassword(auth, email, oldPassword)
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
              content: error.message.split(":")[1],
            },
            id: "updatePasswordError",
          });
          console.log(error.message);
        });
    })
    .catch((error) => {
      notifyStandard({
        information: {
          type: "warning",
          content: error.message.split(":")[1],
        },
        id: "signInError",
      });
      console.log(error.message);
    });
};
