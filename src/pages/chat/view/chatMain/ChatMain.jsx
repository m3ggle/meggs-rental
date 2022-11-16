import React from 'react'
import ChatMainChat from './ChatMainChat'
import ChatMainHeader from './ChatMainHeader'
import ChatMainInputArea from './ChatMainInputArea'

const ChatMain = () => {
  return (
    <div className='flex flex-col gap-y-2 w-full h-screen '>
      <ChatMainHeader />
      <ChatMainChat />
      <ChatMainInputArea />
    </div>
  )
}

export default ChatMain