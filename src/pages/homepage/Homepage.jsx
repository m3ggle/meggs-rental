import React from "react";
import HomepageFooter from "./components/footer/HomepageFooter";
import HomepageAbout from "./components/HomepageAbout";
import HomepageChat from "./components/HomepageChat";
import HomepageExplore from "./components/HomepageExplore";
import HomepageHero from "./components/HomepageHero";
import HomepageMostViewed from "./components/HomepageMostViewed";
import HomepageNavbar from "./components/HomepageNavbar";
import HomepageSearch from "./components/HomepageSearch";

const Homepage = ({openModal}) => {
  return (
    <div className="relative flex w-full flex-col overflow-hidden max-w-[1440px]">
      <HomepageNavbar openModal={openModal} />
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
