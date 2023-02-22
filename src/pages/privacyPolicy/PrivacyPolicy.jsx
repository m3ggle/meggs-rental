import React from "react";
import Btn from "../../components/common/Btn";
import supabase from "../../config/supabaseClient";

const PrivacyPolicy = () => {
  const handleClick = async () => {
    const testDrive =
      "https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/public/user-avatars/921ed632-ab15-4812-ad30-b0d258771532.webp";
    
    if (testDrive.includes('user-default')) {
      console.log("default image")
      return 
    }
    console.log(
      "ready to be deleted",
      testDrive.split(
        "https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/public/user-avatars/"
      )
    );
    
    // const cDate = new Date()
    // console.log(new Date().toISOString());
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-y-2 overflow-scroll">
      <div className="h-fit w-fit">
        <Btn
          title="Click Me"
          type="button"
          uiType="primary"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
