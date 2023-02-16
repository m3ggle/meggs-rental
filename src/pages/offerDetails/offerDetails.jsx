import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import ExampleData from "../../ExampleData";
import { stripAnyWhiteSpace } from "../../helpers/stripAnyWhiteSpace";
import { useGetOfferDetails } from "../../hooks/useGetOfferDetails";
import { useGetOfferReviews } from "../../hooks/useGetOfferReviews";
import { useGetOfferSummary } from "../../hooks/useGetOfferSummary";
import OfferDetailsImgPart from "./view/OfferDetailsImgPart";
import OfferDetailsInfoPart from "./view/offerDetailsInfoPart/OfferDetailsInfoPart";

const { exampleOffers } = ExampleData();

const OfferDetails = () => {
  // const [offerInformation, setOfferInformation] = useState(undefined);
  // const param = useParams();
  // const navigate = useNavigate();

  // const getOfferInformation = useCallback(() => {
  //   const localResult = exampleOffers.filter(
  //     (offer) => offer.offerId === param.offerId
  //   );
  //   return localResult[0];
  // }, [param.offerId]);

  // useEffect(() => {
  //   // check if we have it on the website
  //   let tempHolderLocal = getOfferInformation();

  //   if (tempHolderLocal) {
  //     // if yes, set state on result
  //     setOfferInformation(tempHolderLocal);
  //   } else {
  //     // not found, check on firestore
  //     let tempHolderFireStore = getOfferInformationFromFirestore();
  //     if (tempHolderFireStore) {
  //       setOfferInformation(tempHolderLocal);
  //       // found it in firestore and setting state
  //     } else {
  //       // not found, redirecting to not found
  //       navigate("/not-found");
  //     }
  //   }
  // }, [navigate, getOfferInformation]);

  // const getOfferInformationFromFirestore = () => {};

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

  //   const isLoading = false;
  // const offerInformation = null;

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
