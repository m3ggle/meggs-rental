import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { HiChevronUpDown } from "react-icons/hi2";
import {motion } from "framer-motion"
import React from "react";

const Select = ({ icon, placeholder, itemList, onChange }) => {
  const [selected, setSelected] = useState(placeholder);

  

  useEffect(() => {
    onChange(selected);
  }, [selected]);

  return (
    <Listbox
      value={selected}
      onChange={setSelected}
      as="div"
      className="relative flex h-fit w-[340px] flex-col"
    >
      {({ open }) => (
        <>
          {/* button */}
          <Listbox.Button className="flex w-full items-center gap-2 rounded-lg bg-lmGrey50 px-3 py-[10px] shadow-sm dark:bg-dmGrey800">
            <i
              className={`${icon} flex h-[14px] w-[14px] items-center justify-center text-sm ${
                selected === placeholder
                  ? "text-lmGrey300 dark:text-lmGrey300"
                  : "text-lmGrey600 dark:text-lmGrey100"
              }`}
            ></i>
            <span
              className={`flex w-full items-start text-sm font-semibold ${
                selected === placeholder
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
                selected === placeholder
                  ? "text-lmGrey300 dark:text-lmGrey300"
                  : "text-lmGrey600 dark:text-lmGrey100"
              }`}
            >
              <motion.div
                animate={open ? { y: [0, 4, 0] } : { y: [0, -4, 0] }}
                initial={false}
                transition={{ ease: "easeOut", duration: 0.5 }}
              >
                <HiChevronUpDown className="text-xl" />
              </motion.div>
            </i>
          </Listbox.Button>

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
            <Listbox.Options className="absolute left-0 mt-12 flex w-full flex-col gap-y-1 rounded-lg bg-lmGrey50 py-2 px-2 shadow-sm dark:bg-dmGrey800">
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
        </>
      )}
    </Listbox>
  );
};

export default Select;
