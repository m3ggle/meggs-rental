import { useNavigate } from "react-router-dom";
import { useMultiStepHelper } from "../../../../hooks/useMultiStepHelper";

export const useSignUpCallback = () => {
  const {
    handleStorage,
    handleContinue,
    handleGoBack,
    handleGoogle,
    handleEmailContinue,
    handleConfirmationContinue,
  } = useMultiStepHelper();

  const navigate = useNavigate();

  const handleCallback = ({ data, nextStep }) => {
    switch (nextStep) {
      case "google":
        handleGoogle();
        break;
      case "email":
        handleEmailContinue(data);
        handleStorage(data, "signUpData");
        break;
      case "confirmation":
        handleConfirmationContinue(data);
        handleStorage(data, "signUpData");
        break;
      case "finish":
        localStorage.removeItem("signUpData");
        navigate("/homepage");
        break;
      case true:
        handleContinue();
        handleStorage(data, "signUpData");
        break;
      case false:
        handleGoBack();
        break;
      default:
        break;
    }
  };

  return { handleCallback };
};
