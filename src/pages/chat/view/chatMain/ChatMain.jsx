import React from 'react'
import { useWindowSize } from '../../../../hooks/useWindowSize'
import ChatMainChat from './ChatMainChat'
import ChatMainHeader from './ChatMainHeader'
import ChatMainInputArea from './ChatMainInputArea'

const ChatMain = () => {
  const windowSize = useWindowSize();
  
  return (
    <div
      style={{ height: `${windowSize.height}px` }}
      className="flex min-w-[360px] max-w-[720px] flex-col gap-y-2 1000:w-full 1000:min-w-0 1000:max-w-none"
    >
      <ChatMainHeader />
      <ChatMainChat />
      <ChatMainInputArea />
    </div>
  );
}

export default ChatMain