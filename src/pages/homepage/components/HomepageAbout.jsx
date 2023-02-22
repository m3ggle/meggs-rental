import React from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { homepageImgUrls } from "../content/homepageImgUrls";
import HomepageComment from "./HomepageComment";
import HomepageSocial from "./HomepageSocial";

const HomepageAbout = () => {
  const windowSize = useWindowSize();

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
          <img
            className="h-[60px] w-[60px] rounded-full bg-blue-200 bg-cover bg-center 700:h-[88px] 700:w-[88px] 700:min-w-[88px]"
            src={profileGustavoBravo}
            alt="profile"
          />
          <div className="w-full max-w-[480px] rounded-[24px] bg-white p-6 shadow dark:bg-dmGrey900 dark:shadow-dmShadow">
            <span className="text-base text-lmGrey600 dark:text-dmGrey100 700:text-xl">
              Congue egestas tempus id habitasse et quam netus rhoncus. Vitae
              enim euismod morbi varius consequat interdum sit phasellus in.
              Ipsum semper tempus arcu odio eu eros nunc. Morbi id id at
              ullamcorper viverra.{" "}
              <span className="dark:dmPrimary block text-lmPrimary">
                ~ Gustavo Bravo, CEO
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="hidden w-full items-center justify-center py-6 1000:flex">
        <img src={croppedBMW} alt="cropped bmw" loading="lazy" />
      </div>

      <div className="absolute bottom-[120px] left-8 z-10 w-fit 400:bottom-[140px] 400:left-14 700:bottom-[120px] 700:left-[160px]">
        <HomepageComment
          photoURL={profileNeleLangrock}
          comment="Augue fringilla viverra id tristique malesuada cras urna."
          association="Nele Langrock, Co-Founder"
          commentWidth="360px"
        />
      </div>

      <div className="absolute right-[0%] top-[440px] z-10 w-fit opacity-50 500:top-[360px] 500:right-[24%] 700:top-[420px] 1200:right-[40%] 1200:top-[500px]">
        <HomepageComment
          photoURL={profileMariaBierhoff}
          comment="Sapien ac risus amet lectus. A pulvinar mauris ultricies duis mus in. Nunc mollis praesent et."
          association="Maria Bierhoff"
          commentWidth={windowSize.width > 600 ? "400px" : "320px"}
        />
      </div>

      <div className="absolute top-[600px] right-0 z-10 w-fit opacity-90 400:bottom-auto 400:top-[580px] 1000:bottom-auto 1000:top-[280px] 1000:right-auto 1000:left-[640px]">
        <HomepageComment
          photoURL={profileAlinaMertens}
          comment="Urna, arcu augue placerat facilisis elit enim. "
          association="Alina Mertens"
          commentWidth="240px"
        />
      </div>

      <div className="absolute bottom-[200px] right-[132px] z-10 hidden w-fit 1200:flex">
        <HomepageComment
          photoURL={profileGustavoBravo}
          comment="Pharetra tellus proin aenean diam metus, morbi. Dignissim malesuada blandittincidunt."
          association="Gustavo Bravo, CEO"
          commentWidth="360px"
        />
      </div>

      <div className="absolute -top-10 left-[68%] w-fit opacity-70 400:top-[4%]">
        <HomepageSocial
          icon="fa-brands fa-github"
          linkTo="https://github.com/Huhu436"
        />
      </div>

      <div className="absolute -bottom-10 right-[60px] z-20 w-fit opacity-40 500:bottom-auto 500:right-auto 500:top-[420px] 500:left-[12px] ">
        <HomepageSocial
          icon="fa-brands fa-instagram"
          linkTo="https://www.instagram.com/m1ggle/?hl=de"
        />
      </div>

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