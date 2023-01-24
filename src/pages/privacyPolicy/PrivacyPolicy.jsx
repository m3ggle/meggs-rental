import React from "react";
import Btn from "../../components/common/Btn";
import supabase from "../../config/supabaseClient";

const PrivacyPolicy = () => {
  const handleClick = async () => {
    // const { data, error } = await supabase.auth.signInWithPassword({
    //   email: "meggle@web.de",
    //   password: "Tester123+",
    // });

    // console.log("error", error)
    // console.log("data", data)

    const { error } = await supabase.auth.signOut();
    console.log(error)
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
