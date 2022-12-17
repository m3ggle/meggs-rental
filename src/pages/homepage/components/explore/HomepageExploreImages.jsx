import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import DesktopExploreMap from "../../../../assets/img/desktopExploreMap.webp";
import DesktopExploreMapDM from "../../../../assets/img/desktopExploreMapDM.webp";
import TabletExploreCatalog from "../../../../assets/img/tabletExploreCatalog.webp";
import TabletExploreCatalogDM from "../../../../assets/img/tabletExploreCatalogDM.webp";
import { useDarkModeContext } from "../../../../context/darkMode/darkModeContext";

const HomepageExploreImages = ({isInView }) => {
  let { darkMode } = useDarkModeContext();
  const navigate = useNavigate();

  // console.log(isInView)

  return (
    <>
      <img
        aria-hidden={true}
        className="h-fit w-[55%] cursor-pointer opacity-0 drop-shadow-lg duration-300 hover:scale-101 active:scale-99 900:-left-[8%]"
        src={TabletExploreCatalog}
        alt="tablet"
      />

      {isInView && (
        <>
          <motion.img
            // initial={{ opacity: 0, translateY: 100 }}
            // animate={{ opacity: 1, translateY: 0 }}
            // transition={{ duration: 0.3, ease: "easeInOut", delay: 1 }}
            onClick={() => navigate("/explore/catalog")}
            className="absolute -left-[6%] bottom-8 h-fit w-[50%] cursor-pointer drop-shadow-lg duration-300 hover:scale-101 active:scale-99 900:-left-[8%] 1200:bottom-[100px]"
            src={darkMode ? TabletExploreCatalogDM : TabletExploreCatalog}
            alt="tablet"
          />
          <motion.img
            // initial={{ opacity: 0, translateY: 100 }}
            // animate={{ opacity: 1, translateY: 0 }}
            // transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={() => navigate("/explore/map")}
            className="absolute bottom-8 left-[45%] z-10 h-fit w-[84%] cursor-pointer drop-shadow-lg duration-300 hover:scale-101 active:scale-99 1200:bottom-[100px]"
            src={darkMode ? DesktopExploreMapDM : DesktopExploreMap}
            alt="desktop"
          />
        </>
      )}
    </>
  );
};

export default HomepageExploreImages;
