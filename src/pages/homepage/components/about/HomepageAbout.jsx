import React from "react";
import LazyImage from "../../../../components/LazyImage";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import { homepageImgUrls } from "../../content/homepageImgUrls";
import HomepageComment from "../HomepageComment";
import HomepageSocial from "../HomepageSocial";
import FadingAnimation from "./FadingAnimation";

const HomepageAbout = () => {
  const windowWidth = useWindowSize().width;

  const {
    croppedBMW,
    profileNeleLangrock,
    profileGustavoBravo,
    profileAlinaMertens,
    profileMariaBierhoff,
  } = homepageImgUrls();

  return (
    <div
      id="about"
      className="relative flex h-[1000px] w-full gap-x-6 bg-white px-6 py-10 dark:bg-dmGrey900 700:px-11 1000:h-fit 1200:py-14 1200:px-14"
    >
      <div className="flex w-full flex-col items-start gap-y-6 1000:items-center">
        <h2 className="text-4xl font-semibold -tracking-[1.2%] text-lmGrey800 drop-shadow  dark:text-dmGrey25 700:text-[40px] 700:leading-[40px] 1200:text-5xl">
          Our Vision
        </h2>
        <div className="flex w-full gap-x-3">
          <LazyImage
            src={profileGustavoBravo}
            alt="comment"
            width={windowWidth > 700 ? "88px" : "60px"}
            height={windowWidth > 700 ? "88px" : "60px"}
            className="h-[60px] w-[60px] rounded-full bg-lmGrey200 object-cover object-center shadow 700:h-[88px] 700:w-[88px]"
          />
          <div className="w-full max-w-[480px] rounded-[24px] bg-white p-6 shadow dark:bg-dmGrey900 dark:shadow-dmShadow">
            <span className="text-base text-lmGrey600 dark:text-dmGrey100 700:text-xl">
              Megg's Rental is a game-changer. I've made several successful
              transactions and highly recommend it to anyone looking to rent or
              lend their car.{" "}
              <span className="dark:dmPrimary block text-lmPrimary">
                ~ Gustavo Bravo, CEO
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="hidden w-full items-center justify-center py-6 1000:flex">
        <LazyImage
          src={croppedBMW}
          alt="cropped bmw"
          width={windowWidth > 1200 ? "652px" : "455px"}
          height={windowWidth > 1200 ? "712px" : "500px"}
          className="h-full w-full"
        />
      </div>
      {/* <FadingAnimation duration={6} delay={4}> */}
      <div className="absolute bottom-[100px] left-8 z-10 w-fit 400:left-14 700:bottom-[120px] 700:left-[160px]">
        <HomepageComment
          photoURL={profileNeleLangrock}
          comment="Megg's Rental made the process incredibly easy and stress-free. I now make extra money while my car is idle, and I couldn't be happier!"
          association="Nele Langrock, Co-Founder"
          commentWidth="360px"
        />
      </div>
      {/* </FadingAnimation> */}
      {/* <FadingAnimation duration={8} delay={2}> */}
      <div className="absolute right-[0%] top-[360px] z-10 w-fit opacity-50 500:top-[360px] 500:right-[24%] 700:top-[420px] 1000:right-[50%] 1000:top-[300px] 1200:right-[40%] 1200:top-[500px]">
        <HomepageComment
          photoURL={profileMariaBierhoff}
          comment="Megg's Rental is a fantastic solution for anyone who wants to rent a car or lend theirs. It has saved me time and money."
          association="Maria Bierhoff"
          commentWidth={windowWidth > 600 ? "400px" : "320px"}
        />
      </div>
      {/* </FadingAnimation> */}
      {/* <FadingAnimation duration={5} delay={10}> */}
      <div className="absolute top-[540px] right-0 z-10 w-fit opacity-90 400:bottom-auto 400:top-[520px] 1000:bottom-auto 1000:top-[280px] 1000:right-auto 1000:left-[640px]">
        <HomepageComment
          photoURL={profileAlinaMertens}
          comment="Megg's Rental has changed the way I think about car ownership. I would recommend it to anyone who wants to make the most out of their unused car."
          association="Alina Mertens"
          commentWidth="240px"
        />
      </div>
      {/* </FadingAnimation> */}
      {/* <FadingAnimation duration={10} delay={10}> */}
      <div className="absolute bottom-[200px] right-[132px] z-10 hidden w-fit 1200:flex">
        <HomepageComment
          photoURL={profileGustavoBravo}
          comment="Megg's Rental helped me earn extra income during the pandemic by renting out my car to other users on the platform."
          association="Gustavo Bravo, CEO"
          commentWidth="360px"
        />
      </div>
      {/* </FadingAnimation> */}
      <div className="absolute -top-10 left-[68%] w-fit opacity-70 400:top-[4%]">
        <HomepageSocial
          icon="fa-brands fa-github"
          linkTo="https://github.com/m3ggle"
        />
      </div>
      {/* <FadingAnimation> */}
      <div className="absolute -bottom-10 right-[60px] z-20 w-fit opacity-40 500:bottom-auto 500:right-auto 500:top-[420px] 500:left-[12px] ">
        <HomepageSocial
          icon="fa-brands fa-instagram"
          linkTo="https://www.instagram.com/m1ggle/?hl=de"
        />
      </div>
      {/* </FadingAnimation> */}
      <div className="absolute -bottom-10 right-[144px] z-20 hidden w-fit opacity-20 400:bottom-6 500:flex 1000:right-auto 1000:bottom-[52px] 1000:left-[528px]">
        <HomepageSocial
          icon="fa-brands fa-youtube"
          linkTo="https://www.youtube.com/channel/UCT7kpZCPvEWuAQSHu4EJDsA"
        />
      </div>
    </div>
  );
};

export default HomepageAbout;
