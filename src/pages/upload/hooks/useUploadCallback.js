import { useNavigate } from "react-router-dom";
import { useMultiStepHelper } from "../../../hooks/useMultiStepHelper";

const useUploadCallback = () => {
  const { handleStorage, handleContinue, handleGoBack } = useMultiStepHelper();

  const navigate = useNavigate();

  const handleCallback = ({ data, nextStep }) => {
    switch (nextStep) {
      case "finish":
        localStorage.removeItem("uploadData");
        navigate("/homepage");
        break;
      case true:
        handleContinue();
        handleStorage(data, "uploadData");
        break;
      case "back":
        handleGoBack();
        break;
      case "close":
        localStorage.removeItem("uploadData");
        navigate("/users-offers");
        break;
      default:
        break;
    }
  };

  return { handleCallback };
};

export default useUploadCallback;
