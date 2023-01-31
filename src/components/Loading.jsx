import React from "react";
import { useDarkModeContext } from "../context/darkMode/darkModeContext";

const Loading = ({ width = 100, height = null }) => {
  const { darkMode } = useDarkModeContext();

  return (
    <div
      className={`flex ${
        height !== null && "max-h-[60%]"
      } h-full w-full flex-grow items-center justify-center`}
    >
      <img
        style={{
          height: "fit",
          width: `${width}px`,
        }}
        src={
          darkMode
            ? "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2FthreeDotsLoadingDm.svg?alt=media&token=0e60be95-2b3a-4e03-88f0-a329a1397a88"
            : "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2FthreeDotsLoadingLm.svg?alt=media&token=0e60be95-2b3a-4e03-88f0-a329a1397a88"
        }
        alt="loading"
      />
    </div>
  );
};

export default Loading;
