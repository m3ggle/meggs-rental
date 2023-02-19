import React from "react";
import Btn from "../../components/common/Btn";
import supabase from "../../config/supabaseClient";
import { checkChannelAlreadyExist } from "../../helpers/checkChannelAlreadyExist";

const PrivacyPolicy = () => {
  let newMessageChannel

  const showConnections = () => {
    const allConnections = supabase.getChannels();
    console.log("all connections: ", allConnections);
  };

  const handleConnect = () => {
    console.log("establishing real time connection");
    if (!checkChannelAlreadyExist("newMessage")) {
      newMessageChannel = supabase
        .channel("newMessage")
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table: "messages",
          },
          (payload) => {
            console.log(payload);
          }
        )
        .subscribe();
    }
  };

  const handleDisconnect = () => {
    console.log("disconnecting real time connection");
    if (checkChannelAlreadyExist("newMessage")) {
      // supabase.removeChannel("newMessage");
      newMessageChannel.unsubscribe()
      // console.log(newMessageChannel)
    }
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-y-2 overflow-scroll">
      <div className="h-fit w-fit">
        <Btn
          title="Connect"
          type="button"
          uiType="primary"
          onClick={handleConnect}
        />
      </div>
      <div className="h-fit w-fit">
        <Btn
          title="Disconnect"
          type="button"
          uiType="secondary"
          onClick={handleDisconnect}
        />
      </div>
      <div className="h-fit w-fit">
        <Btn
          title="Show all connections"
          type="button"
          uiType="primary"
          onClick={showConnections}
        />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
