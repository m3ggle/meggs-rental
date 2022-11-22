import { useNavigate } from "react-router-dom";
import { useSignStateData } from "../../../../hooks/useSignStateData";

export const useSignInCallback = () => {
  const { storeDataInState } = useSignStateData();
  const navigate = useNavigate();

  const handleCallback = ({ data, nextStep }) => {
    switch (nextStep) {
      case "google":
        console.log("signing in");
        break;
      case "finished":
        storeDataInState(data);
        navigate("/homepage");
        break;
      default:
        break;
    }
  };

  return { handleCallback };
};
