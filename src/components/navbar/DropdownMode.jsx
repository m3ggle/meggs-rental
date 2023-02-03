// dropdown specifically for appearance (light or dark Mode)
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import { useDarkModeContext } from "../../context/darkMode/darkModeContext";

const DropdownMode = () => {
  let { darkMode, dispatchDarkMode } = useDarkModeContext();
  useEffect(() => setPreference(), []);

  // on change
  const setPreference = () => {
    // if true, set to dark mode
    if (
      localStorage.theme === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      if (!document.documentElement.classList.contains("dark")) {
        // html does not contain the class dark yet
        document.documentElement.classList.add("dark");
      }
      if (!darkMode) {
        // context is not set to dark mode yet
        dispatchDarkMode({ type: "SET_TO_DARK" });
      }
      return;
    }

    // "set" to light mode
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
    }
    if (darkMode) {
      dispatchDarkMode({ type: "SET_TO_LIGHT" });
    }
  };

  const handleChange = (mode) => {
    if (mode === "light") {
      localStorage.setItem("theme", "light");
    } else if (mode === "dark") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.removeItem("theme");
    }
    setPreference();
  };

  return (
    <Menu as="div" className=" relative flex h-fit w-full flex-col">
      {/* button */}
      {({ open }) => (
        <>
          <Menu.Button className="flex w-full items-center gap-2 rounded-lg bg-white px-3 py-[10px] shadow-sm duration-300 hover:bg-lmGrey50 dark:bg-dmGrey800">
            <i
              className={`${
                localStorage.theme === "light"
                  ? "fa-solid fa-sun"
                  : localStorage.theme === "dark"
                  ? "fa-solid fa-moon"
                  : "fa-solid fa-desktop"
              } flex h-[14px] w-[14px] items-center justify-center text-sm text-lmGrey600 duration-300 dark:text-lmGrey100`}
            ></i>
            <span className="flex w-full  text-sm text-lmGrey600 dark:text-lmGrey100">
              Appearance
            </span>
            <i
              className={`fa-solid fa-chevron-down ${
                open ? "rotate-180" : "rotate-0"
              } flex h-[14px] w-[14px] items-center justify-center text-sm text-lmGrey600 duration-500 dark:text-lmGrey100`}
            ></i>
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
            <Menu.Items className="absolute left-0 mt-12 flex w-full flex-col gap-y-1 rounded-lg bg-white py-2 px-2 shadow-sm dark:bg-dmGrey800">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleChange("light")}
                    className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 ${
                      active
                        ? "bg-lmGrey50 dark:bg-dmGrey700"
                        : "bg-white dark:bg-dmGrey800"
                    } duration-300`}
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
                        ? "bg-lmGrey50 dark:bg-dmGrey700"
                        : "bg-white dark:bg-dmGrey800"
                    } duration-300`}
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
                        ? "bg-lmGrey50 dark:bg-dmGrey700"
                        : "bg-white dark:bg-dmGrey800"
                    } duration-300`}
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
        </>
      )}
    </Menu>
  );
};

export default DropdownMode;
