import React from "react";
import Btn from "../../components/common/Btn";
import supabase from "../../config/supabaseClient";

const PrivacyPolicy = () => {
  const handleClick = async () => {
    const userMetaData = {
      first_name: "Meggle",
      last_name: "Bande",
      user_name: "m1ggle",
    };

    const { data, error } = await supabase.auth.signUp({
      email: "example@email.com",
      password: "example-password",
      options: {
        data: { ...userMetaData },
      },
    });

    if (error) {
      console.log(error)
      return
    }

    console.log(data)
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
