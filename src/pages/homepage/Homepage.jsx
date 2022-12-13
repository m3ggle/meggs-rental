import React, { useEffect, useState } from "react";
import HomepageFooter from "./components/footer/HomepageFooter";
import HomepageAbout from "./components/HomepageAbout";
import HomepageChat from "./components/HomepageChat";
import HomepageExplore from "./components/HomepageExplore";
import HomepageHero from "./components/HomepageHero";
import HomepageMostViewed from "./components/HomepageMostViewed";
import HomepageNavbar from "./components/HomepageNavbar";
import HomepageSearch from "./components/HomepageSearch";

const Homepage = ({openModal}) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
      setDarkMode(document.documentElement.classList.contains("dark"));
    }, []);
  
  return (
    <div className="relative flex w-full max-w-[1440px] flex-col overflow-hidden">
      <HomepageNavbar openModal={openModal} />
      <HomepageHero />
      <HomepageExplore darkMode={darkMode} />
      <HomepageChat darkMode={darkMode} />
      {/* <HomepageSearch /> */}
      {/* <HomepageSearchByCity /> */}
      <HomepageMostViewed />
      <HomepageAbout />
      <HomepageFooter darkMode={darkMode} />
    </div>
  );
};

export default Homepage;
