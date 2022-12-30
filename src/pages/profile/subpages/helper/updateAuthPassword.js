import { signInWithEmailAndPassword, updatePassword } from "firebase/auth";
import { auth } from "../../../../firebase.config";

export const updateAuthPassword = async ({ email, oldPassword, newPassword }) => {
  await signInWithEmailAndPassword(auth, email, oldPassword)
    .then(() => {
      updatePassword(auth.currentUser, newPassword)
        .then(() => {
          // todo: toast, password was updated
        })
        .catch((error) => {
          // todo: toast, could not update password
          console.log(error.message);
        });
    })
    .catch((error) => {
      // todo: toast, probably wrong password, please check email and passwords
      console.log(error.message);
    });
};
