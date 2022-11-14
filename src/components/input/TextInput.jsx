import { Popover } from "@headlessui/react";
import React from "react";

const TextInput = ({
  firstIcon,
  secondIcon,
  onChange,
  onBlur,
  name,
  placeholder,
  value,
  label,
  error,
  type,
  filter,
}) => {
  // Todo: change color of filter icon if the filter is active
  return (
    <div
      className="flex w-full max-w-[340px] flex-col gap-y-2"
      aria-invalid={error ? "true" : "false"}
    >
      <label
        htmlFor={name}
        className="text-sm text-lmGrey500 dark:text-dmGrey100"
      >
        {label}
      </label>
      {/* input and error*/}
      <div className="flex w-full flex-col gap-y-1">
        <div className="flex w-full gap-x-2">
          <div
            className={`flex w-full items-center gap-x-2 rounded-lg ${
              error
                ? "bg-red-100 dark:bg-red-900"
                : "bg-lmGrey50 dark:bg-dmGrey800"
            }  py-[10px] px-3 shadow-sm`}
          >
            {firstIcon && (
              <div className="flex h-full w-[14px] items-center justify-center">
                <i
                  className={`${firstIcon} flex h-[14px] w-[14px] items-center justify-center text-[14px] ${
                    error
                      ? "text-red-300 dark:text-red-100"
                      : value === undefined || value === ""
                      ? "text-lmGrey300 dark:text-dmGrey300"
                      : "text-lmGrey600 dark:text-dmGrey25"
                  }  `}
                ></i>
              </div>
            )}
            <input
              type={type ?? "text"}
              name={name}
              value={value ? value : ""}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              className={`w-full bg-transparent text-sm ${
                error
                  ? "text-red-500 placeholder:text-red-300 dark:text-red-100"
                  : "text-lmGrey600 placeholder:text-dmGrey300 dark:text-dmGrey25 placeholder:dark:text-dmGrey300"
              }  focus:outline-none`}
            />
            {(secondIcon || error) && (
              <div className="flex h-full w-[14px] items-center justify-center">
                <i
                  className={`${
                    error ? "fa-solid fa-triangle-exclamation" : secondIcon
                  } flex h-[14px] w-[14px] items-center justify-center text-[14px] ${
                    error
                      ? "text-red-300 dark:text-red-100"
                      : value === undefined || value === ""
                      ? "text-lmGrey300 dark:text-dmGrey300"
                      : "text-lmGrey600 dark:text-dmGrey25"
                  }  `}
                ></i>
              </div>
            )}
          </div>

          {filter !== undefined && (
            <Popover.Button
              className={`fa-solid fa-filter flex min-h-[40px] min-w-[40px] items-center justify-center rounded-lg bg-lmGrey50 text-base text-lmGrey200 dark:bg-lmGrey800 dark:text-dmGrey300`}
            >
              {/* <span>Solutions</span> */}
              {/* <ChevronDownIcon
                  className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-orange-300 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                  aria-hidden="true"
                /> */}
            </Popover.Button>
            // <div className="fa-solid fa-filter flex min-w-[40px] min-h-[40px] items-center justify-center rounded-lg bg-lmGrey50 text-base text-lmGrey200 dark:bg-lmGrey800 dark:text-dmGrey300"></div>
          )}
        </div>
        {error && (
          <div className="flex items-center gap-x-2 px-3 ">
            <i className="fa-solid fa-triangle-exclamation flex h-[12px] w-[12px] items-center justify-center text-xs text-red-300 dark:text-red-100"></i>
            <span className="text-xs text-red-500 dark:text-red-100">
              {error.message}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextInput;
