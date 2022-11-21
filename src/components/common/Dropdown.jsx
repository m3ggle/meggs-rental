import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const Dropdown = () => {
  return (
    <Menu as="div" className=" relative flex h-fit w-[340px] flex-col gap-1">
      {({ open }) => (
        <>
          {/* button */}
          <Menu.Button className="flex w-fit items-center gap-2 rounded-lg bg-lmGrey50 px-3 py-[10px] shadow-sm dark:bg-dmGrey800">
            <i className="fa-solid fa-sun flex h-[14px] w-[14px] items-center justify-center text-sm text-lmGrey600 dark:text-lmGrey100"></i>
            <span className="text-sm font-semibold text-lmGrey600 dark:text-lmGrey100">
              Appearance
            </span>
            <i
              className={`fa-solid fa-chevron-down ${
                open ? "rotate-180" : "rotate-0"
              } flex h-[14px] w-[14px] items-center justify-center text-sm text-lmGrey600 dark:text-lmGrey100 duration-500`}
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
            <Menu.Items className="absolute left-0 mt-12 flex w-fit flex-col gap-y-1 rounded-lg bg-lmGrey50 py-2 px-2 shadow-sm dark:bg-dmGrey800">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 ${
                      active
                        ? "bg-lmGrey100 dark:bg-dmGrey700"
                        : "bg-lmGrey50 dark:bg-dmGrey800"
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
                    className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 ${
                      active
                        ? "bg-lmGrey100 dark:bg-dmGrey700"
                        : "bg-lmGrey50 dark:bg-dmGrey800"
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
                    className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 ${
                      active
                        ? "bg-lmGrey100 dark:bg-dmGrey700"
                        : "bg-lmGrey50 dark:bg-dmGrey800"
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

export default Dropdown;