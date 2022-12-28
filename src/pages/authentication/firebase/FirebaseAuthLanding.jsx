import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUrlManipulation } from "../../../hooks/urlManipulation/useUrlManipulation";

export const FirebaseAuthLanding = () => {
  const { getAllParams } = useUrlManipulation();
  const navigate = useNavigate();

  const params = getAllParams();

  useEffect(() => {
    const newParams = new URLSearchParams(params);

    switch (params.mode) {
      case "resetPassword":
        navigate(`/forgot-password?round=2&${newParams}`);
        break;
      case "verifyEmail":
        navigate(`/sign-up?round=2&${newParams}`);
        break;
      default:
        break;
    }
  }, [navigate, params]);

  return <></>;
};
