import React from "react";
import { useGetAndUpdateRecentChats } from "./hooks/useGetAndUpdateRecentChats";
import { useHandleUpdatedChatroomPayloadChange } from "./hooks/useHandleUpdatedChatroomPayloadChange";
import { useHandleUpdatedMessagePayloadChange } from "./hooks/useHandleUpdatedMessagePayloadChange";

const RecentChats = () => {
  // gets all (max 10) recent chats and stores them inside the context
  //when it has all the recent chats it calls a function which takes care of establishing real time connection
  useGetAndUpdateRecentChats();

  // mentioned function which establishes connection to receive real time updates, the response function will dispatch the payload into the context
  // this hook will monitor the payloads/changes the which get dispatch into the context
  useHandleUpdatedChatroomPayloadChange();

  // test
  useHandleUpdatedMessagePayloadChange()

  return <></>;
};

export default RecentChats;
