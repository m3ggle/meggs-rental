import React from "react";
import Btn from "../../components/common/Btn";
import supabase from "../../config/supabaseClient";

const PrivacyPolicy = () => {
  const handleConnect = () => {
    supabase
      .channel(`testDrive`)
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "messages",
        },
        (payload) => {
          console.log(payload);
        }
      )
      .subscribe();
  };

  const handleDisconnect = () => {
    supabase.channel("testDrive").unsubscribe();
  };

  const handleShow = () => {
    const all = supabase.getChannels();
    console.log("all channels", all);
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
          uiType="primary"
          onClick={handleDisconnect}
        />
      </div>
      <div className="h-fit w-fit">
        <Btn
          title="Show connections"
          type="button"
          uiType="primary"
          onClick={handleShow}
        />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
