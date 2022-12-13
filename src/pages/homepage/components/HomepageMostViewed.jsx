import React from "react";
import Chameleon from "../../../assets/img/chameleon.webp";
import Btn from "../../../components/common/Btn";
import DesktopOfferCard from "../../../components/offerCard/nonResponsive/desktopOfferCard/DesktopOfferCard";
import MobileOfferCard from "../../../components/offerCard/nonResponsive/mobileOfferCard/MobileOfferCard";
import SpecialHomepageOfferCard from "../../../components/offerCard/nonResponsive/specialHomepageOfferCard/SpecialHomepageOfferCard";
import TabletOfferCard from "../../../components/offerCard/nonResponsive/tabletOfferCard/TabletOfferCard";
import ExampleData from "../../../ExampleData";

const { exampleOffers } = ExampleData();

const HomepageMostViewed = () => {
  const week = exampleOffers[3];
    const month = exampleOffers[0];
    const favorite = exampleOffers[1]
  const today = [exampleOffers[4], exampleOffers[5], exampleOffers[6]];

  return (
    <div
      id="mostViewed"
      className="flex w-full flex-col items-center gap-y-6 bg-white py-[100px]"
    >
      <div className="flex items-end gap-x-6">
        <div className="flex flex-col gap-y-3 rounded-[24px] p-9 shadow">
          <h3 className="text-3xl text-lmGrey800 drop-shadow-sm">This Month</h3>
          <TabletOfferCard offerInformation={week} index={0} />
        </div>

        <div className="flex flex-col gap-y-3 rounded-[24px] bg-white p-14 shadow">
          <h3 className="text-4xl text-lmGrey800">This Month</h3>
          <SpecialHomepageOfferCard offerInformation={month} />
        </div>

        <div className="flex w-fit flex-col justify-center gap-y-6 p-12">
          <h2 className="w-full text-5xl text-lmGrey800 drop-shadow">
            Most Viewed
          </h2>
          <span className="w-[297px] text-xl text-lmGrey800 drop-shadow-sm">
            Here are the best offers for you in different timespans. If you want
            to see more then open the full page
          </span>
          <div className="w-fit">
            <Btn uiType="primary" type="button" title="Open Full Page" />
          </div>
        </div>
      </div>

      <div className="flex items-start gap-x-6">
        <div className="relative h-[457px] w-[312px] rounded-[24px] shadow">
          <img
            className="absolute bottom-0 right-0 h-[335px] min-w-fit"
            src={Chameleon}
            alt="Chameleon"
          />
        </div>

        <div className="flex flex-col gap-y-3 rounded-[24px] p-9 shadow">
          <h3 className="text-3xl text-lmGrey800 drop-shadow-sm">Today</h3>
          <div className="flex w-full flex-col gap-y-3">
            {today.map((offer) => (
              <MobileOfferCard key={offer.offerId} offerInformation={offer} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-y-3 rounded-[24px] bg-white p-14 shadow">
          <h3 className="text-4xl text-lmGrey800 drop-shadow-sm">
            My Favorite
          </h3>
          <DesktopOfferCard offerInformation={favorite} />
        </div>
      </div>
    </div>
  );
};

export default HomepageMostViewed;
