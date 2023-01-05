import { signInWithEmailAndPassword, updatePassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toastNotify } from "../../../../components/toastNotify/toastNotify";
import { auth } from "../../../../firebase.config";
import { useUrlManipulation } from "../../../../hooks/urlManipulation/useUrlManipulation";

export const useForgotPasswordPasswordLogic = () => {
  const { getSingleParam } = useUrlManipulation();
  const { notifyStandard } = toastNotify();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const userEmail = getSingleParam("email") ?? undefined;

    if (userEmail) {
      // recent sign in is required for updatePassword else, bug
      signInWithEmailAndPassword(auth, userEmail, data.oldPassword)
        .then(() => {
          updatePassword(auth.currentUser, data.newPassword)
            .then(() => {
              notifyStandard({
                information: {
                  type: "check",
                  content: "Password got updated",
                },
                id: "passwordUpdate",
              });
              navigate("/profile");
            })
            .catch((error) => {
              notifyStandard({
                information: {
                  type: "warning",
                  content: error.message.split(":")[1],
                },
                id: "error",
              });
              console.log(error.code, error.message);
            });
        })
        .catch((error) => {
          notifyStandard({
            information: {
              type: "warning",
              content: "Probably wrong password",
            },
            id: "wrongPassword",
          });
          console.log(error.message);
        });
    } else {
      notifyStandard({
        information: {
          type: "warning",
          content: "Use the link in the Email",
        },
        id: "incorrectLink",
      });
    }
  };

  return { onSubmit };
};
