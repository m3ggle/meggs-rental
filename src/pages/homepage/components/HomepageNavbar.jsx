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
    "text-lmGrey600 cursor-pointer w-fit hover:text-lmGrey800 active:text-lmPrimary duration-300";

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
    <div className="fixed top-0 left-auto z-40 flex h-fit w-full max-w-[1440px] items-center justify-between border-b-2 border-lmGrey100/50 bg-white/80 py-4 px-14 backdrop-blur-lg dark:bg-dmGrey900/20">
      {/* logo */}
      <div className="flex w-60 cursor-pointer items-center gap-x-1">
        <div
          onClick={openModal}
          className={`h-14 w-14 rounded-full ${
            !loadedLogo && "bg-lmPrimary"
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
          className="text-lg text-lmGrey800"
        >
          Meggs Rental
        </span>
      </div>

      {/* links */}
      <div className="flex gap-x-6 text-lg text-lmGrey800">
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
      <div className="flex w-60 items-center justify-end gap-x-2">
        {signedIn ? (
          <>
            <span className="text-lg text-lmGrey800">
              {firstName} {lastName}
            </span>
            <img
              className="h-11 w-11 rounded-full bg-blue-200"
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
