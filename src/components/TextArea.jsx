import React from "react";

const TextArea = ({
  onChange,
  onBlur,
  name,
  value,
  placeholder,
  label,
  error,
}) => {
  return (
    <div
      className={`flex w-full max-w-[340px] flex-col gap-y-2`}
      aria-invalid={error ? "true" : "false"}
    >
      <label
        htmlFor={name}
        className="text-sm text-lmGrey800 dark:text-dmGrey25"
      >
        {label}
      </label>
      {/* input and error*/}
      <div className="flex w-full flex-col gap-y-1">
        <div
          className={`flex gap-x-2 rounded-lg ${
            error
              ? "bg-red-100 dark:bg-red-900"
              : "bg-lmGrey50 dark:bg-dmGrey800"
          }  py-[10px] px-3 shadow-sm`}
        >
          <textarea
            rows="4"
            name={name}
            value={value ? value : ""}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            className={`w-full overflow-auto bg-transparent text-sm ${
              error
                ? "text-red-500 placeholder:text-red-300 dark:text-red-100"
                : "text-lmGrey600 placeholder:text-dmGrey300 dark:text-dmGrey25 placeholder:dark:text-dmGrey300"
            }  focus:outline-none`}
          />
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

export default TextArea;
