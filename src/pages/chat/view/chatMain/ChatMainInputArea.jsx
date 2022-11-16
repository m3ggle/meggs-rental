import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import ChatInput from "./ChatInput";

const ChatMainInputArea = () => {
  const [currentMsgState, setCurrentMsgState] = useState(false);
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const handleBlur = () => setCurrentMsgState(false);
  const handleFocus = () => setCurrentMsgState(true);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex min-h-[100px] w-full items-center gap-x-2 py-3 px-6"
    >
      <Controller
        name="message"
        control={control}
        rules={{
          required: "Name is required",
        }}
        render={({ field, fieldState }) => (
          <ChatInput
            secondIcon="fa-solid fa-paperclip"
            onChange={field.onChange}
            placeholder="Write your next message..."
            value={field.value}
            onBlur={handleBlur}
            onFocus={handleFocus}
            error={fieldState.error}
          />
        )}
      />
      <div className={`flex h-full items-center duration-300`}>
        <button
          type="submit"
          onClick={handleSubmit}
          className={`fa-solid fa-arrow-right flex h-10 min-h-[40px] min-w-[40px] items-center justify-center rounded-lg bg-lmPrimary text-base text-white duration-300 dark:bg-dmPrimary dark:text-white ${
            currentMsgState ? "-translate-y-5" : ""
          }`}
        />
      </div>
    </form>
  );
};

export default ChatMainInputArea;
