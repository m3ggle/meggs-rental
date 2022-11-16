import React from 'react'
import ChatMain from './view/chatMain/ChatMain'
import ChatSidebar from './view/chatSidebar/ChatSidebar'

const Chat = () => {
  return (
    <div className='flex relative bg-white w-full h-full'>
      <ChatSidebar />
      <ChatMain />
    </div>
  )
}

export default Chat