import React from "react";
import Btn from "../../components/common/Btn";
import supabase from "../../config/supabaseClient";

const PrivacyPolicy = () => {
  const handleClick = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: "megglebande@web.de",
      password: "example-password",
    });

    console.log("data is ", data);
    console.log("error is", error);

    const checkObject = {
      email_: data.user.email,
      uid_: data.user.id,
    };

    let { data: checkdata } = await supabase.rpc(
      "check_if_user_exists",
      checkObject
    );

    console.log("true or false: ", checkdata);
    // if false, the email is already in use, try to sign in
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
