import React from "react";
import Btn from "../../../components/common/Btn";
import DesktopOfferCard from "../../../components/offerCard/nonResponsive/desktopOfferCard/DesktopOfferCard";
import MobileOfferCard from "../../../components/offerCard/nonResponsive/mobileOfferCard/MobileOfferCard";
import SpecialHomepageOfferCard from "../../../components/offerCard/nonResponsive/specialHomepageOfferCard/SpecialHomepageOfferCard";
import TabletOfferCard from "../../../components/offerCard/nonResponsive/tabletOfferCard/TabletOfferCard";
import ExampleData from "../../../ExampleData";

const { exampleOffers } = ExampleData();

const HomepageHero = () => {
  const three = [exampleOffers[2], exampleOffers[4], exampleOffers[3]];

  const singleOffer = exampleOffers[0];

  const handleGetStarted = () => {};

  return (
    <div className="relative flex h-screen w-full items-center bg-white px-14">
      {/* text */}
      <div className="flex w-[712px] flex-col gap-y-9">
        <h1 className="text-[80px] font-bold leading-[80px] text-lmGrey900">
          Drive what you want, where and when you want!
        </h1>
        <h3 className="text-4xl text-lmGrey800">
          Nisi facilisis mauris lacus sit arcu enim. Commodo faucibus tincidunt
          morbi risus imperdiet tincidunt.
        </h3>

        <div className="w-fit">
          <Btn
            type="button"
            uiType="primary"
            title="Get Started"
            icon="fa-solid fa-chevron-right"
            onClick={handleGetStarted}
          />
        </div>
      </div>

      {/* imgs */}
      <div className="absolute right-[56px] flex h-[80%] w-[620px] items-center">
        <div className="absolute left-[20px] top-0 opacity-40">
          <TabletOfferCard offerInformation={singleOffer} index={0} />
        </div>

        <div className="absolute left-[160px] top-[135px] z-20">
          <SpecialHomepageOfferCard offerInformation={singleOffer} index={0} />
        </div>

        <div className="absolute right-0 top-[60px] opacity-80">
          <DesktopOfferCard offerInformation={singleOffer} index={0} />
        </div>

        <div className="absolute -left-8 -bottom-20 flex flex-col gap-y-2">
          <div className="">
            <MobileOfferCard offerInformation={exampleOffers[0]} index={0} />
          </div>
          <div className="opacity-60">
            <MobileOfferCard offerInformation={exampleOffers[1]} index={0} />
          </div>
          <div className="opacity-30">
            <MobileOfferCard offerInformation={exampleOffers[3]} index={0} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageHero;
