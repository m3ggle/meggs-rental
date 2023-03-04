import React from "react";
import { useParams } from "react-router-dom";
import { useGetOfferDetails } from "../../api/supabase/useGetOfferDetails";
import { useGetOfferReviews } from "../../api/supabase/useGetOfferReviews";
import { useGetOfferSummary } from "../../api/supabase/useGetOfferSummary";
import Loading from "../../components/Loading";
import { stripAnyWhiteSpace } from "../../helpers/stripAnyWhiteSpace";
import OfferDetailsImgPart from "./view/OfferDetailsImgPart";
import OfferDetailsInfoPart from "./view/offerDetailsInfoPart/OfferDetailsInfoPart";

const OfferDetails = () => {
  const param = useParams();
  // all get queried in parallel
  const { offerInformation, isLoading: offerLoading } = useGetOfferDetails(
    stripAnyWhiteSpace(param.offerId)
  );
  const { summary, isLoading: summaryLoading } = useGetOfferSummary(
    stripAnyWhiteSpace(param.offerId)
  );
  const { reviews, isLoading: reviewsLoading } = useGetOfferReviews(
    stripAnyWhiteSpace(param.offerId)
  );

  const reviewSection = {
    summary,
    reviews,
    summaryLoading,
    reviewsLoading,
  };

  return (
    <>
      {offerLoading ? (
        <div className="h-screen w-full bg-white dark:bg-dmGrey900">
          <Loading />
        </div>
      ) : offerInformation === null ? (
        <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-dmGrey900">
          <span className="text-center text-base text-lmGrey800 dark:text-dmGrey25">
            Seems like the offer does not exists anymore.
          </span>
        </div>
      ) : (
        <div className="relative flex w-full max-w-[1440px] flex-col pt-6 1200:flex-row 1200:pt-0">
          {/* <OfferDetailsHeader /> */}
          <OfferDetailsImgPart
            offerImages={offerInformation.offer_pictures.picture_urls}
          />
          <OfferDetailsInfoPart
            offerInformation={offerInformation}
            reviewSection={reviewSection}
          />
        </div>
      )}
    </>
  );
};

export default OfferDetails;
