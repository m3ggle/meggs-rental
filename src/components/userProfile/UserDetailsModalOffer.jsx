import React from "react";
import Btn from "../common/Btn";
import Loading from "../Loading";
import MobileOfferCard from "../offerCard/nonResponsive/mobileOfferCard/MobileOfferCard";
import { toastNotify } from "../toastNotify/toastNotify";

const UserDetailsModalOffer = ({ offers, closeModal }) => {
  const { notifyStandard } = toastNotify();

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
          <Loading />
        )}
      </div>
    </>
  );
};

export default UserDetailsModalOffer;
