import React from "react";
import ChatInputFirstIcon from "./ChatInputFirstIcon";
import ChatInputSecondIcon from "./ChatInputSecondIcon";

const ChatInput = ({
  firstIcon,
  secondIcon,
  onChange,
  onFocus,
  onBlur,
  onDelete,
  name,
  placeholder,
  value,
  label,
  error,
  type,
  filter,
}) => {
  return (
    <div
      className="flex w-full flex-col gap-y-2"
      aria-invalid={error ? "true" : "false"}
    >
      <div className="flex w-full flex-col gap-y-1">
        <div className="flex w-full gap-x-2">
          <div
            className={`flex w-full gap-x-2 rounded-lg ${
              error
                ? "bg-red-100 dark:bg-red-900"
                : "bg-lmGrey50 dark:bg-dmGrey800"
            }  py-[10px] px-3 shadow-sm`}
          >
            {firstIcon && (
              <ChatInputFirstIcon
                firstIcon={firstIcon}
                error={error}
                value={value}
              />
            )}
            <textarea
              rows="10"
              type={type ?? "text"}
              name={name}
              value={value ? value : ""}
              onChange={onChange}
              onBlur={onBlur}
              onFocus={onFocus}
              placeholder={placeholder}
              className={`w-full bg-transparent text-sm ${
                error
                  ? "text-red-500 placeholder:text-red-300 dark:text-red-100"
                  : "text-lmGrey600 placeholder:text-dmGrey300 dark:text-dmGrey25 placeholder:dark:text-dmGrey300"
              }  h-[20px] break-words outline-none duration-300 focus:h-[60px] focus:outline-none`}
            />
            {(secondIcon || error) && (
              <ChatInputSecondIcon
                secondIcon={secondIcon}
                error={error}
                value={value}
              />
            )}
          </div>
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

export default ChatInput;
