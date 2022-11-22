import React, { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ExampleData from "../../ExampleData";
import OfferDetailsImgPart from "./view/OfferDetailsImgPart";
import OfferDetailsInfoPart from "./view/offerDetailsInfoPart/OfferDetailsInfoPart";

const {exampleOffers} = ExampleData()

const OfferDetails = () => {
  const [offerInformation, setOfferInformation] = useState(undefined);
  const param = useParams();
  const navigate = useNavigate()

  const getOfferInformation = useCallback(() => {
    const localResult = exampleOffers.filter(
      (offer) => offer.offerId === param.offerId
    );
    return localResult[0];
  }, [param.offerId]);

  useEffect(() => {
    // check if we have it on the website
    let tempHolderLocal = getOfferInformation();

    if (tempHolderLocal) {
      // if yes, set state on result
      setOfferInformation(tempHolderLocal);
    } else {
      // not found, check on firestore
      let tempHolderFireStore = getOfferInformationFromFirestore();
      if (tempHolderFireStore) {
        setOfferInformation(tempHolderLocal);
        // found it in firestore and setting state
      } else {
        // not found, redirecting to not found
        navigate("/not-found");
      }
    }
  }, [navigate, getOfferInformation]);

  const getOfferInformationFromFirestore = () => {};

  return (
    <>
      {offerInformation ? (
        <div className="relative flex w-full max-w-[1440px] flex-col pt-6 1200:flex-row 1200:pt-0">
          <OfferDetailsImgPart offerImages={offerInformation.photoUrl} />
          <OfferDetailsInfoPart />
        </div>
      ) : (
        <div className="h-screen w-full bg-white dark:bg-dmGrey900"></div>
      )}
    </>
  );
};

export default OfferDetails;
