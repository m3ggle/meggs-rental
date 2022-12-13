import React from "react";

const HomepageFooterGradient = ({ darkMode }) => {
  return (
    <div
      className={`absolute -top-1 left-0 z-10 min-h-[488px] min-w-full rounded-lg ${
        darkMode
          ? "bg-gradient-to-b from-dmGrey900  via-dmGrey900/80"
          : "bg-gradient-to-b from-white"
      }`}
    />
  );
};

export default HomepageFooterGradient;
