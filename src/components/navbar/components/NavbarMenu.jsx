import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import supabase from "../../../config/supabaseClient";
import { useNavigationContext } from "../../../context/navigation/navigationContext";
import { useUserContext } from "../../../context/user/userContext";
import { toastNotify } from "../../toastNotify/toastNotify";

const NavbarMenu = ({ handleClickNavigation }) => {
  const { menu } = useNavigationContext();
  const { userId, dispatchUser } = useUserContext();
  const location = useLocation();

  const { notifyStandard } = toastNotify();
  const { isOpen, dispatchNavigation } = useNavigationContext();
  const navigate = useNavigate();
  const displayNotify = (content, type = "waning", id = "SignOutError") => {
    notifyStandard({ information: { type, content }, id });
  };
  const handleSignOut = async () => {
    const { errorSignOut } = await supabase.auth.signOut();

    if (errorSignOut) {
      displayNotify(errorSignOut.message);
      console.log("this is an error (signOut)", errorSignOut);
      return;
    }

    // navbar close if open
    if (isOpen) {
      dispatchNavigation({ type: "CLOSE_NAVIGATION" });
    }

    dispatchUser({
      type: "SET_USER_CONTEXT_DEFAULT",
    });
    navigate("/sign-in");
  };

  const handleClickSign = () => {
    if (location.pathname === "/sign-in") {
      handleClickNavigation("sign-up");
      return;
    }

    if (
      location.pathname === "/sign-up" ||
      location.pathname === "forgot-password"
    ) {
      handleClickNavigation("sign-in");
      return;
    }

    if (userId) {
      handleSignOut();
    }

    // not signed in
    handleClickNavigation("sign-in");
  };

  return (
    <div className="flex w-[360px] flex-col gap-y-2 px-8 py-3 text-lmGrey400 dark:text-dmGrey100">
      <span className="text-sm font-semibold">Menu</span>
      {menu.map((item, index) => (
        <div
          key={index}
          onClick={() => handleClickNavigation(item.navigateTo)}
          className="flex cursor-pointer items-center gap-x-2 rounded-lg text-base duration-300 hover:bg-white dark:hover:bg-dmGrey800"
        >
          <div
            className={`${item.icon} flex h-11 w-11 items-center justify-center text-[18px]`}
          ></div>
          <span>{item.text}</span>
        </div>
      ))}
      <div
        onClick={handleClickSign}
        className="flex cursor-pointer items-center gap-x-2 rounded-lg text-base duration-300 hover:bg-white dark:hover:bg-dmGrey800"
      >
        <div
          className={`fa-solid ${
            userId &&
            location.pathname !== "/sign-in" &&
            location.pathname !== "/sign-up" &&
            location.pathname === "forgot-password" &&
            "rotate-180"
          } fa-right-from-bracket flex h-11 w-11 items-center justify-center text-[18px]`}
        />
        <span>
          Sign{" "}
          {location.pathname === "/sign-in"
            ? "Up"
            : location.pathname === "/sign-up" ||
              location.pathname === "forgot-password"
            ? "In"
            : userId
            ? "Out"
            : "In"}
        </span>
      </div>
    </div>
  );
};

export default NavbarMenu;
