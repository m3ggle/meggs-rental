import React from 'react'
import ExampleData from '../../../../ExampleData'
import ChatMsg from './ChatMsg'

const ChatMainChat = () => {
  const {messages} = ExampleData()
  return (
    <div className="flex w-full flex-grow flex-col-reverse gap-y-2 p-6 overflow-scroll">
      {messages.map((msg) => (
        <ChatMsg key={msg.id} owner={msg.owner} text={msg.text} />
      ))}
    </div>
  );
}

export default ChatMainChat