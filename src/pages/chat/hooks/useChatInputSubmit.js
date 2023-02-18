import { toastNotify } from "../../../components/toastNotify/toastNotify";
import supabase from "../../../config/supabaseClient";
import { useUserContext } from "../../../context/user/userContext";
import { stripAnyWhiteSpace } from "../../../helpers/stripAnyWhiteSpace";
import { useUrlManipulation } from "../../../hooks/urlManipulation/useUrlManipulation";

export const useChatInputSubmit = (setValue) => {
  const { userId } = useUserContext();
  const { getSingleParam } = useUrlManipulation();
  const { notifyStandard } = toastNotify();

  const chatId = getSingleParam("chatId");

  const onSubmit = async (data) => {
    const { message } = data;

    const isCorrect = checkArguments(message);
    if (!isCorrect) {
      return;
    }

    let { error } = await supabase.rpc("upload_message", {
      chatroom_id: chatId,
      content: message,
      user_id: userId,
    });

    if (error) console.error(error);

    setValue("message", undefined);
  };

  const checkArguments = (message) => {
    if (!message || stripAnyWhiteSpace(message).length === 0) {
      return false;
    }

    if (!chatId || chatId === null) {
      //   notify url chatId is missing
      notifyStandard({
        information: {
          type: "error",
          content: "Url is missing Chat Id.",
        },
        id: "messageError",
      });
      return false;
    }

    if (userId === null) {
      notifyStandard({
        information: {
          type: "error",
          content: "User Id missing, please log in.",
        },
        id: "messageError",
      });
      return false;
    }

    return true;
  };

  return { onSubmit };
};
