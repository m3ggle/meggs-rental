import { Combobox } from "@headlessui/react";
import React from "react";

const AutocompleteOption = ({
  item,
  inputColorCondition,
  icon = "fa-solid fa-magnifying-glass",
}) => {
  return (
    <Combobox.Option
      key={item.id}
      className={({ active }) =>
        `flex w-full cursor-default select-none items-center gap-2 rounded-lg px-3 py-2 ${
          active
            ? "bg-lmGrey100 dark:bg-dmGrey700"
            : inputColorCondition
            ? "bg-white dark:bg-dmGrey900"
            : "bg-lmGrey50 dark:bg-dmGrey800"
        } duration-300`
      }
      value={item.name}
    >
      {({ selected }) => (
        <>
          <i
            className={`${
              selected ? "fa-solid fa-check" : icon
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
  );
};

export default AutocompleteOption;
