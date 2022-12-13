import Spline from "@splinetool/react-spline";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../../../components/common/Btn";
import ExampleData from "../../../ExampleData";

const HomepageNavbar = ({ openModal }) => {
  const [signedIn] = useState(false);
  const [loadedLogo, setLoadedLogo] = useState(false);
  const handleLoad = () => setLoadedLogo(true);

  const { userProfileBig } = ExampleData();
  const { photoUrl, firstName, lastName } = userProfileBig;

  const navigate = useNavigate();
  const handleSignInClick = () => navigate("/sign-in");

  const smoothScroll = (linkTo) => {
    document.getElementById(linkTo).scrollIntoView({
      behavior: "smooth",
    });
  };

  const textInTheFooter =
  "text-lmGrey600 dark:text-dmGrey100 cursor-pointer w-fit hover:text-lmGrey800 dark:hover:text-dmGrey25 hover:text-dmGrey25 active:text-lmPrimary dark:active:text-dmPrimary duration-300";
  
  const navbarLinks = [
    {
      name: "Explore",
      linkTo: "explore",
    },
    {
      name: "Chat",
      linkTo: "chat",
    },
    {
      name: "Search",
      linkTo: "directSearch",
    },
    {
      name: "Most Viewed",
      linkTo: "mostViewed",
    },
    {
      name: "About",
      linkTo: "about",
    },
  ];

  return (
    <div className="fixed -top-1 left-auto z-40 flex h-fit w-full max-w-[1440px] items-center justify-between border-b-2 border-lmGrey100/50 bg-white/80 py-4 px-6 backdrop-blur-lg dark:border-dmGrey800/10 dark:bg-dmGrey900/80 700:px-11 1200:px-14">
      {/* logo */}
      <div className="flex w-fit cursor-pointer items-center gap-x-1 700:w-60">
        <div
          onClick={openModal}
          className={`h-14 w-14 rounded-full ${
            !loadedLogo && "bg-lmPrimary dark:bg-dmPrimary"
          } duration-300`}
        >
          <Spline
            onLoad={handleLoad}
            className="z-10"
            scene="https://prod.spline.design/og6CZMxsQfdlo-uE/scene.splinecode"
          />
        </div>
        <span
          onClick={() => smoothScroll("hero")}
          className="text-lg text-lmGrey800 dark:text-dmGrey25"
        >
          Meggs Rental
        </span>
      </div>

      {/* links */}
      <div className="hidden gap-x-6 text-lg text-lmGrey800 dark:text-dmGrey25 1100:flex">
        {navbarLinks.map((navLink, index) => (
          <span
            key={index}
            onClick={() => smoothScroll(navLink.linkTo)}
            className={textInTheFooter}
          >
            {navLink.name}
          </span>
        ))}
      </div>

      {/* user */}
      <div className="flex w-fit items-center justify-end gap-x-2 700:w-60">
        {signedIn ? (
          <>
            <span className="text-lg text-lmGrey800 dark:text-dmGrey25">
              {firstName} {lastName}
            </span>
            <img
              className="h-11 w-11 rounded-full bg-blue-200 dark:bg-blue-800"
              src={photoUrl}
              alt="user profile"
            />
          </>
        ) : (
          <div className="w-fit">
            <Btn
              title="Sign In"
              uiType="primary"
              type="button"
              icon="fa-solid fa-chevron-right"
              onClick={handleSignInClick}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomepageNavbar;
