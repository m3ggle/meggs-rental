import React from "react";
import UserProfileSmall from "../../../../../../components/userProfile/UserProfileSmall";

const PreviewOwner = ({ owner }) => {
  const { first_name, last_name, user_name, profile_picture_url, owner_id } = owner;
  
  return (
    <div className="flex items-center py-2 px-1">
      <UserProfileSmall
        uid={owner_id}
        text={`${first_name} ${last_name}`}
        displayName={user_name}
        photoUrl={profile_picture_url}
      />
    </div>
  );
};

export default PreviewOwner;
