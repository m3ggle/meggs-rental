import React from "react";
import HomepageChat from "./components/HomepageChat";
import HomepageExplore from "./components/HomepageExplore";
import HomepageHero from "./components/HomepageHero";
import HomepageMostViewed from "./components/HomepageMostViewed";
import HomepageNavbar from "./components/HomepageNavbar";
import HomepageSearch from "./components/HomepageSearch";
import HomepageSearchByCity from "./components/HomepageSearchByCity";

const Homepage = () => {
  return (
    <div className="relative w-full flex flex-col overflow-hidden">
      <HomepageNavbar />
      <HomepageHero />
      <HomepageExplore />
      <HomepageChat />
      <HomepageSearch />
      <HomepageSearchByCity />
      <HomepageMostViewed />
    </div>
  );
};

export default Homepage;
