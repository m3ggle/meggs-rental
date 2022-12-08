import React from "react";
import HomepageHero from "./components/HomepageHero";
import HomepageNavbar from "./components/HomepageNavbar";

const Homepage = () => {
  return (
    <div className="relative w-full flex flex-col">
      <HomepageNavbar />
      <HomepageHero />
    </div>
  );
};

export default Homepage;
