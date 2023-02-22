import React from "react";
import { useNavigate } from "react-router-dom";

const SignWrapper = ({ children, pic, puffer }) => {
  const navigate = useNavigate();
  const handleHomeButtonClick = () => {
    navigate("/homepage");
  };
  return (
    <div className="relative flex w-full justify-center bg-white dark:bg-dmGrey900">
      {/* info part */}
      <div className="flex h-screen w-full max-w-[560px] flex-col items-center gap-y-2 overflow-scroll px-6 py-[28px]">
        {/* puffer */}
        {(puffer === undefined || puffer) && (
          <div className="h-[40px] min-h-[40px] w-full 600:h-[100px] 600:min-h-[100px]"></div>
        )}
        {children}
      </div>

      {/* pic part */}
      <div className="relative hidden h-screen w-full p-3 1000:flex">
        <img
          className="h-full w-full overflow-hidden rounded-[30px] bg-lmGrey100 object-cover object-center dark:bg-dmGrey800"
          src={pic}
          alt="filler or user"
          loading="lazy"
        />
        <button
          onClick={handleHomeButtonClick}
          className={`absolute top-[56px] right-[76px] flex h-[64px] w-[64px] items-center justify-center rounded-full bg-white duration-300 hover:scale-102 active:scale-98 dark:border dark:border-solid dark:border-transparent dark:bg-dmGrey900 dark:hover:border-dmGrey800`}
        >
          <i className="fa-solid fa-house text-[28px] text-lmGrey800 dark:text-dmGrey100"></i>
        </button>
      </div>
    </div>
  );
};

export default SignWrapper;
