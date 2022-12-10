import React from "react";
import MapScreenshot from "../../../assets/img/mapScreenshot.webp"


const HomepageSearch = () => {
  return (
      <div id="directSearch" className="h-[720px] w-full bg-cover bg-center"
        style={{backgroundImage: `url(${MapScreenshot})`}}
      >
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-t from-white via-white/0 to-white">
        <div className="h-[92px] w-[714px] rounded-full bg-blue-200"></div>
      </div>
    </div>
  );
};

export default HomepageSearch;
