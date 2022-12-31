import React from "react";
import ProfileButton from "./ProfileButton";

const ProfileButtonList = ({ profileButtonList }) => {
  return (
    <div className="hideScrollbar flex flex-col gap-y-4 overflow-scroll px-[2px] pt-3 pb-12">
      {profileButtonList.map((section, sectionIndex) => (
        <div className="flex flex-col gap-y-2" key={sectionIndex}>
          <span className="border-b-text-dmGrey100 px-[2px] text-sm font-semibold text-lmGrey400 dark:text-dmGrey100">
            {section.sectionTitle}
          </span>
          <div className="flex flex-col gap-y-2">
            {section.buttons.map((button) => (
              <ProfileButton key={button.id} information={button} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileButtonList;
