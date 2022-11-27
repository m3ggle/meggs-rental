// Combobox (Autocomplete)
import { Combobox, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import React, { Fragment, useEffect, useState } from "react";
import { HiChevronUpDown } from "react-icons/hi2";

const Autocomplete = ({
  label,
  onChange,
  onInputChange,
  error,
  placeholder,
  itemList,
  value,
}) => {
  const [selected, setSelected] = useState(value ? value : placeholder);
  const [query, setQuery] = useState("");

  const filteredItems =
    query === ""
      ? itemList
      : itemList.filter((item) =>
          item.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  useEffect(() => {
    const checkSelected = itemList.filter((item) => item.name === selected);
    if (checkSelected) {
      checkSelected.length > 0 && onChange(checkSelected[0]);
    }
    // itemList.includes(selected) && onChange(selected);
  }, [selected]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    onInputChange(e.target.value);
  };

  return (
    <Combobox
      value={selected}
      onChange={setSelected}
      as="div"
      className="relative flex w-full max-w-[340px] flex-col"
    >
      {({ open }) => (
        <div className="flex w-full flex-col gap-y-2">
          <Combobox.Label
            className={`w-fit text-sm text-lmGrey500 dark:text-dmGrey25`}
          >
            {label}
          </Combobox.Label>

          {/* input button errorMsg */}
          <div className="flex w-full flex-col gap-y-1">
            {/* input button */}
            <div
              className={`flex w-full items-center gap-2 rounded-lg ${
                error
                  ? "bg-red-100 dark:bg-red-900"
                  : "bg-lmGrey50 dark:bg-dmGrey800"
              } px-3 py-[10px] shadow-sm`}
            >
              <Combobox.Input
                className={`w-full bg-transparent text-sm ${
                  error
                    ? "text-red-500 placeholder:text-red-300 dark:text-red-100"
                    : selected === placeholder
                    ? "text-lmGrey300 dark:text-lmGrey300"
                    : "text-lmGrey600 placeholder:text-dmGrey300 dark:text-dmGrey25 placeholder:dark:text-dmGrey300"
                }  focus:outline-none`}
                displayValue={selected}
                onChange={handleChange}
                // onChange={(event) => setQuery(event.target.value)}
              />
              <Combobox.Button>
                <i
                  className={`${
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
              </Combobox.Button>
            </div>

            {/* errorMsg */}
            {error && !open && (
              <div className="flex items-center gap-x-2 px-3 ">
                <i className="fa-solid fa-triangle-exclamation flex h-[12px] w-[12px] items-center justify-center text-xs text-red-300 dark:text-red-100"></i>
                <span className="text-xs text-red-500 dark:text-red-100">
                  {error.message}
                </span>
              </div>
            )}
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute left-0 z-30 mt-14 flex min-h-[40px] w-full flex-col gap-y-1 rounded-lg bg-lmGrey50 py-2 px-2 shadow-sm dark:bg-dmGrey800">
              {filteredItems.length === 0 && query !== "" ? (
                <div className="relative block cursor-default select-none truncate px-3 py-2 text-sm text-lmGrey600 dark:text-lmGrey100">
                  Nothing found.
                </div>
              ) : (
                filteredItems.map((item) => (
                  <Combobox.Option
                    key={item.id}
                    className={({ active }) =>
                      `flex w-full cursor-default select-none items-center gap-2 rounded-lg px-3 py-2 ${
                        active
                          ? "bg-lmGrey100 dark:bg-dmGrey700"
                          : "bg-lmGrey50 dark:bg-dmGrey800"
                      } duration-300`
                    }
                    value={item.name}
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
                          {item.name}
                        </span>
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      )}
    </Combobox>
  );
};

export default Autocomplete;
