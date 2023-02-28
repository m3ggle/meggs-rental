import React from "react";

const HomepageSocial = ({ icon, linkTo }) => {
  icon = icon ?? "fa-brands fa-instagram";

  return (
    <a href={linkTo} target="_blank" rel="noopener noreferrer">
      <div className="flex w-14 h-14 700:h-[88px] 700:w-[88px] items-center justify-center rounded-full bg-lmGrey800 shadow dark:bg-dmGrey800 cursor-pointer dark:shadow-dmShadow">
        <i className={`${icon} text-[20px] 700:text-[36px] text-lmGrey25`} />
      </div>
    </a>
  );
};

export default HomepageSocial;
