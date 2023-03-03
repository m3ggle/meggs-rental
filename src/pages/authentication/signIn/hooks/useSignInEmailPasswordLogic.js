import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toastNotify } from "../../../../components/toastNotify/toastNotify";
import supabase from "../../../../config/supabaseClient";

export const useSignInEmailPasswordLogic = () => {
  const navigate = useNavigate();
  const { notifyStandard } = toastNotify();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    const { data: signInResult, error } =
      await supabase.auth.signInWithPassword(data, {
        redirectTo: "https://meggsrental.netlify.app/homepage",
      });

    if (error) {
      handleError(error);
      return;
    }
    handleSuccess(signInResult);
  };

  const handleError = (error) => {
    notifyStandard({
      information: {
        type: "warning",
        content: error.message,
      },
      id: "signInError",
    });
    setIsLoading(false);
  };

  const handleSuccess = () => {
    notifyStandard({
      information: {
        type: "success",
        content: "You are logged in.",
      },
      id: "signInSuccess",
    });
    setIsLoading(false);
    navigate("/homepage");
  };

  const handleForgotClick = () => navigate("/forgot-password");
  const handleSignUpClick = () => navigate("/sign-up");

  return { onSubmit, handleForgotClick, handleSignUpClick, isLoading };
};
