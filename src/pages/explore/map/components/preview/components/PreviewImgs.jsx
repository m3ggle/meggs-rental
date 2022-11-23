import React from 'react'
import Bmw1 from "../../../../../../assets/img/bmw1.jpg";
import Bmw2 from "../../../../../../assets/img/bmw2.jpg";
import Bmw3 from "../../../../../../assets/img/bmw3.jpg";
import Bmw4 from "../../../../../../assets/img/bmw4.jpg";
import Bmw5 from "../../../../../../assets/img/bmw5.jpg";
const picArray = [Bmw1, Bmw2, Bmw3, Bmw4, Bmw5];

const PreviewImgs = ({offerImages}) => {
  return (
    <div className="flex min-h-[220px] w-full gap-x-2 overflow-y-hidden overflow-x-scroll rounded-lg">
      {offerImages.map((pic, index) => (
        <div
          key={index}
          className="h-[220px] w-40 min-w-[160px] rounded-lg bg-slate-100 bg-cover bg-center shadow"
          style={{ backgroundImage: `url(${pic})` }}
        ></div>
      ))}
      {/* {picArray.map((pic, index) => (
        <div
          key={index}
          className="h-[220px] w-40 min-w-[160px] rounded-lg bg-slate-100 bg-cover bg-center shadow"
          style={{ backgroundImage: `url(${pic})` }}
        ></div>
      ))} */}
    </div>
  );
}

export default PreviewImgs