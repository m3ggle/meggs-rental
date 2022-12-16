import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../../../../components/common/Btn";

const HomepageNavbarRight = () => {
  const [signedIn] = useState({
    status: false,
    firstName: "Meggle",
    lastName: "Bande",
    photoUrl:
      "https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2535&q=80",
  });

  const navigate = useNavigate();

  return (
    <div className="flex w-fit items-center justify-end gap-x-2 700:w-60">
      {signedIn.status ? (
        <>
          <span className="text-lg text-lmGrey800 dark:text-dmGrey25">
            {signedIn.firstName} {signedIn.lastName}
          </span>
          <img
            className="h-11 w-11 rounded-full bg-blue-200 dark:bg-blue-800"
            src={signedIn.photoUrl}
            alt="user profile"
          />
        </>
      ) : (
        <div className="w-fit">
          <Btn
            title="Sign In"
            uiType="primary"
            type="button"
            icon="fa-solid fa-chevron-right"
            onClick={() => navigate("/sign-in")}
          />
        </div>
      )}
    </div>
  );
};

export default HomepageNavbarRight;
