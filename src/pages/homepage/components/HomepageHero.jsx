import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../../../components/common/Btn";
import DesktopOfferCard from "../../../components/offerCard/nonResponsive/desktopOfferCard/DesktopOfferCard";
import MobileOfferCard from "../../../components/offerCard/nonResponsive/mobileOfferCard/MobileOfferCard";
import SpecialHomepageOfferCard from "../../../components/offerCard/nonResponsive/specialHomepageOfferCard/SpecialHomepageOfferCard";
import TabletOfferCard from "../../../components/offerCard/nonResponsive/tabletOfferCard/TabletOfferCard";
import ExampleData from "../../../ExampleData";
import { useWindowSize } from "../../../hooks/useWindowSize";
import {
  inViewContainerVariants,
  inViewItemVariants,
} from "../helper/HomepageAnimation";

const { exampleOffers } = ExampleData();

const HomepageHero = () => {
  const three = [exampleOffers[2], exampleOffers[4], exampleOffers[3]];

  const singleOffer = exampleOffers[0];

  const windowSize = useWindowSize();

  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/explore/catalog");
  };

  // animation
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, {
    once: true,
    margin:
      windowSize.width > 1200 ? "100px 0px -100px 0px" : "44px 0px -44px 0px",
  });

  return (
    <motion.div
      id="hero"
      ref={heroRef}
      initial="initial"
      animate={isInView && "animate"}
      transition="transition"
      variants={inViewContainerVariants}
      className="700:max-h-none relative flex h-screen max-h-[740px] w-full flex-col justify-center gap-y-8 bg-white py-16 px-6 dark:bg-dmGrey900 700:min-h-[1100px] 700:gap-y-6 700:py-[100px] 700:px-11 1200:h-screen 1200:min-h-0 1200:flex-row 1200:items-center 1200:justify-start 1200:px-14"
    >
      {/* text */}
      <div className="z-30 mt-14 flex w-full flex-col gap-y-5 700:mt-10 700:w-[712px] 700:gap-y-6 1200:mt-0 1200:ml-11 1200:gap-y-9">
        <h1 className="text-[40px] font-bold leading-[48px] -tracking-[1.2%] text-lmGrey900 drop-shadow dark:text-dmGrey25 700:text-[60px] 700:leading-[60px] 700:-tracking-[1.5%] 1200:text-[80px] 1200:leading-[80px] 1200:tracking-[1%]">
          Drive what you want, where and when you want!
        </h1>
        <h3 className="text-lg text-lmGrey800 drop-shadow-sm dark:text-dmGrey25 700:text-3xl 1200:text-4xl">
          Nisi facilisis mauris lacus sit arcu enim. Commodo faucibus tincidunt
          morbi risus imperdiet tincidunt.
        </h3>
        {windowSize.width > 700 ? (
          <button
            onClick={handleGetStarted}
            className="flex w-fit items-center justify-center gap-x-2 rounded-lg bg-lmPrimary py-3 px-4 text-lg font-semibold text-white shadow duration-300 hover:scale-101 hover:shadow-lg active:scale-99 active:shadow-sm dark:bg-dmPrimary dark:hover:bg-lmPrimary"
          >
            Get Started
            <i className="fa-solid fa-chevron-right text-[16px]" />
          </button>
        ) : (
          <div className="w-fit">
            <Btn
              type="button"
              uiType="primary"
              title="Get Started"
              onClick={handleGetStarted}
            />
          </div>
        )}
      </div>

      {/* imgs */}
      <div className="relative flex h-fit w-full flex-grow items-center justify-center 700:justify-start 1200:absolute 1200:right-[56px] 1200:h-[80%] 1200:w-[620px]">
        <motion.div
          variants={inViewItemVariants}
          className="absolute left-[20px] top-0 hidden opacity-40 1200:flex"
        >
          <TabletOfferCard offerInformation={singleOffer} index={0} />
        </motion.div>

        <motion.div
          variants={inViewItemVariants}
          style={{
            scale: windowSize.width >= 700 ? 1 : 0.5,
          }}
          className="absolute left-auto -top-12 z-20 700:left-[30%] 700:top-[120px] 1200:left-[160px] 1200:top-[135px]"
        >
          <SpecialHomepageOfferCard offerInformation={singleOffer} index={0} />
        </motion.div>

        <motion.div
          variants={inViewItemVariants}
          style={{
            scale: windowSize.width >= 700 ? 1 : 0.5,
          }}
          className="absolute -left-[124px] -top-[100px] opacity-80 700:-left-[44px] 700:top-0 1200:left-auto 1200:right-0 1200:top-[60px]"
        >
          <DesktopOfferCard offerInformation={singleOffer} index={0} />
        </motion.div>

        <motion.div
          variants={inViewItemVariants}
          style={{
            scale: windowSize.width >= 700 ? 1 : 0.5,
          }}
          className="absolute -top-[180px] -right-24 flex flex-col gap-y-2 700:left-[64%] 700:top-[60px] 700:w-[360px] 1200:top-auto 1200:-left-8 1200:-bottom-20"
        >
          <div className="">
            <MobileOfferCard offerInformation={exampleOffers[0]} index={0} />
          </div>
          <div className="opacity-60">
            <MobileOfferCard offerInformation={exampleOffers[1]} index={0} />
          </div>
          <div className="opacity-30">
            <MobileOfferCard offerInformation={exampleOffers[3]} index={0} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomepageHero;
