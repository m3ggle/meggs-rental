import React from 'react'
import ChatMainChat from './ChatMainChat'
import ChatMainHeader from './ChatMainHeader'
import ChatMainInputArea from './ChatMainInputArea'

const ChatMain = () => {
  return (
    <div className='flex flex-col gap-y-2 max-w-[720px] min-w-[360px] 1000:w-full 1000:min-w-0 1000:max-w-none h-screen '>
      <ChatMainHeader />
      <ChatMainChat />
      <ChatMainInputArea />
    </div>
  )
}

export default ChatMain