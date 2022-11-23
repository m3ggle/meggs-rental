import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "../../../../../components/offerDetails/Calendar";
import { useUrlManipulation } from "../../../../../hooks/urlManipulation/useUrlManipulation";
import { useGetOffer } from "../../../../../hooks/useGetOffer";
import PreviewBasicInfo from "./components/PreviewBasicInfo";
import PreviewButtons from "./components/PreviewButtons";
import PreviewIcons from "./components/PreviewIcons";
import PreviewImgs from "./components/PreviewImgs";
import PreviewOwner from "./components/PreviewOwner";

const Preview = () => {
  const { searchParams, getSingleParam } = useUrlManipulation();
  const { getOffer } = useGetOffer("map");

  const [show, setShow] = useState(getSingleParam("offerId") ? true : false);
  const [offerInformation, setOfferInformation] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const tempShow = getSingleParam("offerId") ? true : false;

    if (tempShow) {
      setShow(true);

      const result = getOffer(getSingleParam("offerId"));
      result ? setOfferInformation(result) : navigate("not-found");
      return;
    }

    // if there is no offerId inside the url and show is true (prevent setting state )
    show && setShow(false);
  }, [searchParams, getSingleParam, navigate, getOffer, show]);

  return (
    // <div className="flex absolute left-7 top-7 bottom-7 z-20 h-[640px] w-fit max-w-[360px] overflow-scroll rounded-xl bg-white shadow-xl">
    <div
      className={`${
        show ? "flex" : "hidden"
      } h-[640px] w-[360px] max-w-[360px] flex-col gap-y-2 overflow-scroll rounded-2xl bg-white p-6 pt-10 shadow-xl duration-300 dark:bg-dmGrey900`}
    >
      <div className="hideScrollbar relative flex h-fit w-full flex-col gap-y-2 overflow-scroll">
        <PreviewIcons />
        {offerInformation && (
          <>
            <PreviewBasicInfo offerInformation={offerInformation} />
            <PreviewImgs offerImages={offerInformation.photoUrl} />
            <div
              className={`-my-2 min-h-fit w-full rounded-2xl dark:mt-2 dark:mb-1`}
            >
              <Calendar
                offerDates={offerInformation.calendar}
                shadow={true}
                header={true}
              />
            </div>
            {/* <CarSpecWrapper offerInformation={offerInformation} amount="preview" specs={carSpecData} mobile={false} /> */}
            <PreviewOwner ownerId={offerInformation.ownerId} />
            <PreviewButtons offerId={offerInformation.offerId} />
          </>
        )}
      </div>
    </div>
    // </div>
  );
};

export default Preview;
