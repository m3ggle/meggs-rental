import { useNavigate } from "react-router-dom";
import { useMultiStepHelper } from "../../../../hooks/useMultiStepHelper";

export const useForgotPasswordCallback = () => {
  const { handleStorage, handleGoogle } = useMultiStepHelper();

  const navigate = useNavigate();

  const handleEmail = () => {
    // Todo: check if email exists in firestore
    // if so, then send email and use modal to let the user know
    // if not, let the user know in the modal

    // Todo: sign up, instead of signupconfirmation, use the modal instead
  }

  const handleCallback = ({ data, nextStep }) => {
    switch (nextStep) {
      case "google":
        handleGoogle()
        break;
      case "finished":
        navigate("/homepage");
        break;
      case "email":
        handleEmail(data);
        handleStorage(data, "forgotPasswordData");
        break;
      default:
        break;
    }
  };

  return { handleCallback };
};
