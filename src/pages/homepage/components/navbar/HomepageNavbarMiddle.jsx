import React from "react";
import ExampleData from "../../../../data/dataCollection";
import { smoothScroll } from "../../../../hooks/useSmoothScroll";

const HomepageNavbarMiddle = () => {
  const { navbarLinks } = ExampleData();

  return (
    <div className="hidden gap-x-6 text-lg text-lmGrey800 dark:text-dmGrey25 1100:flex">
      {navbarLinks.map((navLink, index) => (
        <span
          key={index}
          onClick={() => smoothScroll(navLink.linkTo)}
          className="w-fit cursor-pointer text-lmGrey600 duration-300 hover:text-lmGrey800 active:text-lmPrimary dark:text-dmGrey100 dark:hover:text-dmGrey25 dark:active:text-dmPrimary"
        >
          {navLink.name}
        </span>
      ))}
    </div>
  );
};

export default HomepageNavbarMiddle;
