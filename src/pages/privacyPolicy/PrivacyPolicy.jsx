import React from "react";
import Btn from "../../components/common/Btn";
import supabase from "../../config/supabaseClient";
import { useUserContext } from "../../context/user/userContext";

const PrivacyPolicy = () => {
  const handleClick = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error)
    }
  };

  return (
    <div className="gap-y2 flex h-screen w-full flex-col items-center justify-center">
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
