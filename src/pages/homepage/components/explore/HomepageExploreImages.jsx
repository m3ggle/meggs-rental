import React from "react";
import { useNavigate } from "react-router-dom";
import { useDarkModeContext } from "../../../../context/darkMode/darkModeContext";
import { homepageImgUrls } from "../../content/homepageImgUrls";

const HomepageExploreImages = () => {
  let { darkMode } = useDarkModeContext();
  const navigate = useNavigate();

  const {
    tabletExploreCatalog,
    tabletExploreCatalogDM,
    desktopExploreMap,
    desktopExploreMapDM,
  } = homepageImgUrls();

  return (
    <>
      <img
        aria-hidden={true}
        className="h-fit w-[55%] cursor-pointer opacity-0 drop-shadow-lg duration-300 hover:scale-101 active:scale-99 900:-left-[8%]"
        src={tabletExploreCatalog}
        alt="tablet"
      />

      <img
        onClick={() => navigate("/explore/catalog")}
        className="absolute -left-[6%] bottom-8 h-fit w-[50%] cursor-pointer drop-shadow-lg duration-300 hover:scale-101 active:scale-99 900:-left-[8%] 1200:bottom-[100px]"
        src={darkMode ? tabletExploreCatalogDM : tabletExploreCatalog}
        alt="tablet"
      />
      <img
        onClick={() => navigate("/explore/map")}
        className="absolute bottom-8 left-[45%] z-10 h-fit w-[84%] cursor-pointer drop-shadow-lg duration-300 hover:scale-101 active:scale-99 1200:bottom-[100px]"
        src={darkMode ? desktopExploreMapDM : desktopExploreMap}
        alt="desktop"
      />
    </>
  );
};

export default HomepageExploreImages;
