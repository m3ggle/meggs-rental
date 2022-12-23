import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { firestoreSetUser } from "../../../../api/firebase/useSetUserAPI";
import { auth } from "../../../../firebase.config";

export const useSignUpEmailPasswordSubmit = (handleCallback) => {
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

        const nextStep = "email";
        handleCallback({ data, nextStep });
      }
    } catch (error) {
      // most likely: email already exists
      // Todo: toast msg
      console.error(error.message);
    }
  };

  return { onSubmit };
};
