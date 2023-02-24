import { Combobox, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import AutocompleteOption from "./AutocompleteOption";

const AutocompleteOptions = ({
  label,
  query = "",
  inputColorCondition,
  isLoading = false,
  filteredItems = [],
  setQuery = () => {},
}) => {
  return (
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
      <Combobox.Options
        className={`${isLoading && "animate-pulse"} ${
          inputColorCondition
            ? "bg-white dark:bg-dmGrey900"
            : "bg-lmGrey50 dark:bg-dmGrey800"
        } absolute left-0 z-30 ${
          label ? "mt-[80px]" : "mt-14"
        } flex min-h-[40px] w-full flex-col gap-y-1 rounded-lg py-2 px-2 shadow-sm`}
          >
              {/* user input */}
        {isLoading ? (
          <div className="relative block cursor-default select-none truncate px-3 py-2 text-sm text-lmGrey600 dark:text-lmGrey100"></div>
        ) : filteredItems.length === 0 && query !== "" ? (
          <div className="relative block cursor-default select-none truncate px-3 py-2 text-sm text-lmGrey600 dark:text-lmGrey100">
            Nothing found.
          </div>
        ) : (
          filteredItems.map((item, index) => (
            <AutocompleteOption
                key={item?.id ?? index}
                item={item}
              inputColorCondition={inputColorCondition}
            />
          ))
        )}
      </Combobox.Options>
    </Transition>
  );
};

export default AutocompleteOptions;
