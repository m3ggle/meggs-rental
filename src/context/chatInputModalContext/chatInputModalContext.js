import { createContext, useCallback, useContext, useReducer } from "react";
import chatInputModalReducer from "./chatInputModalReducer";
import { chatInputModalTemplate } from "./chatInputModalTemplate";

const ChatInputModalContext = createContext({
  ...chatInputModalTemplate,

  openModal: () => {},
  closeModal: () => {},
  dispatchChatInputModal: () => {},
});
ChatInputModalContext.displayName = "ChatInputModalContext";

export function useChatInputModalContext() {
  return useContext(ChatInputModalContext);
}

export const ChatInputModalProvider = ({ children }) => {
  const initialState = {
    ...chatInputModalTemplate,
  };

  const [state, dispatchChatInputModal] = useReducer(
    chatInputModalReducer,
    initialState
  );

  // functions start
  const openModal = (
    modalInformation = {
      ...chatInputModalTemplate,
    },
  ) => {
    dispatchChatInputModal({
      type: "SET_CHAT_INPUT_MODAL",
      payload: {
        ...modalInformation,
        isOpen: true
      }
    });
  };

  const closeModal = useCallback(() => {
    dispatchChatInputModal({
      type: "SET_CHAT_INPUT_MODAL",
      payload: chatInputModalTemplate,
    });
  }, []);
  // functions end

  return (
    <ChatInputModalContext.Provider
      value={{
        ...state,
        dispatchChatInputModal,
        closeModal,
        openModal,
      }}
    >
      {children}
    </ChatInputModalContext.Provider>
  );
};
