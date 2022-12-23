import { useMultiStepHelper } from "../../../../hooks/useMultiStepHelper";
import { useSignUpFinishLogic } from "./useSignUpFinishLogic";

export const useSignUpCallback = () => {
  const {
    handleStorage,
    handleContinue,
    handleGoBack,
    handleGoogle,
    handleEmailContinue,
    handleConfirmationContinue,
  } = useMultiStepHelper();

  const {handleFinish} = useSignUpFinishLogic()

  const handleCallback = async ({ data, nextStep }) => {
    switch (nextStep) {
      case "google":
        await handleGoogle();
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
        handleFinish();
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
