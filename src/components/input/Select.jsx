// Listbox (Select)
import { Listbox, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import React, { Fragment, useEffect, useState } from "react";
import { HiChevronUpDown } from "react-icons/hi2";

const Select = ({ icon, placeholder, itemList, onChange, label, error, value }) => {
  const [selected, setSelected] = useState(value ? value : placeholder);

  useEffect(() => {
    itemList.includes(selected) && onChange(selected);
  }, [selected, onChange, itemList]);

  return (
    <Listbox
      value={selected}
      onChange={setSelected}
      as="div"
      className="relative flex w-full max-w-[340px] flex-col"
    >
      {({ open }) => (
        <div className="flex flex-col gap-y-2">
          {/* label */}
          {label && (
            <Listbox.Label
              className={`text-sm text-lmGrey500 dark:text-dmGrey25`}
            >
              {label}
            </Listbox.Label>
          )}

          {/* button */}
          <div className="flex w-full flex-col gap-y-1">
            <Listbox.Button
              className={`flex w-full items-center gap-2 rounded-lg ${
                error
                  ? "bg-red-100 dark:bg-red-900"
                  : "bg-lmGrey50 dark:bg-dmGrey800"
              } px-3 py-[10px] shadow-sm`}
            >
              <i
                className={`${icon} flex h-[14px] w-[14px] items-center justify-center text-[14px] ${
                  error
                    ? "text-red-300 dark:text-red-100"
                    : selected === placeholder
                    ? "text-lmGrey300 dark:text-lmGrey300"
                    : "text-lmGrey600 dark:text-lmGrey100"
                }`}
              ></i>
              <span
                className={`flex w-full items-start text-sm font-medium ${
                  error
                    ? "text-red-300 dark:text-red-100"
                    : selected === placeholder
                    ? "text-lmGrey300 dark:text-lmGrey300"
                    : "text-lmGrey600 dark:text-lmGrey100"
                } `}
              >
                {selected}
              </span>
              <i
                className={` ${
                  open ? "translate-y-1" : "translate-y-0"
                } flex items-center justify-center text-xl duration-500 ease-in-out ${
                  error
                    ? "fa-solid fa-triangle-exclamation h-[14px] w-fit text-[14px] text-red-300 dark:text-red-100"
                    : selected === placeholder
                    ? "text-lmGrey300 dark:text-lmGrey300"
                    : "text-lmGrey600 dark:text-lmGrey100"
                }`}
              >
                <motion.div
                  animate={open ? { y: [0, 4, 0] } : { y: [0, -4, 0] }}
                  initial={false}
                  transition={{ ease: "easeOut", duration: 0.5 }}
                >
                  {!error && (
                    <HiChevronUpDown aria-hidden="true" className="text-xl" />
                  )}
                </motion.div>
              </i>
            </Listbox.Button>
            {error && !open && (
              <div className="flex items-center gap-x-2 px-3 ">
                <i className="fa-solid fa-triangle-exclamation flex h-[12px] w-[12px] items-center justify-center text-xs text-red-300 dark:text-red-100"></i>
                <span className="text-xs text-red-500 dark:text-red-100">
                  {error.message}
                </span>
              </div>
            )}
          </div>
          {/* options and error */}
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
            <Listbox.Options
              className={`absolute left-0 z-30 ${
                label ? "mt-20" : "mt-11"
              } flex w-full flex-col gap-y-1 rounded-lg bg-lmGrey50 py-2 px-2 shadow-sm dark:bg-dmGrey800`}
            >
              {itemList.map((item, itemIndex) => (
                <Listbox.Option
                  key={itemIndex}
                  className={({ active }) =>
                    `flex w-full cursor-default select-none items-center gap-2 rounded-lg px-3 py-2 ${
                      active
                        ? "bg-lmGrey100 dark:bg-dmGrey700"
                        : "bg-lmGrey50 dark:bg-dmGrey800"
                    } duration-300`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <i
                        className={`${
                          selected && "fa-solid fa-check"
                        } flex h-5 w-5 items-center justify-center text-lmGrey600 dark:text-dmGrey100`}
                        aria-hidden="true"
                      />
                      <span
                        className={`block truncate text-sm text-lmGrey600 dark:text-lmGrey100 ${
                          selected ? "font-semibold" : "font-medium"
                        }`}
                      >
                        {item}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
};

export default Select;
