// Combobox (Autocomplete)
import { Combobox } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useWindowSize } from "../../../hooks/useWindowSize";
import AutocompleteOptions from "./AutocompleteOptions";

const Autocomplete = ({
  label,
  error,
  placeholder,
  itemList,
  isLoading = false,
  isCostumeAllowed = false,
  value,
  onInputChange = () => {},
  onSelect = () => {},
  onDelete = () => {},
}) => {
  const [selected, setSelected] = useState(value ? value : null);
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
      checkSelected.length > 0 && onSelect(checkSelected[0]);
    }
    // itemList.includes(selected) && onChange(selected);
  }, [selected]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    onInputChange(e.target.value);
  };

  const handleDelete = () => {
    setQuery("");
    setSelected(null);
    onDelete();
  };

  const location = useLocation();
  const windowSize = useWindowSize();
  const inputColorCondition =
    location.pathname === "/explore/map" && windowSize.width < 1100;

  return (
    <Combobox
      nullable
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
                  : inputColorCondition
                  ? "bg-white dark:bg-dmGrey900"
                  : "bg-lmGrey50 dark:bg-dmGrey800"
              } px-3 py-[10px] shadow-sm`}
            >
              <Combobox.Input
                autoComplete="off"
                className={`w-full bg-transparent text-sm ${
                  error
                    ? "text-red-500 placeholder:text-red-300 dark:text-red-100"
                    : selected === placeholder
                    ? "text-lmGrey300 dark:text-lmGrey300"
                    : "text-lmGrey600 placeholder:text-dmGrey300 dark:text-dmGrey25 placeholder:dark:text-dmGrey300"
                }  focus:outline-none`}
                placeholder={placeholder}
                displayValue={selected}
                onChange={handleChange}
                // onChange={(event) => setQuery(event.target.value)}
              />
              {/* delete btn */}
              {onDelete && (
                <i
                  onClick={handleDelete}
                  className={`${
                    error
                      ? "fa-solid fa-triangle-exclamation"
                      : "fa-solid fa-times"
                  }
                  ${
                    selected?.length > 0 || query.length > 0 ? "flex" : "hidden"
                  }
                  min-w[14px] h-min-[14px] h-[14px] w-[14px] items-center justify-center text-[14px] duration-300 ${
                    error
                      ? "text-red-300 dark:text-red-100"
                      : "text-lmGrey600 dark:text-dmGrey25"
                  }`}
                />
              )}
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
          <AutocompleteOptions
            label={label}
            inputColorCondition={inputColorCondition}
            query={query}
            filteredItems={filteredItems}
            isLoading={isLoading}
            isCostumeAllowed={isCostumeAllowed}
            setQuery={setQuery}
          />
        </div>
      )}
    </Combobox>
  );
};

export default Autocomplete;
