import React from "react";
import HomepageChatImages from "./chat/HomepageChatImages";
import HomepageChatText from "./chat/HomepageChatText";

const HomepageChat = ({ darkMode }) => {
  return (
    <div
      id="chat"
      className="relative flex w-full flex-col gap-y-6 bg-white py-16 dark:bg-dmGrey900 700:py-[100px] 700:px-11 1200:px-14"
    >
      <HomepageChatText />
      <HomepageChatImages darkMode={darkMode} />
    </div>
  );
};

export default HomepageChat;
