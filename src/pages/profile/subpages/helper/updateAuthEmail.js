import { signInWithEmailAndPassword, updateEmail } from "firebase/auth";
import { auth } from "../../../../firebase.config";

export const updateAuthEmail = async ({ email, password }) => {
  let errorReturn;
  await signInWithEmailAndPassword(auth, email, password)
    .then(() =>
      updateEmail(auth.currentUser, email)
        .then(() => {
          // todo: toast, email was updated
        })
        .catch((error) => {
          // todo: toast, could not update email, prob already in use
          console.log(error.message);
          errorReturn = error;
          return error;
        })
    )
    .catch((error) => {
      // todo: toast, could not update email, prob already in use
      console.log(error.message);
      errorReturn = error;
      return error;
    });
  return errorReturn;

  // let errorReturn;
  // await updateEmail(auth.currentUser, email)
  //   .then(() => {
  //     // todo: toast, email was updated
  //   })
  //   .catch((error) => {
  //     // todo: toast, could not update email, prob already in use
  //     console.log(error.message);
  //     errorReturn = error;
  //     return error;
  //   });
  // return errorReturn;
};
