import React from "react";
import UserProfileHeader from "../../components/userProfile/UserProfileHeader";
import PageAuthChecker from "../../components/wrapper/PageAuthChecker";
import SignWrapper from "../../components/wrapper/SignWrapper";
import { useUserContext } from "../../context/user/userContext";
import ProfileButtonList from "./components/ProfileButtonList";
import { profileButtonListData } from "./data/profileButtonListData";

const Profile = () => {
  const {
    userId,
    profilePictureUrl,
    userName,
    isOnline,
    createdAt,
    lastOnline,
    firstName,
    lastName,
  } = useUserContext();
  const userData = {
    userId,
    profilePictureUrl,
    userName,
    isOnline,
    createdAt,
    lastOnline,
    firstName,
    lastName
  };

  return (
    <PageAuthChecker>
      {userId !== null && (
        <SignWrapper puffer={false} pic={profilePictureUrl}>
          <div className="relative flex h-screen max-h-screen w-full max-w-[348px] flex-col gap-y-3 overflow-hidden px-[2px]">
            <UserProfileHeader userProfileData={userData} />
            <ProfileButtonList profileButtonList={profileButtonListData} />
            <div className="absolute bottom-0 h-12 w-full bg-gradient-to-t from-white dark:from-dmGrey900" />
          </div>
        </SignWrapper>
      )}
    </PageAuthChecker>
  );
};

export default Profile;


/*
[{"user_id":"0f3b3bd3-5dc0-448a-b21e-ec3276d30ee4","first_name":"Maria","last_name":"Bierhoff","profile_picture_url":"https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/public/user-avatars/profileMariaBierhoff.webp","rating":5,"comment":"Renting from this owner was a great experience! The car was exactly as described and worked perfectly for our needs. The owner was very easy to communicate with and made the whole process very smooth. We would definitely rent from them again!"},{"user_id":"27f0c536-05b9-4551-8c7c-829a87d628f5","first_name":"Nele","last_name":"Langrock","profile_picture_url":"https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/public/user-avatars/profileNeleLangrock.webp","rating":3,"comment":"It is very reliable, but sometimes I was scared that it would break down. I think  I am going to rent it again."},{"user_id":"4c424056-4371-4624-994f-2ec2d7595b35","first_name":"Alina","last_name":"Mertens","profile_picture_url":"https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/public/user-avatars/profileAlinaMertens.webp","rating":4,"comment":"I am not a car person, but this car was a good rent for the price. The owner was reliable and the car was comfortable. I would recommend this car to anyone."},{"user_id":"65a15d09-e39c-42f8-82d4-6db975952736","first_name":"Gustavo","last_name":"Bravo","profile_picture_url":"https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/public/user-avatars/profileGustavoBravo.webp","rating":4,"comment":"I have rented the car a few times and have had a lovely experience each time. The car is comfortable and the owner are friendly and helpful. I would definitely recommend renting from this company."}]
*/