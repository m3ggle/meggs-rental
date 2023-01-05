import React from "react";
import { useDarkModeContext } from "../../context/darkMode/darkModeContext";
import Btn from "../common/Btn";
import MobileOfferCard from "../offerCard/nonResponsive/mobileOfferCard/MobileOfferCard";
import { toastNotify } from "../toastNotify/toastNotify";

const UserDetailsModalOffer = ({ offers, closeModal }) => {
  const { notifyStandard } = toastNotify();
  const { darkMode } = useDarkModeContext();

  const handleLoadMore = () => {
    console.log("open full userprofile");
    notifyStandard({
      information: {
        type: "info",
        content: "I am working on it",
      },
      id: "standard",
    });
  };

  return (
    <>
      <div className="flex w-full flex-col gap-2">
        <span className="text-base font-semibold text-lmGrey700 dark:text-dmGrey25">
          {offers.length > 0 ? "Offers" : "Currently no active Offers"}
        </span>
        {offers.length > 0 ? (
          <div className="flex flex-col gap-y-2">
            {offers.map((offer, index) => (
              <MobileOfferCard
                closeModal={closeModal}
                key={index}
                index={index}
                offerInformation={offer}
              />
            ))}
            <Btn
              type="button"
              uiType="secondary"
              title="View full Userprofile"
              onClick={handleLoadMore}
            />
          </div>
        ) : (
          <div className="flex h-fit w-full items-center justify-center">
            <img
              className="h-fit w-full max-w-[340px]"
              src={
                darkMode
                  ? "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2FyetiDm.svg?alt=media&token=f0326255-ec38-4284-9d11-21ff4593300b"
                  : "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2FyetiLm.svg?alt=media&token=d21171c5-2622-47f0-b13c-398b4bc79169"
              }
              alt="yeti"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default UserDetailsModalOffer;
