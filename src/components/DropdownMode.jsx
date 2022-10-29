// dropdown specifically for appearance (light or dark Mode)
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";

const DropdownMode = () => {
  useEffect(() => {
    setPreference();
  }, []);

  // on change
  const setPreference = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleChange = (mode) => {
    // Todo: make it a dropdown
    //    options: lightMode, darkMode, system
    //    for lightMode do: localStorage.theme = 'light'
    //    for darkMode do: localStorage.theme = 'dark'
    //    for system do: localStorage.removeItem('theme')
    if (mode === "light") {
      localStorage.setItem("theme", "light");
    } else if (mode === "dark") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.removeItem("theme");
    }
    setPreference();
  };

  // when closing window, clear localStorage
  window.onbeforeunload = function () {
    localStorage.clear();
  };

  return (
    <Menu as="div" className=" relative flex h-fit w-[340px] flex-col gap-2">
      {/* button */}
      <Menu.Button className="flex w-fit items-center gap-2 rounded-lg bg-white px-3 py-[10px] shadow-sm dark:bg-dmGrey800">
        <i className="fa-solid fa-sun flex h-[14px] w-[14px] items-center justify-center text-sm text-lmGrey600 dark:text-lmGrey100"></i>
        <span className="text-sm font-semibold text-lmGrey600 dark:text-lmGrey100">
          Appearance
        </span>
        <i className="fa-solid fa-chevron-down flex h-[14px] w-[14px] items-center justify-center text-sm text-lmGrey600 dark:text-lmGrey100"></i>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {/* menu */}
        <Menu.Items className="absolute left-0 mt-14 flex w-fit flex-col gap-y-1 rounded-lg bg-white py-2 px-2 shadow-sm dark:bg-dmGrey800">
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => handleChange("light")}
                className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 ${
                  active
                    ? "bg-lmGrey100 dark:bg-dmGrey700"
                    : "bg-white dark:bg-dmGrey800"
                }`}
              >
                <i
                  className="fa-solid fa-sun flex h-[14px] w-[14px] items-center justify-center text-sm 
                     text-lmGrey600 dark:text-lmGrey100"
                ></i>
                <span className="text-sm text-lmGrey600 dark:text-lmGrey100">
                  Light Mode
                </span>
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => handleChange("dark")}
                className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 ${
                  active
                    ? "bg-lmGrey100 dark:bg-dmGrey700"
                    : "bg-white dark:bg-dmGrey800"
                }`}
              >
                <i
                  className="fa-solid fa-moon flex h-[14px] w-[14px] items-center justify-center text-sm 
                     text-lmGrey600 dark:text-lmGrey100"
                ></i>
                <span className="text-sm text-lmGrey600 dark:text-lmGrey100">
                  Dark Mode
                </span>
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => handleChange("system")}
                className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 ${
                  active
                    ? "bg-lmGrey100 dark:bg-dmGrey700"
                    : "bg-white dark:bg-dmGrey800"
                }`}
              >
                <i
                  className="fa-solid fa-desktop flex h-[14px] w-[14px] items-center justify-center text-sm 
                     text-lmGrey600 dark:text-lmGrey100"
                ></i>
                <span className="text-sm text-lmGrey600 dark:text-lmGrey100">
                  System
                </span>
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropdownMode;
