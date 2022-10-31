import React from "react";

const TextInput = ({
  firstIcon,
  secondIcon,
  onChange,
  onBlur,
  name,
  value,
  label,
  invalid,
}) => {
  console.log(invalid);

  return (
    <div className="flex w-[264px] flex-col gap-2">
      <label
        htmlFor={name}
        className="text-sm text-lmGrey800 dark:text-dmGrey25"
      >
        {label}
      </label>
      <div className="flex gap-x-2 rounded-lg bg-lmGrey50 py-[10px] px-3 shadow-sm dark:bg-dmGrey800">
        {firstIcon && (
          <div className="flex h-full w-[14px] items-center justify-center">
            <i
              className={`${firstIcon} h-[14px] w-[14px] ${
                value === undefined || value === ""
                  ? "text-lmGrey300 dark:text-dmGrey25"
                  : "text-lmGrey600 dark:text-dmGrey300"
              }  `}
            ></i>
          </div>
        )}
        <input
          type="text"
          name={name}
          value={value ? value : ""}
          onChange={onChange}
          obBlur={onBlur}
          placeholder="Test Input..."
          className="w-full bg-transparent text-sm text-lmGrey600 placeholder:text-dmGrey300 focus:outline-none dark:text-dmGrey25 placeholder:dark:text-dmGrey300"
        />
        {secondIcon && (
          <div className="flex h-full w-[14px] items-center justify-center">
            <i
              className={`${secondIcon} h-[14px] w-[14px] ${
                value === undefined || value === ""
                  ? "text-lmGrey300 dark:text-dmGrey25"
                  : "text-lmGrey600 dark:text-dmGrey300"
              }  `}
            ></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextInput;
