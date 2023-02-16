import { Dialog } from "@headlessui/react";
import React from "react";
import Loading from "../../components/Loading";
import ReviewSection from "../../components/ratings/ReviewSection";
import UserDetailsModalOffer from "../../components/userProfile/UserDetailsModalOffer";
import UserProfileHeader from "../../components/userProfile/UserProfileHeader";
import { useGetUserOffers } from "../../hooks/useGetUserOffers";
import { useGetUserReviews } from "../../hooks/useGetUserReviews";
import { useGetUserSummary } from "../../hooks/useGetUserSummary";
import { useGetUserWithPersonalInformation } from "../../hooks/useGetUserWithPersonalInformation";

const UserDetails = ({ userId, closeModal }) => {
  const { userWithPersonal, isLoading: userPersonalLoading } =
    useGetUserWithPersonalInformation(userId);
  const { userOffers, isLoading: userOffersLoading } = useGetUserOffers(
    userId,
    3
  );
  const { userReviews, isLoading: userReviewsLoading } = useGetUserReviews(
    userId,
    10
  );
  const { userSummary, isLoading: userSummaryLoading } =
    useGetUserSummary(userId);

  const reviewSection = {
    summary: userSummary,
    reviews: userReviews,
    summaryLoading: userSummaryLoading,
    reviewsLoading: userReviewsLoading,
  };

  return (
    <>
      {userPersonalLoading ||
      userOffersLoading ||
      userReviewsLoading ||
      userSummaryLoading ? (
        <Loading />
      ) : (
        <div className="flex w-full max-w-[472px] flex-col items-center justify-center gap-y-6">
          <div className="flex flex-col gap-4">
            <UserProfileHeader
              userProfileData={{
                userId: userWithPersonal.user_id,
                profilePictureUrl: userWithPersonal.profile_picture_url,
                userName: userWithPersonal.user_name,
                isOnline: userWithPersonal.is_online,
                lastOnline: userWithPersonal.last_online,
                firstName: userWithPersonal.first_name,
                lastName: userWithPersonal.last_name,
              }}
              modal={true}
            />
            <Dialog.Description className="text-sm text-lmGrey600 dark:text-dmGrey100">
              {userWithPersonal.bio}
            </Dialog.Description>
          </div>
          <UserDetailsModalOffer offers={userOffers} closeModal={closeModal} />
          {userReviews.length > 0 && <ReviewSection reviewSection={reviewSection} />}
        </div>
      )}
    </>
  );
};

export default UserDetails;
