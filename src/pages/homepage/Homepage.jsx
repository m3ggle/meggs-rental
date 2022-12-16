import React, { useEffect, useState } from "react";
import HomepageExplore from "./components/explore/HomepageExplore";
import HomepageFooter from "./components/footer/HomepageFooter";
import HomepageAbout from "./components/HomepageAbout";
import HomepageChat from "./components/HomepageChat";
import HomepageHero from "./components/HomepageHero";
import HomepageMostViewed from "./components/HomepageMostViewed";
import HomepageNavbar from "./components/navbar/HomepageNavbar";

const Homepage = () => {
  // const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   setDarkMode(document.documentElement.classList.contains("dark"));
  // }, []);

  return (
    <div className="relative flex w-full max-w-[1440px] flex-col overflow-hidden">
      <HomepageNavbar />
      <HomepageHero />
      <HomepageExplore />
      <HomepageChat />
      {/* <HomepageSearch /> */}
      {/* <HomepageSearchByCity /> */}
      <HomepageMostViewed />
      <HomepageAbout />
      <HomepageFooter />
    </div>
  );
};

export default Homepage;
