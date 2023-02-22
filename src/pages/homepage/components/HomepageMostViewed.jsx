import React from "react";
import Btn from "../../../components/common/Btn";
import DesktopOfferCard from "../../../components/offerCard/nonResponsive/desktopOfferCard/DesktopOfferCard";
import MobileOfferCard from "../../../components/offerCard/nonResponsive/mobileOfferCard/MobileOfferCard";
import SpecialHomepageOfferCard from "../../../components/offerCard/nonResponsive/specialHomepageOfferCard/SpecialHomepageOfferCard";
import TabletOfferCard from "../../../components/offerCard/nonResponsive/tabletOfferCard/TabletOfferCard";
import ExampleData from "../../../ExampleData";
import { homepageImgUrls } from "../content/homepageImgUrls";

const { exampleOffers } = ExampleData();

const HomepageMostViewed = () => {
  const week = exampleOffers[3];
  const month = exampleOffers[0];
  const favorite = exampleOffers[1];
  const today = [exampleOffers[4], exampleOffers[5], exampleOffers[6]];

  const { chameleon } = homepageImgUrls();

  return (
    <div
      id="mostViewed"
      className="hideScrollbar flex w-full flex-col items-center gap-x-6 gap-y-6 overflow-x-scroll bg-white py-10 dark:bg-dmGrey900 1200:py-14"
    >
      <div className="flex w-full flex-col gap-y-6 px-6 700:hidden">
        <h2 className="text-4xl font-semibold -tracking-[1.2%] text-lmGrey800 drop-shadow dark:text-dmGrey25 700:text-[40px] 700:leading-[40px] 1200:text-5xl">
          Most Viewed
        </h2>
        <span className="w-[297px] text-lg text-lmGrey800 drop-shadow-sm dark:text-dmGrey25 700:text-xl 1200:text-2xl">
          Here are the best offers for you in different timespans. If you want
          to see more then open the full page
        </span>
        <div className="w-fit">
          <Btn uiType="primary" type="button" title="Open Full Page" />
        </div>
      </div>

      <div className="hideScrollbar flex w-full items-center gap-x-6 overflow-x-scroll py-1 1200:flex-col 1200:gap-y-6 1200:py-0">
        <div className="flex flex-row-reverse gap-x-6 py-1 1200:flex-row 1200:items-end">
          <div className="flex h-fit flex-col  gap-y-3 rounded-[24px] p-9 shadow dark:shadow-dmShadow">
            <h3 className="text-2xl text-lmGrey800 drop-shadow-sm dark:text-dmGrey25 1200:text-3xl">
              This Week
            </h3>
            <TabletOfferCard offerInformation={week} index={0} />
          </div>

          <div className="flex flex-col gap-y-3 rounded-[24px] bg-white p-14 shadow dark:bg-dmGrey900 dark:shadow-dmShadow">
            <h3 className="text-3xl text-lmGrey800 dark:text-dmGrey25 1200:text-4xl">
              This Month
            </h3>
            <SpecialHomepageOfferCard offerInformation={month} />
          </div>

          <div className="hidden w-fit flex-col gap-y-3 p-12 700:flex 1200:justify-center">
            <h2 className="text-4xl font-semibold -tracking-[1.2%] text-lmGrey800 drop-shadow dark:text-dmGrey25 700:text-[40px] 700:leading-[40px] 1200:text-5xl">
              Most Viewed
            </h2>
            <span className="w-[297px] text-lg text-lmGrey800 drop-shadow-sm dark:text-dmGrey25 700:text-xl 1200:text-2xl">
              Here are the best offers for you in different timespans. If you
              want to see more then open the full page
            </span>
            <div className="w-fit">
              <Btn uiType="primary" type="button" title="Open Full Page" />
            </div>
          </div>
        </div>

        <div className="flex items-start gap-x-6 py-1">
          <div className="relative hidden h-[457px] w-[312px] rounded-[24px] shadow dark:shadow-dmShadow 1200:flex">
            <img
              className="absolute bottom-0 right-0 h-[335px] min-w-fit"
              src={chameleon}
              alt="Chameleon"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col gap-y-3 rounded-[24px] p-9 shadow dark:shadow-dmShadow">
            <h3 className="text-2xl text-lmGrey800 drop-shadow-sm dark:text-dmGrey25 1200:text-3xl">
              Today
            </h3>
            <div className="flex w-full flex-col gap-y-3">
              {today.map((offer) => (
                <MobileOfferCard key={offer.id} offerInformation={offer} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-y-3 rounded-[24px] bg-white p-14 shadow dark:bg-dmGrey900 dark:shadow-dmShadow">
            <h3 className="text-3xl text-lmGrey800 drop-shadow-sm dark:text-dmGrey25 1200:text-4xl">
              My Favorite
            </h3>
            <DesktopOfferCard offerInformation={favorite} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageMostViewed;
