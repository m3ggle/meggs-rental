import React, { useState } from "react";

const TextInput = ({ firstIcon, secondIcon, callback, required }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Todo: 
  // required and callback

  return (
    <form className="flex w-[264px] flex-col gap-2">
      <label
        htmlFor="test"
        className="text-sm text-lmGrey800 dark:text-dmGrey25"
      >
        Test Input
      </label>
      <div className="flex gap-x-2 rounded-lg bg-lmGrey50 py-[10px] px-3 shadow-sm dark:bg-dmGrey800">
        {firstIcon && (
          <div className="flex h-full w-[14px] items-center justify-center">
            <i
              className={`${firstIcon} h-[14px] w-[14px] ${
                inputValue === ""
                  ? "text-lmGrey600 dark:text-dmGrey300"
                  : "text-lmGrey300 dark:text-dmGrey25"
              }  `}
            ></i>
          </div>
        )}
        <input
          type="text"
          name="test"
          value={inputValue}
          required={required}
          onChange={handleChange}
          placeholder="Test Input..."
          className="w-full bg-transparent text-sm text-lmGrey600 placeholder:text-dmGrey300 focus:outline-none dark:text-dmGrey25 placeholder:dark:text-dmGrey300"
        />
        {secondIcon && (
          <div className="flex h-full w-[14px] items-center justify-center">
            <i
              className={`${secondIcon} h-[14px] w-[14px] ${
                inputValue === ""
                  ? "text-lmGrey600 dark:text-dmGrey300"
                  : "text-lmGrey300 dark:text-dmGrey25"
              }  `}
            ></i>
          </div>
        )}
      </div>

      <button
        type="submit"
        className="rounded-lg bg-slate-500 px-6 py-2 text-slate-50 shadow-sm"
      >
        Click to test submit
      </button>
    </form>
  );
};

export default TextInput;
