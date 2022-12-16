import React from "react";
import HomepageChatImages from "./chat/HomepageChatImages";
import HomepageChatText from "./chat/HomepageChatText";

const HomepageChat = ({ darkMode }) => {
  return (
    <div
      id="chat"
      className="relative flex w-full flex-col gap-y-6 bg-white py-10 dark:bg-dmGrey900 700:px-11 1200:py-14 1200:px-14"
    >
      <HomepageChatText />
      <HomepageChatImages darkMode={darkMode} />
    </div>
  );
};

export default HomepageChat;
