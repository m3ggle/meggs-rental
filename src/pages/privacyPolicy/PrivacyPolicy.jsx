import React from "react";
import Btn from "../../components/common/Btn";
import supabase from "../../config/supabaseClient";

const PrivacyPolicy = () => {
  const handleClick = async () => {
    const { data, error } = await supabase.storage
      .from("user-avatars")
      .remove(["921ed632-ab15-4812-ad30-*"]);
    
    console.log(data, error);
    
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
