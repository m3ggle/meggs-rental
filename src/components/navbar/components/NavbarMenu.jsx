import React from "react";
import { useLocation } from "react-router-dom";
import { useSignOutAPI } from "../../../api/firebase/useSignOutAPI";
import { useNavigationContext } from "../../../context/navigation/navigationContext";

const NavbarMenu = ({ signedIn, handleClickNavigation }) => {
  const { menu } = useNavigationContext();

  const location = useLocation();
  const { signOutUser } = useSignOutAPI();

  const handleSignOut = () => {
    signOutUser();
    handleClickNavigation("sign-in");
  };

  const handleClickSign = () => {
    location.pathname === "/sign-in"
      ? handleClickNavigation("sign-up")
      : location.pathname === "/sign-up" ||
        location.pathname === "forgot-password"
      ? handleClickNavigation("sign-in")
      : signedIn
      ? handleSignOut()
      : handleClickNavigation("sign-in");
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
      {/* <div
        onClick={() => handleClickNavigation("/explore/map")}
        className="flex cursor-pointer items-center gap-x-2 rounded-lg text-base duration-300 hover:bg-white dark:hover:bg-dmGrey800"
      >
        <div className="fa-solid fa-map flex h-11 w-11 items-center justify-center text-[18px]"></div>
        <span>Explore Map</span>
      </div>
      <div
        onClick={() => handleClickNavigation("/explore/catalog")}
        className="flex cursor-pointer items-center gap-x-2 rounded-lg text-base duration-300 hover:bg-white dark:hover:bg-dmGrey800"
      >
        <div className="fa-solid fa-list flex h-11 w-11 items-center justify-center text-[18px]"></div>
        <span>Explore Catalog</span>
      </div>
      <div
        onClick={() => handleClickNavigation("/favorites")}
        className="flex cursor-pointer items-center gap-x-2 rounded-lg text-base duration-300 hover:bg-white dark:hover:bg-dmGrey800"
      >
        <div className="fa-solid fa-heart flex h-11 w-11 items-center justify-center text-[18px]"></div>
        <span>Favorites</span>
      </div>
      <div
        onClick={() => handleClickNavigation("/user-offers")}
        className="flex cursor-pointer items-center gap-x-2 rounded-lg text-base duration-300 hover:bg-white dark:hover:bg-dmGrey800"
      >
        <div className="fa-solid fa-file flex h-11 w-11 items-center justify-center text-[18px]"></div>
        <span>Your Offers</span>
      </div>
      <div
        onClick={() => handleClickNavigation("/upload")}
        className="flex cursor-pointer items-center gap-x-2 rounded-lg text-base duration-300 hover:bg-white dark:hover:bg-dmGrey800"
      >
        <div className="fa-solid fa-plus flex h-11 w-11 items-center justify-center text-[18px]"></div>
        <span>Upload</span>
      </div>
      <div
        onClick={() => handleClickNavigation("/chat")}
        className="flex cursor-pointer items-center gap-x-2 rounded-lg text-base duration-300 hover:bg-white dark:hover:bg-dmGrey800"
      >
        <div className="fa-solid fa-comments flex h-11 w-11 items-center justify-center text-[18px]"></div>
        <span>Chats</span>
      </div>
      <div
        onClick={() => handleClickNavigation("/profile")}
        className="flex cursor-pointer items-center gap-x-2 rounded-lg text-base duration-300 hover:bg-white dark:hover:bg-dmGrey800"
      >
        <div className="fa-solid fa-user flex h-11 w-11 items-center justify-center text-[18px]"></div>
        <span>Your Profile</span>
      </div> */}
      <div
        onClick={handleClickSign}
        className="flex cursor-pointer items-center gap-x-2 rounded-lg text-base duration-300 hover:bg-white dark:hover:bg-dmGrey800"
      >
        <div
          className={`fa-solid ${
            signedIn &&
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
            : signedIn
            ? "Out"
            : "In"}
        </span>
      </div>
    </div>
  );
};

export default NavbarMenu;
