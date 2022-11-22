import React from 'react'
import ProfileButton from './ProfileButton';

const ProfileButtonList = ({ profileButtonList }) => {
  return (
    <div className="flex flex-col gap-y-2 py-3">
      {profileButtonList.map((propData, index) => (
        <ProfileButton
          key={index}
          btnTitle={propData.btnTitle}
          icon={propData.icon}
          link={propData.link}
          onClickCallback={propData.callback}
        />
      ))}
    </div>
  );
};

export default ProfileButtonList