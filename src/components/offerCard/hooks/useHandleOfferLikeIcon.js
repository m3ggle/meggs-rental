import { useState } from "react";
import supabase from "../../../config/supabaseClient";
import { useUserContext } from "../../../context/user/userContext";
import { toastNotify } from "../../toastNotify/toastNotify";

export const useHandleOfferLikeIcon = ({offerId, is_liked}) => {
  const { userId } = useUserContext();
  const { notifyStandard } = toastNotify();
  
  const [isLiked, setIsLiked] = useState(is_liked);

  const handleDislike = async () => {
    console.log("disliking", offerId);
    let { error } = await supabase.rpc("dislike_offer", {
      oid: offerId,
      uid: userId,
    });

    if (error) {
      console.error(error);
      notifyStandard({
        information: {
          type: "error",
          content: "Could not Dislike.",
        },
        id: "like button",
      });
    }

    setIsLiked(false);
  };

  const handleLike = async () => {
    console.log("liking", offerId);
    let { error } = await supabase.rpc("like_offer", {
      oid: offerId,
      uid: userId,
    });

    if (error) {
      console.error(error);
      notifyStandard({
        information: {
          type: "error",
          content: "Could not Dislike.",
        },
        id: "like button",
      });
    }

    setIsLiked(true);
  };

  const handleOfferLikeIcon = async () => {
    if (userId !== null) {
      if (isLiked) {
        await handleDislike();
        return;
      }
      await handleLike();
      return;
    }

    notifyStandard({
      information: {
        type: "info",
        content: "You have to be logged in.",
      },
      id: "like button",
    });
  };

  return { isLiked, handleOfferLikeIcon };
};