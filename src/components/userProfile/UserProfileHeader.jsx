import { formatRelative } from "date-fns";
import React from "react";
import { useLocation } from "react-router-dom";
import { useUserDetailsModalContext } from "../../context/userDetailsModal/userDetailsModalContext";

const UserProfileHeader = ({ userProfileData = {}, modal = false }) => {
  const {
    userId,
    profilePictureUrl,
    userName,
    isOnline,
    lastOnline,
    firstName, 
    lastName 
  } = userProfileData;

  const { openUserDetailsModal } = useUserDetailsModalContext();
  const locationPath = useLocation().pathname;

  const handleClick = () => {
    if (locationPath === "/profile") {
      console.log("choose a image as your new profile pic");
      return;
    }
    if (!modal) openUserDetailsModal(userId);
  };

  return (
    <div
      onClick={handleClick}
      className="flex w-full cursor-pointer flex-col items-center gap-y-2"
    >
      <div
        className="h-[84px] w-[84px] overflow-hidden rounded-full bg-cover bg-center shadow"
        style={{ backgroundImage: `url(${profilePictureUrl})` }}
      >
        {(locationPath === "/profile" && !modal) && (
            <i className="fa-solid fa-camera flex h-full w-full items-center justify-center bg-lmGrey900/20 text-[28px] text-lmGrey100/60 duration-300 hover:bg-lmGrey900/60 hover:text-lmGrey25" />
          )}
      </div>
      <div className="flex w-full flex-col items-center gap-y-[2px]">
        <span className="text-lg text-lmGrey800 dark:text-dmGrey25">
          @{userName}
        </span>
        <div className="flex w-full flex-col items-center justify-center gap-y-0">
          <span className="text-base text-lmGrey600 dark:text-dmGrey100">
            {firstName} {lastName}
          </span>
          <span className="text-base text-lmGrey600 dark:text-dmGrey100">
            {isOnline
              ? "Currently online"
              : `last seen: ${formatRelative(
                  new Date(lastOnline),
                  new Date()
                )}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserProfileHeader;

/*
{"user_id":"65a15d09-e39c-42f8-82d4-6db975952736",
"personal_information_id":"23f50bf5-7a25-4b9f-a040-cc853da0bde4",
"preferred_city_id":"c3ff12d6-54fc-4b10-a21b-670c22840e4c",
"email":"shaina.bahringer@hotmail.com",
"user_name":"gustavy",
"status":"active",
"profile_picture_url":"https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/public/user-avatars/profileGustavoBravo.webp",
"is_online":false
"last_online":"2023-01-15T13:43:07.823139+00:00"
"created_at":"2023-01-15T13:43:07.823139+00:00"
"email_confirmed":true
"phone_confirmed":true
"phone":null
"first_name":"Gustavo"
"last_name":"Bravo"
"bio":"I rather take my bike or the OVP to the Uni so I don’t really have a need for my cars. If you like any of my offer(s)
 don’t be scared to send me a Message 😊."}
*/