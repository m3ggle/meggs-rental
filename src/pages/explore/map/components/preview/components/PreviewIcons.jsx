import React from "react";
import { queryClient } from "../../../../../../api/reactQuery/queryClient";
import { useHandleOfferLikeIcon } from "../../../../../../components/offerCard/hooks/useHandleOfferLikeIcon";
import { useMapSubContext } from "../../../../../../context/map/mapSub/mapSubContext";
import { useNotifyModalContext } from "../../../../../../context/notifyModal/notifyModalContext";
import { useUserContext } from "../../../../../../context/user/userContext";

const PreviewIcons = ({ offerInformation }) => {
  const { offer_basics } = offerInformation;
  const { id, is_liked } = offer_basics;

  const { userId } = useUserContext();
  const { openAuthNotifyModal } = useNotifyModalContext();
  const { dispatchMapSub } = useMapSubContext();
  const handleClose = () => {
    dispatchMapSub({ type: "UPDATE_ACTIVE_MARKER", payload: null });
  };

  const { isLiked, handleOfferLikeIcon } = useHandleOfferLikeIcon({
    offerId: id,
    is_liked,
  });

  const handleLikeButton = async () => {
    if (userId === null) {
      openAuthNotifyModal();
      return;
    }
    
    await handleOfferLikeIcon();
    queryClient.invalidateQueries(["get_offer_details", id]);
  };

  return (
    <div className="absolute -top-[2px] right-0 flex h-fit w-fit cursor-pointer flex-col items-center justify-center text-[24px]">
      <i
        onClick={handleClose}
        className="fa-solid fa-times flex h-8 w-8 items-center justify-center text-[28px] text-lmGrey600 drop-shadow duration-300 hover:scale-102 hover:text-lmGrey800 active:scale-99 dark:text-dmGrey100 dark:hover:text-dmGrey25"
      />
      <i
        onClick={handleLikeButton}
        className={`fa-solid fa-heart flex h-8 w-8 items-center justify-center drop-shadow duration-300 hover:scale-102 hover:text-red-400 active:scale-99 ${
          isLiked
            ? "text-red-500"
            : "text-lmGrey200 dark:text-dmGrey300 dark:hover:text-red-400"
        }`}
      />
    </div>
  );
};

export default PreviewIcons;
