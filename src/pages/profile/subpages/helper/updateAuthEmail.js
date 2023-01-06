import { signInWithEmailAndPassword, updateEmail } from "firebase/auth";
import { setUserEmail } from "../../../../api/firebase/setUserEmail";
import { toastNotify } from "../../../../components/toastNotify/toastNotify";
import { auth } from "../../../../firebase.config";

export const updateAuthEmail = async ({ newEmail, currentPassword }) => {
  const { notifyStandard } = toastNotify();

  let errorReturn;
  await signInWithEmailAndPassword(
    auth,
    auth.currentUser.email,
    currentPassword
  )
    .then(() => {
      updateEmail(auth.currentUser, newEmail)
        .then(() => {
          notifyStandard({
            information: {
              type: "check",
              content: "Email was updated",
            },
            id: "updateEmailSuccess",
          });
          const result = setUserEmail(auth.currentUser.uid, newEmail);
          if (result.message) {
            throw new Error(result);
          }
        })
        .catch((error) => {
          notifyStandard({
            information: {
              type: "warning",
              content: error.message.split("/")[1].replace(").", ""), //wrong currentPassword
            },
            id: "updateEmailError",
          });
          console.log(error.message);
          errorReturn = error;
          return error;
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
      console.log(error.message);
      errorReturn = error;
      return error;
    });
  return errorReturn;
};

// return undefined if everything went alright
// else it return the error
