import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../../../config/supabaseClient";
import { useSignUpEmailPasswordHelpers } from "./useSignUpEmailPasswordHelpers";
import { useSignUpHandleModal } from "./useSignUpHandleModal";

export const useSignUpEmailPasswordSubmit = () => {
  const { handleModal } = useSignUpHandleModal();
  const {
    handleEmailChange,
    handleEmailCheckCall,
    displayNotify,
    checkSignUpFormData,
    handleSignUpPreparation,
  } = useSignUpEmailPasswordHelpers();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (formData) => {
    // preparation
    let data = JSON.parse(localStorage.getItem("signUpData")) ?? false;
    data.email = formData.email;
    data.password = formData.password;

    // checks before sign up
    const checkFormResult = checkSignUpFormData(data, true);
    if (!checkFormResult) {
      return;
    }
    setIsLoading(true);
    const checkEmailResult = await handleEmailCheckCall(formData.email); //true if the email already exists
    if (checkEmailResult) {
      displayNotify("This email already exists.");
      setIsLoading(false);
      return;
    }

    const userMetaData = handleSignUpPreparation(data);

    console.log(userMetaData)

    // sign up to supabase
    const { error: signUpError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: { ...userMetaData },
      },
    });

    if (signUpError !== null) {
      displayNotify("Something went wrong", "signUpEnd");
      console.log(signUpError);
      setIsLoading(false);
      return;
    }

    // everything alright, lets move on
    handleModal(data.email);
    navigate("/homepage");
    setIsLoading(false);
  };

  const handleGoogle = async () => {
    // prep
    let data = JSON.parse(localStorage.getItem("signUpData")) ?? false;

    // check
    const checkFormResult = checkSignUpFormData(data);
    if (!checkFormResult) {
      return;
    }

    // user meta data prep
    const userMetaData = handleSignUpPreparation(data);

    const { data: googleData, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/explore/catalog",
        // data: { ...userMetaData },
      },
    });

    if (error) {
      console.log(error);
      return;
    }

    console.log(googleData);
  };

  return {
    onSubmit,
    handleEmailChange,
    handleGoogle,
    isLoading,
  };
};
