import React from "react";
import { useNavigate } from "react-router-dom";
import LazyImage from "../../../../components/LazyImage";
import { useDarkModeContext } from "../../../../context/darkMode/darkModeContext";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import { homepageImgUrls } from "../../content/homepageImgUrls";

const HomepageExploreImages = () => {
  let { darkMode } = useDarkModeContext();
  const navigate = useNavigate();
  const windowWidth = useWindowSize().width;

  const {
    tabletExploreCatalog,
    tabletExploreCatalogDM,
    desktopExploreMap,
    desktopExploreMapDM,
  } = homepageImgUrls();

  return (
    <>
      {/* <img
        aria-hidden={true}
        className="h-fit w-[55%] cursor-pointer opacity-0 drop-shadow-lg duration-300 hover:scale-101 active:scale-99 900:-left-[8%]"
        src={tabletExploreCatalog}
        alt="tablet"
        loading="lazy"
      /> */}
      <LazyImage
        ariaHidden={true}
        src={tabletExploreCatalog}
        alt="tablet puffer"
        width={
          windowWidth > 1200 ? "720px" : windowWidth > 1000 ? "500px" : "200px"
        }
        height={
          windowWidth > 1200 ? "520px" : windowWidth > 1000 ? "360px" : "144px"
        }
        className="h-fit w-[55%] cursor-pointer opacity-0 drop-shadow-lg duration-300 hover:scale-101 active:scale-99 900:-left-[8%]"
        onClick={() => navigate("/explore/catalog")}
      />

      {/* <img
        onClick={() => navigate("/explore/catalog")}
        className="absolute -left-[6%] bottom-8 h-fit w-[50%] cursor-pointer drop-shadow-lg duration-300 hover:scale-101 active:scale-99 900:-left-[8%] 1200:bottom-[100px]"
        src={darkMode ? tabletExploreCatalogDM : tabletExploreCatalog}
        alt="tablet"
        loading="lazy"
      /> */}
      <LazyImage
        src={darkMode ? tabletExploreCatalogDM : tabletExploreCatalog}
        alt="tablet"
        width={
          windowWidth > 1200 ? "720px" : windowWidth > 1000 ? "500px" : "200px"
        }
        height={
          windowWidth > 1200 ? "520px" : windowWidth > 1000 ? "360px" : "144px"
        }
        className="absolute -left-[6%] bottom-8 h-fit w-[50%] cursor-pointer drop-shadow-lg duration-300 hover:scale-101 active:scale-99 900:-left-[8%] 1200:bottom-[100px]"
        onClick={() => navigate("/explore/catalog")}
      />
      <LazyImage
        src={darkMode ? desktopExploreMapDM : desktopExploreMap}
        alt="desktop"
        width={
          windowWidth > 1200 ? "1210px" : windowWidth > 1000 ? "820px" : "336px"
        }
        height={
          windowWidth > 1200 ? "695px" : windowWidth > 1000 ? "482px" : "192px"
        }
        className="absolute bottom-8 left-[45%] z-10 h-fit w-[84%] cursor-pointer drop-shadow-lg duration-300 hover:scale-101 active:scale-99 1200:bottom-[100px]"
        onClick={() => navigate("/explore/map")}
      />
      {/* <img
        onClick={() => navigate("/explore/map")}
        className="absolute bottom-8 left-[45%] z-10 h-fit w-[84%] cursor-pointer drop-shadow-lg duration-300 hover:scale-101 active:scale-99 1200:bottom-[100px]"
        src={darkMode ? desktopExploreMapDM : desktopExploreMap}
        alt="desktop"
        loading="lazy"
      /> */}
    </>
  );
};

export default HomepageExploreImages;
