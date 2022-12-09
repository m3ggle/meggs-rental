import React from "react";

const HomepageSocial = ({ icon }) => {
  icon = icon ?? "fa-brands fa-instagram";

  return (
    <div className="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-lmGrey800">
      <i className={`${icon} text-[36px] text-lmGrey25`} />
    </div>
  );
};

export default HomepageSocial;
