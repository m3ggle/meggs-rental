import React from "react";
import Btn from "../../components/common/Btn";
import supabase from "../../config/supabaseClient";
import { useUserContext } from "../../context/user/userContext";

const PrivacyPolicy = () => {
  const handleClick = async () => {
    let obj = {
      firstName: "Meggle",
      lastName: "Bande",
      uid: "bingbong"
    }

      let result = {};
      for (const [key, value] of Object.entries(obj)) {
        const newKey = key.split(/(?=[A-Z])/);
        let inProcess = ""
        newKey.forEach((part, index) => {
          console.log(part)
          index === 0
            ? (inProcess += part.toLocaleLowerCase())
            : (inProcess += `_${part.toLocaleLowerCase()}`);
        })
        result[inProcess] = value;
      }
    
    console.log(result)
  };

  console.log("huhu")

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
