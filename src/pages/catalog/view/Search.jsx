import React from 'react'

const Search = ({
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
}) => {
  return (
    <div
      className={`flex w-full items-center gap-x-2 rounded-lg ${
        error ? "bg-red-100 dark:bg-red-900" : "bg-lmGrey50 dark:bg-dmGrey800"
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
  );
};

export default Search