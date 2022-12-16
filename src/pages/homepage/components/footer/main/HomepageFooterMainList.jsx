import React from "react";
import { useNavigate } from "react-router-dom";

const HomepageFooterMainList = ({ content }) => {
  const navigate = useNavigate();
  const handleClick = (item) => {
    item.linkTo && navigate(item.linkTo);
  };

  return (
    <>
      {content.map((group, groupIndex) => (
        <div key={groupIndex} className="flex w-full flex-col gap-y-2">
          {group.map((item, itemIndex) => (
            <p
              key={itemIndex}
              onClick={() => handleClick(item)}
              className={
                item.type === "title"
                  ? "font-bold text-lmGrey800 dark:text-dmGrey25"
                  : `text-lmGrey600 ${
                      item.linkTo
                        ? "cursor-pointer hover:text-lmGrey800 active:text-lmPrimary dark:hover:text-dmGrey25 dark:active:text-dmPrimary"
                        : "cursor-text"
                    }  w-fit duration-300 dark:text-dmGrey100`
              }
            >
              {item.content}
            </p>
          ))}
        </div>
      ))}
    </>
  );
};

export default HomepageFooterMainList;
