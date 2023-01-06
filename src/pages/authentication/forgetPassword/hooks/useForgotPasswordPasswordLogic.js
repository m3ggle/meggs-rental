import { confirmPasswordReset } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toastNotify } from "../../../../components/toastNotify/toastNotify";
import { auth } from "../../../../firebase.config";
import { useUrlManipulation } from "../../../../hooks/urlManipulation/useUrlManipulation";

export const useForgotPasswordPasswordLogic = () => {
  const { getSingleParam } = useUrlManipulation();
  const { notifyStandard } = toastNotify();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // const userEmail = getSingleParam("email") ?? undefined;
    const oobCode = getSingleParam("oobCode");

    confirmPasswordReset(auth, oobCode, data.newPassword)
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
            content: error.message.split("/")[1].replace(").", ""),
          },
          id: "forgotPasswordError",
        });
        console.log(error.code, error.message);
      });
  };
  return { onSubmit };
};
