import { toastNotify } from "../../../../components/toastNotify/toastNotify";
import supabase from "../../../../config/supabaseClient";

export const useForgotPasswordPasswordOnSubmit = () => {
  const { notifyStandard } = toastNotify();

  const onSubmit = async (data) => {
    const { error } = await supabase.auth.updateUser({
      password: data.password,
    });

    if (error !== null) {
      console.log(error);
      notifyStandard({
        information: {
          type: "info",
          content: "Could not update password.",
        },
        id: "forgotPasswordError",
      });
      return;
    }
    notifyStandard({
      information: {
        type: "success",
        content: "Password was updated",
      },
      id: "passwordUpdate",
    });
  };
  return { onSubmit };
};
