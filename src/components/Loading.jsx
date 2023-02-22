import React from "react";
import { useDarkModeContext } from "../context/darkMode/darkModeContext";

const Loading = ({ width = 100, height = null }) => {
  const { darkMode } = useDarkModeContext();

  const lmLoading = process.env.REACT_APP_LOADING_LM;
  const dmLoading = process.env.REACT_APP_LOADING_DM;

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
        src={darkMode ? dmLoading : lmLoading}
        alt="loading"
        loading="lazy"
      />
    </div>
  );
};

export default Loading;
