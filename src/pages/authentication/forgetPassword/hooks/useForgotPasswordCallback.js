import { useNavigate } from "react-router-dom";
import { useMultiStepHelper } from "../../../../hooks/useMultiStepHelper";

export const useForgotPasswordCallback = () => {
  const { handleStorage, handleEmailContinue } = useMultiStepHelper();

  const navigate = useNavigate();

  const handleCallback = ({ data, nextStep }) => {
    switch (nextStep) {
      case "google":
        navigate("/homepage");
        break;
      case "finished":
        navigate("/homepage");
        break;
      case "email":
        handleEmailContinue(data);
        handleStorage(data, "forgotPasswordData");
        break;
      default:
        break;
    }
  };

  return { handleCallback };
};
