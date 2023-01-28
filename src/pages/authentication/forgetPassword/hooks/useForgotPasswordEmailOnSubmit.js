import { toastNotify } from "../../../../components/toastNotify/toastNotify";
import supabase from "../../../../config/supabaseClient";
import { stripAnyWhiteSpace } from "../../../../helpers/stripAnyWhiteSpace";
import { useForgotPasswordModal } from "./useForgotPasswordModal";

export const useForgotPasswordEmailOnSubmit = () => {
  const { notifyStandard } = toastNotify();
  const { openModal } = useForgotPasswordModal();

  const onSubmit = async (data) => {
    const email = stripAnyWhiteSpace(data.email);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `http://localhost:3000/forgot-password?round=2&email=${email}`,
    });

    if (error !== null) {
      console.log(error.message);
      notifyStandard({
        information: {
          type: "info",
          content: error.message,
        },
        id: "forgotPasswordError",
      });
      return
    }
    openModal(email);
  };

  return { onSubmit };
};
