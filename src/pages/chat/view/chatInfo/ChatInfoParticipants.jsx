import { formatRelative } from "date-fns";
import React from "react";
import Loading from "../../../../components/Loading";
import UserProfileSmall from "../../../../components/userProfile/UserProfileSmall";

const ChatInfoParticipants = ({ chatParticipants, participantsIsLoading }) => {
  console.log(chatParticipants);
  return (
    <div className="flex flex-col gap-y-2">
      <span className="text-lg text-lmGrey600 dark:text-dmGrey100">
        Participants
      </span>
      {participantsIsLoading ? (
        <Loading />
      ) : (
        <>
          <UserProfileSmall
            text={`
                ${
                  chatParticipants.owner_is_online
                    ? "Currently online"
                    : formatRelative(
                        new Date(chatParticipants.owner_last_online),
                        new Date()
                      )
                } • Owner`}
            displayName={chatParticipants.owner_user_name}
            photoUrl={chatParticipants.owner_profile_picture_url}
          />
          <UserProfileSmall
            text={`
                ${
                  chatParticipants.borrower_is_online
                    ? "Currently online"
                    : formatRelative(
                        new Date(chatParticipants.borrower_last_online),
                        new Date()
                      )
                } • Borrower`}
            displayName={chatParticipants.borrower_user_name}
            photoUrl={chatParticipants.borrower_profile_picture_url}
          />
        </>
      )}
    </div>
  );
};

export default ChatInfoParticipants;
