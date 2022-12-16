import React from "react";

const HomepageSocial = ({ icon, linkTo }) => {
  icon = icon ?? "fa-brands fa-instagram";

  return (
    <a href={linkTo} target="_blank" rel="noopener noreferrer">
      <div className="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-lmGrey800 shadow dark:bg-dmGrey800 dark:shadow-dmShadow">
        <i className={`${icon} text-[36px] text-lmGrey25`} />
      </div>
    </a>
  );
};

export default HomepageSocial;
