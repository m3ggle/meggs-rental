import { useState } from "react";
import supabase from "../../../../config/supabaseClient";
import { useSignUpHandleModal } from "./useSignUpHandleModal";
import { useSignUpHelpers } from "./useSignUpHelpers";

export const useSignUpEmailPasswordSubmit = () => {
  const { handleModal } = useSignUpHandleModal();
  const {
    handleEmailChange,
    handleEmailCheckCall,
    displayNotify,
    checkSignUpFormData,
  } = useSignUpHelpers();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (formData) => {
    // preparation
    let data = JSON.parse(localStorage.getItem("signUpData")) ?? false;
    data.email = formData.email;
    data.password = formData.password;

    // checks before sign up
    const checkFormResult = checkSignUpFormData(data);
    if (!checkFormResult) {
      return;
    }
    setIsLoading(true);
    const checkEmailResult = await handleEmailCheckCall(formData.email);
    if (!checkEmailResult) {
      displayNotify("This email already exists.");
      setIsLoading(false);
      return;
    }

    // sign up to supabase
    const { error: signUpError } = await supabase.auth.signUp(formData);

    if (signUpError !== null) {
      displayNotify("Email is already in use.", "signUpEnd");
      setIsLoading(false);
      return;
    }

    // everything alright, lets move on
    handleModal(data.user.email);
    setIsLoading(false);
  };

  return { onSubmit, isLoading, handleEmailChange };
};
