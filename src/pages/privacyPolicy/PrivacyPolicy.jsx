import { collection, getDocs, limit, query, where } from "firebase/firestore";
import React from "react";
import Btn from "../../components/common/Btn";
import supabase from "../../config/supabaseClient";
import { db } from "../../firebase.config";

const PrivacyPolicy = () => {
  const handleClick = async () => {
    console.log(supabase);
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
