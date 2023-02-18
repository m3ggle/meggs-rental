import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Btn from "../../../../components/common/Btn";
import { useChatInputSubmit } from "../../hooks/useChatInputSubmit";
import ChatInput from "./ChatInput";

const ChatMainInputArea = () => {
  const [currentMsgState, setCurrentMsgState] = useState(false);
  const { control, handleSubmit, setValue } = useForm();
  const { onSubmit } = useChatInputSubmit(setValue);

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
        render={({ field, fieldState }) => (
          <ChatInput
            // secondIcon="fa-solid fa-paperclip"
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
        <div
          className={`${
            currentMsgState && "-translate-y-5"
          } h-fit w-fit duration-300`}
        >
          <Btn
            type="submit"
            uiType="primary"
            icon="fa-solid fa-chevron-right"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </form>
  );
};

export default ChatMainInputArea;
