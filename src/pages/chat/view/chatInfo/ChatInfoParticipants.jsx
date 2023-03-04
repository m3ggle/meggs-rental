import { formatRelative } from "date-fns";
import React from "react";
import UserProfileSmall from "../../../../components/userProfile/UserProfileSmall";

const ChatInfoParticipants = ({ chatInformation }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <span className="text-lg text-lmGrey600 dark:text-dmGrey100">
        Participants
      </span>
      <UserProfileSmall
        text={`
                ${
                  chatInformation.owner_is_online
                    ? "Currently online"
                    : `Last seen: ${formatRelative(
                        new Date(chatInformation.owner_last_online),
                        new Date()
                      )}`
                } • Owner`}
        displayName={chatInformation.owner_user_name}
        photoUrl={chatInformation.owner_profile_picture_url}
        uid={chatInformation.owner_id}
      />
      <UserProfileSmall
        text={`
                ${
                  chatInformation.borrower_is_online
                    ? "Currently online"
                    : `Last seen: ${formatRelative(
                        new Date(chatInformation.borrower_last_online),
                        new Date()
                      )}`
                } • Borrower`}
        displayName={chatInformation.borrower_user_name}
        photoUrl={chatInformation.borrower_profile_picture_url}
        uid={chatInformation.borrower_id}
      />
    </div>
  );
};

export default ChatInfoParticipants;
