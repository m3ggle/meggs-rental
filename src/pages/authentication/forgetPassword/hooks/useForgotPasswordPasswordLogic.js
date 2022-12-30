import { signInWithEmailAndPassword, updatePassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../../firebase.config";
import { useUrlManipulation } from "../../../../hooks/urlManipulation/useUrlManipulation";

export const useForgotPasswordPasswordLogic = () => {
  const { getSingleParam } = useUrlManipulation();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const userEmail = getSingleParam("email") ?? undefined;

    if (userEmail) {
      // recent sign in is required for updatePassword else, bug
      signInWithEmailAndPassword(auth, userEmail, data.oldPassword).then(() => {
        updatePassword(auth.currentUser, data.newPassword)
          .then(() => {
            // Todo: toast, password got updated
            navigate("/profile");
          })
          .catch((error) => {
            // Todo: toast, error
            console.log(error.code, error.message);
          });
      }).catch((error) => {
        // todo: probably wrong password
        console.log(error.message)
      });
    } else {
      // todo: toast use the link in the email we send you
    }
  };

  return { onSubmit };
};
